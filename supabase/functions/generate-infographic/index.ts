import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  impact: string;
  timeline?: string;
  scope?: string;
  problem: {
    stat: string;
    statLabel: string;
  };
  results: Array<{
    value: string;
    label: string;
    change: string;
  }>;
  metricArchitecture?: {
    input: { name: string; target: string; baseline: string };
    output: { name: string; target: string; baseline: string };
    guardrail: { name: string; target: string; baseline: string };
  };
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { caseStudy } = await req.json() as { caseStudy: CaseStudyData };
    
    if (!caseStudy) {
      throw new Error('Case study data is required');
    }

    // Build a rich prompt for infographic generation
    const prompt = buildInfographicPrompt(caseStudy);

    console.log(`Generating infographic for case study: ${caseStudy.id}`);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-pro-image-preview',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        modalities: ['image', 'text'],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Usage limit reached. Please add credits.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the generated image
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    const textContent = data.choices?.[0]?.message?.content;

    if (!imageUrl) {
      throw new Error('No image was generated');
    }

    console.log(`Successfully generated infographic for: ${caseStudy.id}`);

    return new Response(JSON.stringify({ 
      success: true,
      imageUrl,
      description: textContent,
      caseStudyId: caseStudy.id,
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error generating infographic:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function buildInfographicPrompt(caseStudy: CaseStudyData): string {
  const results = caseStudy.results.map(r => `${r.value} ${r.label}`).join(', ');
  
  const metricsSection = caseStudy.metricArchitecture 
    ? `
METRIC ARCHITECTURE:
- Input Metric: ${caseStudy.metricArchitecture.input.name} (${caseStudy.metricArchitecture.input.baseline} → ${caseStudy.metricArchitecture.input.target})
- Output Metric: ${caseStudy.metricArchitecture.output.name} (${caseStudy.metricArchitecture.output.baseline} → ${caseStudy.metricArchitecture.output.target})
- Guardrail: ${caseStudy.metricArchitecture.guardrail.name} (${caseStudy.metricArchitecture.guardrail.target})
` : '';

  return `Create a professional, editorial-style infographic for a product management case study. This should be a visually striking hero image that summarizes the entire case study at a glance.

CASE STUDY DETAILS:
Title: ${caseStudy.title}
Subtitle: ${caseStudy.subtitle}
Company: ${caseStudy.company}
Impact: ${caseStudy.impact}
${caseStudy.timeline ? `Timeline: ${caseStudy.timeline}` : ''}
${caseStudy.scope ? `Scope: ${caseStudy.scope}` : ''}

PROBLEM:
Key Stat: ${caseStudy.problem.stat}
Context: ${caseStudy.problem.statLabel}

RESULTS:
${results}
${metricsSection}

DESIGN REQUIREMENTS:
- Modern, minimal editorial style with bold typography
- Use a sophisticated color palette (deep navy, gold accents, or muted earth tones)
- Include visual representation of the transformation (before → after flow)
- Feature the key metrics prominently with data visualization elements
- Include subtle iconography representing the industry (global, finance, HR tech)
- Aspect ratio: 16:9 for hero placement
- Style reference: McKinsey/BCG presentation quality meets modern SaaS design
- Include a subtle timeline or process flow showing Problem → Approach → Result
- Make the primary impact number (${caseStudy.impact}) the visual focal point

DO NOT include:
- Stock photo imagery of people
- Generic business clipart
- Busy or cluttered layouts
- Low-contrast color combinations

The image should feel like a premium case study cover from a top-tier design publication.`;
}
