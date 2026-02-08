import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CaseStudy } from "@/data/caseStudies";

interface InfographicState {
  isLoading: boolean;
  error: string | null;
  imageUrl: string | null;
  description: string | null;
}

const STORAGE_KEY = "case_study_infographics";

// Get cached infographics from localStorage
function getCachedInfographics(): Record<string, { imageUrl: string; description?: string }> {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
}

// Save infographic to localStorage
function cacheInfographic(caseStudyId: string, imageUrl: string, description?: string) {
  try {
    const cached = getCachedInfographics();
    cached[caseStudyId] = { imageUrl, description };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cached));
  } catch (e) {
    console.warn("Failed to cache infographic:", e);
  }
}

export function useInfographic(caseStudy: CaseStudy) {
  // Check cache on init
  const cached = getCachedInfographics()[caseStudy.id];
  
  const [state, setState] = useState<InfographicState>({
    isLoading: false,
    error: null,
    imageUrl: cached?.imageUrl || null,
    description: cached?.description || null,
  });

  const generateInfographic = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const { data, error } = await supabase.functions.invoke("generate-infographic", {
        body: {
          caseStudy: {
            id: caseStudy.id,
            title: caseStudy.title,
            subtitle: caseStudy.subtitle,
            company: caseStudy.company,
            impact: caseStudy.impact,
            timeline: caseStudy.timeline,
            scope: caseStudy.scope,
            problem: caseStudy.problem,
            results: caseStudy.results,
            metricArchitecture: caseStudy.metricArchitecture,
          },
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to generate infographic");
      }

      if (!data.success || !data.imageUrl) {
        throw new Error(data.error || "No image returned");
      }

      // Cache the result
      cacheInfographic(caseStudy.id, data.imageUrl, data.description);

      setState({
        isLoading: false,
        error: null,
        imageUrl: data.imageUrl,
        description: data.description,
      });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
    }
  }, [caseStudy]);

  const clearInfographic = useCallback(() => {
    const cached = getCachedInfographics();
    delete cached[caseStudy.id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cached));
    setState({
      isLoading: false,
      error: null,
      imageUrl: null,
      description: null,
    });
  }, [caseStudy.id]);

  return {
    ...state,
    generateInfographic,
    clearInfographic,
    hasInfographic: !!state.imageUrl,
  };
}
