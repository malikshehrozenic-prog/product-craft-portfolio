// Case Studies Data - Rich portfolio content
export interface Quote {
  text: string;
  who: string;
}

export interface Option {
  name: string;
  assessment: string;
  chosen: boolean;
}

export interface Stakeholder {
  role: string;
  concern: string;
  mitigation: string;
}

export interface Tradeoff {
  decision: string;
  tension: string;
  rationale: string;
}

export interface Result {
  value: string;
  label: string;
  change: string;
}

export interface Lesson {
  title: string;
  text: string;
}

export interface MetricArchitecture {
  input: { name: string; target: string; baseline: string; why: string };
  output: { name: string; target: string; baseline: string; why: string };
  guardrail: { name: string; target: string; baseline: string; why: string };
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  impact: string;
  tags: string[];
  color: string;
  company: string;
  teamSize: string;
  role: string;
  timeline?: string;
  scope?: string;
  opportunitySizing?: string;
  stakeholderNarrative?: string;
  metricArchitecture?: MetricArchitecture;
  problem: {
    text: string;
    stat: string;
    statLabel: string;
  };
  discovery: {
    quotes: Quote[];
    insight: string;
  };
  approach: {
    options: Option[];
    framing: string;
  };
  stakeholders: Stakeholder[];
  tradeoffs: Tradeoff[];
  results: Result[];
  qualitative: string[];
  lessons: {
    worked: Lesson[];
    different: Lesson[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  // 01 - EOR Pricing & Margin Intelligence (NEW - FEATURED)
  {
    id: "pricing-intelligence",
    number: "01",
    title: "EOR Pricing & Margin Intelligence",
    subtitle: "Turning Opaque Cost Structures into a Pricing Advantage",
    oneLiner: "Designed and shipped a dynamic pricing engine that replaced static country-by-country spreadsheets with real-time margin intelligence — driving 4.2pp margin improvement and $3.8M annual impact.",
    impact: "4.2pp margin · $3.8M annual",
    tags: ["Pricing Strategy", "Revenue Optimization", "Data Infrastructure", "GTM"],
    color: "hsl(var(--primary))",
    company: "Oyster HR",
    teamSize: "2 Engineers, Data Science, Finance, Sales Enablement, Country Ops (85)",
    role: "Product Lead — pricing model design, competitive analysis, GTM strategy, P&L ownership",
    timeline: "Q2 2023 — Q1 2024",
    scope: "85 countries, $50M+ invoicing volume",
    opportunitySizing: "85 countries × avg $600 management fee per employee per month × 4,200 employees = ~$30M annual invoicing volume at risk of margin erosion. Even 2% improvement = $600K+ annually.",
    stakeholderNarrative: "The CFO was worried about client churn if we raised prices. Sales wanted pricing stability for selling. Country Managers resisted central control. Data Engineering questioned our cost data integrity. I had to navigate a minefield where everyone had legitimate concerns and nobody wanted to move first.",
    metricArchitecture: {
      input: { name: "Data Freshness", target: "< 30 days", baseline: "~6 months", why: "Stale cost data = stale pricing = margin erosion" },
      output: { name: "Gross Margin", target: "+4pp improvement", baseline: "Baseline margin", why: "Direct measure of pricing effectiveness" },
      guardrail: { name: "Client Churn Rate", target: "No increase", baseline: "Baseline churn", why: "Protect retention while optimizing margin" },
    },
    problem: {
      text: `Oyster's pricing was built on static spreadsheets maintained by the Finance team. Every country had a different cost model, updated sporadically, with no connection to actual cost changes. Sales would quote a deal, Finance would discover the cost basis was 8 months old, and we'd either lose margin or scramble to adjust mid-deal.`,
      stat: "62%",
      statLabel: "of country pricing was based on cost assumptions older than 6 months. We were making $50M+ in pricing decisions on stale data.",
    },
    discovery: {
      quotes: [
        { text: "I lost a 50-person deal in Germany last week because Remote quoted 15% lower. I have no idea if our pricing is even competitive anymore.", who: "Enterprise Sales Lead" },
        { text: "I update the country cost models once a quarter, and it takes me two weeks. By the time I finish, the first countries are already outdated again.", who: "Finance Analyst" },
        { text: "Our Netherlands pricing hasn't changed in 14 months. In that time, the statutory contributions have changed three times.", who: "Country Manager, Netherlands" },
      ],
      insight: "This wasn't a pricing problem — it was a data freshness problem that manifested in pricing. The pricing team had good judgment; they just didn't have current information to apply it to.",
    },
    approach: {
      options: [
        { name: "Hire a pricing consultancy", assessment: "Would produce a one-time pricing study that's outdated in 6 months", chosen: false },
        { name: "Build into core billing system", assessment: "The ideal long-term solution, but requires billing system rebuild — 12+ months", chosen: false },
        { name: "Data-driven pricing layer", assessment: "Build a pricing intelligence system that sits alongside billing and ensures data freshness", chosen: true },
      ],
      framing: `I positioned this to the executive team not as "we need to fix our pricing" (which would raise concerns about our current pricing being wrong) but as "we need pricing intelligence infrastructure" — framing it as data infrastructure, not pricing policy. This let us move faster because we weren't debating specific prices.`,
    },
    stakeholders: [
      { role: "CFO", concern: "Changing pricing could trigger client churn if we raise prices", mitigation: "Grandfathered existing contracts. New pricing only applied to new deals and renewals. Positioned as 'market-rate alignment' not 'price increase'" },
      { role: "VP Sales", concern: "My team needs pricing stability — they can't sell if prices fluctuate", mitigation: "90-day pricing windows. Once a quote is generated, that price is locked. Sales has certainty; we have margin protection" },
      { role: "Country Managers (85 countries)", concern: "Central pricing can't account for local market conditions", mitigation: "Built Country Manager cost inputs into the system. Local knowledge feeds central intelligence. They became contributors, not recipients" },
      { role: "Data Engineering", concern: "Where is all this cost data coming from? Our data integrity is questionable", mitigation: "Started with manual Country Manager inputs, not automated data. Human verification as the first layer. Data quality built into the process" },
    ],
    tradeoffs: [
      { decision: "Country Manager cost inputs, not automated data only", tension: "Accuracy vs. speed", rationale: "Local knowledge catches things automated data misses. The hybrid model proved more accurate than either approach alone" },
      { decision: "90-day pricing windows, not real-time", tension: "Precision vs. sales operability", rationale: "Sales needs to quote and close within a stable window. Real-time pricing creates deal uncertainty" },
      { decision: "Grandfathered existing contracts", tension: "Margin recovery vs. retention risk", rationale: "Existing clients stay at current rates. New pricing applies at renewal. This removed the churn risk that was blocking the initiative" },
      { decision: "Shipped with 30 countries, not 85", tension: "Coverage vs. speed", rationale: "30 countries = 80% of revenue. Full coverage would have delayed launch by 4 months for 20% more impact" },
    ],
    results: [
      { value: "4.2pp", label: "Gross margin improvement", change: "Across the pricing portfolio" },
      { value: "$3.8M", label: "Annual revenue impact", change: "From pricing optimization + cost adjustments" },
      { value: "31%", label: "Win rate improvement", change: "On competitive deals vs. Deel/Remote" },
      { value: "85", label: "Countries with dynamic pricing", change: "Up from 0 (all static)" },
    ],
    qualitative: [
      "CFO cited this as 'the single biggest margin initiative of the year' in the board meeting",
      "Sales started winning competitive deals they previously lost — they could explain why our pricing was what it was",
      "Country Managers became pricing advocates because they had ownership of their cost inputs",
      "Finance time on pricing dropped by 60% — the system did the work they used to do manually",
    ],
    lessons: {
      worked: [
        { title: "Revenue framing over cost framing", text: "'We're leaving $1-2M on the table' landed better than 'our pricing is broken.' Revenue framing creates urgency without blame." },
        { title: "Grandfathering as a political tool", text: "The grandfathering decision removed 80% of the internal resistance. Nobody had to defend raising prices on existing clients." },
        { title: "Country Managers as data sources", text: "The hybrid model (automated data + local insights) proved more effective than either alone. Local knowledge catches edge cases algorithms miss." },
      ],
      different: [
        { title: "Built client-facing pricing transparency earlier", text: "Clients wanted to understand pricing structures. We built the internal tool first, but client-facing transparency should have come sooner." },
        { title: "A/B tested pricing more aggressively", text: "We set prices based on cost-plus and market feedback. More systematic A/B testing would have revealed price sensitivity faster." },
      ],
    },
  },

  // 02 - Global Benefits Platform (existing, enhanced)
  {
    id: "benefits-engine",
    number: "02",
    title: "Global Benefits Platform",
    subtitle: "Cost Center → $3M Revenue Engine",
    oneLiner: "Led a cross-functional team to transform benefits from a compliance checkbox into a monetized platform across 160+ countries — driving $3M GPV, 10% ARR uplift, and becoming Oyster's #1 competitive differentiator.",
    impact: "$3M GPV · 10% ARR uplift",
    tags: ["Product Strategy", "Monetization", "Cross-Functional Leadership", "GTM"],
    color: "hsl(210 70% 55%)",
    company: "Oyster HR",
    teamSize: "4 Engineers, Benefits Ops, Legal (30 countries), Sales, Finance — cross-functional",
    role: "Product Lead — strategy, pricing architecture, GTM enablement, cross-functional alignment",
    timeline: "Q1 2023 — Q4 2023",
    scope: "15 countries at launch, scaled to 40+",
    opportunitySizing: "Competitive analysis showed benefits as the #2 reason for churn. Exit interviews revealed 23% of churned clients cited benefits gaps. At $2M ARR at risk × 23% = $460K retention value, plus new revenue opportunity from benefits fees across 40 countries.",
    stakeholderNarrative: "The CEO saw benefits as a potential distraction from core EOR. Sales wanted it but didn't know how to price it. Legal had 160 countries of regulatory concerns. Operations was already stretched. I had to build a coalition across 5 teams who all had reasons to say no.",
    metricArchitecture: {
      input: { name: "Benefits Enrollment Rate", target: "60% of eligible within 30 days", baseline: "0%", why: "Measures adoption velocity" },
      output: { name: "Benefits GPV", target: "$3M", baseline: "$0", why: "Direct measure of revenue generation" },
      guardrail: { name: "Benefits Support Ticket Rate", target: "< 5 per 100 enrolled/month", baseline: "Not tracked", why: "Ensure quality at scale" },
    },
    problem: {
      text: `Benefits at Oyster were a cost of doing business — statutory health insurance, mandatory pension contributions, whatever local law required. Nothing more. Meanwhile, our clients were churning to benefits brokers for voluntary coverage (dental in Germany, supplemental health in Brazil), and competitors like Deel were starting to bundle benefits as a sales differentiator.`,
      stat: "$0",
      statLabel: "revenue from benefits despite managing health, pension, and insurance for thousands of employees across 160+ countries. Every dollar spent on benefits administration was pure cost.",
    },
    discovery: {
      quotes: [
        { text: "We lose clients not because our payroll is bad, but because they want one platform for everything. When they need dental in Germany or supplemental health in Brazil, we send them to a broker. That's when we lose the relationship.", who: "Client Success Lead" },
        { text: "I've been manually comparing broker quotes in spreadsheets for 6 months. There's no system, no pricing model, no way to know if we're even competitive.", who: "Benefits Operations Manager" },
      ],
      insight: "Benefits wasn't a feature gap — it was a retention lever and revenue opportunity hiding inside an ops team. The moment I reframed it from 'How do we offer benefits?' to 'How do we make benefits a growth engine?', the executive conversation shifted from cost to investment.",
    },
    approach: {
      options: [
        { name: "Partner with one global broker", assessment: "Fastest path, but locks us into one provider's margins, limitations, and coverage gaps", chosen: false },
        { name: "Build a benefits marketplace", assessment: "Most ambitious — but 12+ months minimum and massive regulatory complexity across 160 countries", chosen: false },
        { name: "Curated benefits-as-a-service", assessment: "Partner with local brokers country-by-country, standardize the customer experience, capture margin through service fees", chosen: true },
      ],
      framing: `The key insight was the pricing model. Instead of marking up broker costs (which creates misaligned incentives), I designed a service fee mechanism — Oyster earns a transparent fee for benefits administration, plan selection, and ongoing management. This aligned our incentive with client outcomes, not broker commissions.`,
    },
    stakeholders: [
      { role: "CEO", concern: "Is this a distraction from core EOR?", mitigation: "Modeled the $3M revenue opportunity and showed benefits was the #2 churn reason. This isn't a distraction — it's a retention strategy that pays for itself" },
      { role: "Legal (30+ country teams)", concern: "Regulatory exposure across 160 countries", mitigation: "Phased rollout: 15 low-risk countries first. Built a compliance checklist with Legal for each new country launch" },
      { role: "Sales Team", concern: "Can we actually sell this? How do we price it?", mitigation: "Co-designed the pricing model with Sales. When Sales helps build pricing, they sell with conviction" },
      { role: "Operations Team", concern: "We're already stretched thin managing statutory benefits", mitigation: "Automated broker comparison and enrollment workflows. Net reduction in manual work despite expanded scope" },
    ],
    tradeoffs: [
      { decision: "15 countries first, not 160", tension: "Coverage vs. quality", rationale: "15 countries = 70% of active employees. Launching everywhere would have created 150 broker relationships to manage simultaneously" },
      { decision: "Service fee model, not markup", tension: "Revenue per deal vs. trust", rationale: "Transparent fees aligned incentives. Markup model would have created constant 'are we getting the best rate?' friction" },
      { decision: "Curated plans, not marketplace", tension: "Choice vs. quality control", rationale: "In regulated benefit markets, quality control matters more than optionality. Bad plans = compliance risk" },
      { decision: "Bundled with EOR pricing", tension: "Transparency vs. attach rate", rationale: "Bundling drove 3x higher adoption than à la carte. The value proposition is stronger as a package" },
    ],
    results: [
      { value: "$3M", label: "Gross Profit Value", change: "From $0 baseline" },
      { value: "10%", label: "ARR uplift", change: "On benefits-attached deals" },
      { value: "23%", label: "Churn reduction", change: "For clients using benefits" },
      { value: "40+", label: "Countries launched", change: "From 15 at launch" },
    ],
    qualitative: [
      "Benefits became the #1 requested feature in enterprise sales conversations — ahead of payroll flexibility",
      "Three enterprise accounts cited benefits as the specific reason they didn't churn to Deel",
      "CEO referenced the benefits monetization model in the Series C investor pitch as an example of product-led revenue expansion",
      "Operations team went from 'this is a nightmare' to 'this is my favorite part of the job' — because tooling replaced spreadsheets",
    ],
    lessons: {
      worked: [
        { title: "Revenue framing changed the entire conversation", text: "The moment I put a dollar figure on the opportunity, executive support went from 'interesting idea' to 'fully funded initiative.'" },
        { title: "Making Sales co-designers of pricing", text: "When Sales helps build the pricing model, they don't need a training deck. They sell with conviction because they understand why every number exists." },
        { title: "Phased country rollout", text: "Starting with 15 countries let us learn broker management, compliance patterns, and enrollment workflows at manageable scale before expanding." },
      ],
      different: [
        { title: "Invested in self-serve enrollment earlier", text: "Manual enrollment became the bottleneck at scale. We hit a ceiling where adding countries didn't help because ops couldn't process enrollments fast enough." },
        { title: "Built utilization analytics from day one", text: "For 3 months we couldn't measure whether employees actually used the benefits we enrolled them in. That data would have helped us optimize plans and prove ROI faster." },
      ],
    },
  },

  // 03 - Wage Liability Risk Engine (existing, enhanced)
  {
    id: "wage-risk",
    number: "03",
    title: "Wage Liability Risk Engine",
    subtitle: "Real-Time Financial Risk Visibility",
    oneLiner: "Turned a $4.2M blind spot into a real-time risk dashboard — prototyped in 3 weeks, then handed Engineering a validated spec that changed the roadmap.",
    impact: "92% faster · $4.2M visibility",
    tags: ["Python", "Streamlit", "Financial Modeling", "Stakeholder Strategy"],
    color: "hsl(145 60% 45%)",
    company: "Oyster HR",
    teamSize: "Finance Analyst (co-designer), Legal Counsel, 2 Engineers (production build), Country Leads",
    role: "Product Lead — strategy, prototype development, stakeholder alignment, engineering handoff",
    timeline: "Q3 2023 — Q1 2024",
    scope: "30 countries, $50M+ financial exposure",
    opportunitySizing: "30 countries × avg 50 employees per country × avg $2,800 in termination liability per employee = ~$4.2M in untracked exposure. One surprise liability event in a high-exposure country could materially impact quarterly results.",
    stakeholderNarrative: "Legal wanted 100% country coverage before anything went live. Finance wanted real-time data but didn't trust the formulas. Engineering had no capacity for 'internal tools.' I needed to build something that satisfied Legal's accuracy concerns, Finance's usability needs, and Engineering's skepticism — all without any allocated resources.",
    metricArchitecture: {
      input: { name: "Data Freshness", target: "< 24 hours", baseline: "~6 weeks", why: "Measures how current our liability calculations are" },
      output: { name: "Liability Calculation Accuracy", target: "±5% vs. legal review", baseline: "±20-30%", why: "Accuracy determines whether the tool is trusted for decisions" },
      guardrail: { name: "Stale Formula Rate", target: "0 countries with formulas >90 days without review", baseline: "Not tracked", why: "Ensures we don't build on outdated legal assumptions" },
    },
    problem: {
      text: `As an EOR, every employee across 30+ countries is a financial liability — terminate them tomorrow, and we owe severance, notice pay, statutory bonuses, and accrued vacation. The CFO asked a simple question: "What's our total exposure today?" Nobody could answer.`,
      stat: "$4.2M",
      statLabel: "in termination liability, calculated quarterly using 6-week-old data and manual Excel models. By the time Finance published a number, it was already wrong.",
    },
    discovery: {
      quotes: [
        { text: "I spend 3 days every quarter pulling data from our HRIS, running it through country-specific Excel workbooks, then manually converting currencies. By the time I'm done, the data is already outdated.", who: "Finance Analyst" },
        { text: "The formulas live in different places — some in old counsel memos, some in our wiki, some in people's heads. I'm never fully confident we're calculating Brazil correctly.", who: "Legal Counsel" },
      ],
      insight: "This wasn't a technology problem — it was an organizational one. High-value data, no single owner, manual process, affects multiple teams. The kind of problem that persists because it's nobody's primary job to solve.",
    },
    approach: {
      options: [
        { name: "Buy", assessment: "No off-the-shelf product exists for EOR-specific liability modeling", chosen: false },
        { name: "Build (Engineering)", assessment: "Right long-term, but roadmap locked for 2 quarters — 6-month wait minimum", chosen: false },
        { name: "PM-led prototype → Engineering handoff", assessment: "Validate the concept in 3 weeks, give Engineering a working spec instead of a slide deck", chosen: true },
      ],
      framing: `I didn't frame this as "going around Engineering." I framed it as "de-risking for Engineering." By handing them a validated prototype with real stakeholder feedback, I eliminated the ambiguity that makes engineers reluctant to commit.`,
    },
    stakeholders: [
      { role: "CFO", concern: "Is this accurate enough for board-level decisions?", mitigation: "Weekly calibration sessions with Finance. Legal-validated formulas. Positioned output as 'planning grade, not audit grade'" },
      { role: "Engineering Lead", concern: "Don't create shadow IT or tech debt", mitigation: "Shared architecture docs from day one. Made him a reviewer, not a bystander. Clear handoff criteria defined upfront" },
      { role: "Legal Counsel", concern: "Liability if the tool gives wrong numbers", mitigation: "Positioned as 'planning tool, not legal advice.' Caveat language on every output. Legal co-signed the formula validation" },
      { role: "Finance Analyst", concern: "Will this actually save me time or just create more work?", mitigation: "Made her the co-designer. Every UI decision went through her. She became the internal champion" },
    ],
    tradeoffs: [
      { decision: "10 countries, not 30", tension: "Coverage vs. speed", rationale: "10 countries = 80% of total liability. Covering the long tail would have tripled scope for 20% more coverage" },
      { decision: "Simplified formulas", tension: "Precision vs. usability", rationale: "Planning accuracy is sufficient. Legal-grade precision requires legal review of every formula — a 6-month process" },
      { decision: "Streamlit, not internal stack", tension: "Integration vs. validation speed", rationale: "The goal was proving the concept, not building the product. Validate first, then commit Engineering resources" },
      { decision: "Manual data upload (CSV)", tension: "Automation vs. scope", rationale: "HRIS API integration is a 2-sprint effort. CSV upload let us ship in 1 week and test with real data immediately" },
    ],
    results: [
      { value: "15 min", label: "Report generation", change: "Down from 3 days" },
      { value: "Real-time", label: "Data freshness", change: "Down from 6 weeks stale" },
      { value: "20 hrs", label: "Saved per quarter", change: "Finance analyst time" },
      { value: "New", label: "Concentration alerts", change: "Previously invisible risk" },
    ],
    qualitative: [
      "CFO now references the dashboard in board meetings — it became a governance tool, not just an ops tool",
      "Enterprise Sales started using liability management as a competitive differentiator against Deel and Remote",
      "Engineering prioritized the production build for Q3 — the prototype de-risked the investment decision",
      "The Finance Analyst who co-designed it became its biggest advocate, training other team members without being asked",
    ],
    lessons: {
      worked: [
        { title: "Co-designing with the end user", text: "Making the Finance Analyst a co-designer meant every decision had user validation built in. Her advocacy made executive buy-in effortless." },
        { title: '"De-risking" framing for Engineering', text: "When you hand engineers a working prototype with validated requirements, you're not bypassing them — you're giving them confidence." },
        { title: "80% coverage was enough to ship", text: "10 countries covered the vast majority of exposure. Waiting for 30 would have killed momentum." },
      ],
      different: [
        { title: "Involved Legal earlier", text: "They had context about upcoming labor law changes in Brazil and France that I didn't know about. Two weeks of rework could have been avoided." },
        { title: "Built the data pipeline before the dashboard", text: "A standardized CSV template shared on day one would have accelerated adoption by a week." },
      ],
    },
  },

  // 04 - AI Expense Intelligence (existing, enhanced)
  {
    id: "expense-intelligence",
    number: "04",
    title: "AI Expense Intelligence System",
    subtitle: "Intelligent Multi-Country Expense Processing",
    oneLiner: "Designed and prototyped an AI-powered expense pipeline — receipt OCR across 12 languages, country-specific tax classification, and Slack-based approvals — cutting processing time by 70%.",
    impact: "70% faster · 150 hrs/mo saved",
    tags: ["n8n", "OpenAI Vision", "Google Apps Script", "Gemini AI"],
    color: "hsl(40 90% 50%)",
    company: "Oyster HR",
    teamSize: "3 Ops Analysts, Compliance Lead, Client Managers, Engineering (handoff)",
    role: "Product Lead — system design, AI architecture, tax rule framework, ops adoption",
    timeline: "Q2 2023 — Q4 2023",
    scope: "30 countries, 12 languages, ~2,400 submissions/month",
    opportunitySizing: "~2,400 expense submissions/month × 45 minutes manual processing = ~1,800 hours/month of ops capacity. At $25/hour fully-loaded = $45K/month in processing cost. 70% reduction = $31.5K/month savings.",
    stakeholderNarrative: "The biggest resistance came from an unexpected direction: the ops team was worried AI would replace them. I had to reframe from 'automation' to 'augmentation' — the AI handles the mechanical work so humans can focus on judgment calls and client relationships.",
    metricArchitecture: {
      input: { name: "Auto-Processing Rate", target: "70% without human intervention", baseline: "0%", why: "Measures AI reliability for routine cases" },
      output: { name: "Cost Per Expense Processed", target: "$4.40", baseline: "$14.60 fully-loaded", why: "Direct measure of efficiency gain" },
      guardrail: { name: "Tax Misclassification Rate", target: "< 1%", baseline: "~8-12%", why: "Compliance accuracy is non-negotiable" },
    },
    problem: {
      text: `Expense management in an EOR is uniquely painful because every country has different tax rules, receipt requirements, and reimbursement thresholds. An expense that's tax-deductible in Germany might be taxable income in Brazil. A receipt in Korean needs different validation than one in Portuguese.`,
      stat: "150 hrs/mo",
      statLabel: "of manual expense processing across the ops team. With 200+ reports monthly across 30 countries, the team was drowning — and accuracy was suffering.",
    },
    discovery: {
      quotes: [
        { text: "I have a folder of screenshots from Google Translate. That's how I figure out what a receipt says when it's in Korean or Portuguese.", who: "Expense Ops Analyst" },
        { text: "The approval chain is chaos. I email the client manager, they forget, I follow up three times, they finally approve over WhatsApp. Nothing is tracked.", who: "Payroll Operations Lead" },
      ],
      insight: "This wasn't just an efficiency problem — it was a data integrity and compliance risk. Unstructured approvals meant we couldn't audit expense decisions.",
    },
    approach: {
      options: [
        { name: "Buy (Expensify/Brex)", assessment: "Not built for EOR multi-entity, multi-country tax complexity", chosen: false },
        { name: "Build in-house (Engineering)", assessment: "Engineering capacity locked for 3+ quarters on core payroll infrastructure", chosen: false },
        { name: "No-code AI pipeline (prototype)", assessment: "n8n + OpenAI Vision + Gemini + Google Apps Script. Validate the workflow, prove the ROI", chosen: true },
      ],
      framing: `I positioned this as "intelligent middleware" — not replacing any existing system, but connecting them. Receipt comes in → AI extracts and translates → tax rules applied by country → routed for approval in Slack → synced to payroll.`,
    },
    stakeholders: [
      { role: "Ops Director", concern: "AI can't handle our edge cases — Korean receipts, handwritten notes", mitigation: "Built a confidence scoring system: above 85% = auto-process, below = human review" },
      { role: "Compliance Lead", concern: "Tax classification accuracy — one mistake triggers audits", mitigation: "Deterministic rule engine for tax, not probabilistic ML. Tax authorities need to see logic, not confidence scores" },
      { role: "Client Managers", concern: "Another tool to learn", mitigation: "Approvals happen in Slack — the tool they already live in. Zero new interfaces" },
      { role: "Engineering", concern: "Shadow IT risk", mitigation: "Full architecture documentation, API-first design. Clear handoff plan from day one" },
    ],
    tradeoffs: [
      { decision: "OpenAI Vision for OCR, not custom model", tension: "Accuracy vs. build time", rationale: "GPT-4V handled 92% of receipts accurately across 12 languages. Custom model would take 6 months" },
      { decision: "Airtable as database", tension: "Scale vs. speed", rationale: "Perfect for validation phase with <1000 records/month. Migration plan ready for when volume exceeds threshold" },
      { decision: "Slack for approvals, not web UI", tension: "Feature richness vs. adoption", rationale: "100% of managers already use Slack. Adoption friction = zero" },
      { decision: "Rule engine for tax, not ML", tension: "Sophistication vs. auditability", rationale: "When a tax authority asks 'why was this classified?' — the answer needs to be a rule, not a model weight" },
    ],
    results: [
      { value: "70%", label: "Processing time reduction", change: "45 min → 13 min per report" },
      { value: "92%", label: "AI extraction accuracy", change: "Across 12 languages" },
      { value: "< 2 hrs", label: "Approval turnaround", change: "Down from 3-5 business days" },
      { value: "150 hrs", label: "Monthly ops hours saved", change: "Redeployed to client-facing work" },
    ],
    qualitative: [
      "The ops team went from dreading expense cycles to processing them same-day — morale impact was immediate",
      "Compliance team gained a complete audit trail for the first time — every decision logged, every classification traceable",
      "Client managers described Slack approvals as 'invisible — in a good way.' They approve in 30 seconds between meetings",
      "Engineering adopted the architecture document as the basis for their own implementation roadmap",
    ],
    lessons: {
      worked: [
        { title: "Meeting users where they already are", text: "Slack as the approval interface eliminated the adoption problem entirely. The best product change is one the user doesn't notice." },
        { title: "Human-in-the-loop as a trust mechanism", text: "The confidence scoring system built trust with the ops team. They didn't feel replaced — they got a smart assistant." },
        { title: "Rules for compliance, AI for extraction", text: "Splitting 'AI handles messy stuff' and 'rules handle regulated stuff' made compliance comfortable." },
      ],
      different: [
        { title: "Launched with fewer countries", text: "30 countries on day one created a long tail of edge cases. Starting with 10 would have been cleaner." },
        { title: "Designed error messages for ops, not developers", text: "When OCR failed, the error messages were too technical. 'Multipart boundary parse error' doesn't help the analyst." },
      ],
    },
  },

  // 05 - Mobile Wallet & Agent Banking (NEW - FINCA)
  {
    id: "mobile-wallet",
    number: "05",
    title: "Mobile Wallet & Agent Banking",
    subtitle: "Financial Inclusion at Scale Across 20 Countries",
    oneLiner: "Led the product design for a mobile wallet and agent banking platform serving 2M+ users across 20 countries — 45% agent activation rate vs. 20% industry benchmark.",
    impact: "2M+ users · 20 countries · 45% agent activation",
    tags: ["Mobile Product", "Financial Inclusion", "Agent Networks", "Emerging Markets"],
    color: "hsl(160 60% 45%)",
    company: "FINCA International",
    teamSize: "3 Engineers, UX Researcher, 8 Country Ops Managers, Agent Network Leads",
    role: "Product Manager — user research, product design, agent workflow architecture, rollout strategy",
    timeline: "2016 — 2018",
    scope: "20 countries across Africa, Central Asia, and Latin America. 2M+ end users. 15,000+ agents.",
    opportunitySizing: "2M+ active clients across 20 countries × average 2 branch visits per month × 4 hours average travel time = 16M hours of client time spent traveling annually. Converting 50% to mobile/agent transactions = 8M hours saved.",
    stakeholderNarrative: "The board saw mobile banking as risky — regulatory exposure, fraud potential, reputation risk. Country ops worried agents weren't tech-savvy. Risk & Compliance had KYC/AML concerns across 20 different regulatory regimes. Branch staff feared displacement. I had to reframe from 'mobile banking' to 'client access' — meeting clients where they are, not replacing branches.",
    metricArchitecture: {
      input: { name: "Agent Activation Rate", target: "45%", baseline: "20% industry benchmark", why: "Activated agents drive transaction volume" },
      output: { name: "Branch Visit Reduction", target: "60% for mobile-enabled clients", baseline: "0%", why: "Measures convenience impact" },
      guardrail: { name: "Transaction Error Rate", target: "< 0.5%", baseline: "~2%", why: "Errors destroy trust in low-literacy populations" },
    },
    problem: {
      text: `FINCA International is a global microfinance institution serving clients in some of the most underserved markets. Clients were traveling hours — sometimes an entire day — to make small loan repayments at physical branches. This wasn't just inconvenient; it was expensive for clients (travel costs, lost work time) and for FINCA (branch infrastructure, staff time on routine transactions).`,
      stat: "4 hours",
      statLabel: "average round-trip travel time for a client to reach a FINCA branch in rural areas. Some clients sent their children to make payments because they couldn't afford to lose a day's work.",
    },
    discovery: {
      quotes: [
        { text: "My clients walk for hours to make a $5 repayment. Some of them send their children because they can't miss work.", who: "Loan Officer, Uganda" },
        { text: "I have a phone. Everyone in my village has a phone. We use M-Pesa for everything — except FINCA payments.", who: "Client, Kenya" },
        { text: "I could serve 3x more clients if they didn't all have to come to my office for routine transactions.", who: "Branch Manager, Tajikistan" },
      ],
      insight: "We didn't need to build a bank. Mobile money infrastructure already existed in most markets (M-Pesa, GCash, etc.). Our clients were already using these systems for other transactions. We needed to plug into that infrastructure, not compete with it.",
    },
    approach: {
      options: [
        { name: "Build a proprietary FINCA mobile wallet", assessment: "Full control but requires regulatory licenses in 20 countries, massive investment", chosen: false },
        { name: "Partner with one global mobile money provider", assessment: "Simpler but limits coverage — no single provider covers all 20 countries", chosen: false },
        { name: "Integration platform with local mobile money + agent network", assessment: "Connect to local mobile money in each country, build an agent network for the unbanked who don't have mobile money", chosen: true },
      ],
      framing: `I framed this to FINCA's board not as a technology project but as a "client access" initiative. We weren't building mobile banking — we were meeting clients where they already are. This framing aligned with FINCA's mission and made it easier to get board approval despite the perceived risks.`,
    },
    stakeholders: [
      { role: "CEO / Board", concern: "Mobile banking is risky — regulatory, fraud, reputation", mitigation: "Positioned as 'client access' not 'banking.' Phased rollout: 3 countries first. Weekly risk reviews" },
      { role: "Country Operations (20 countries)", concern: "Our agents aren't tech-savvy enough", mitigation: "USSD interface, not smartphone app. 2-hour training. Agent certification with ongoing support" },
      { role: "Risk & Compliance", concern: "KYC/AML requirements vary by country", mitigation: "Agent-assisted KYC. Tiered transaction limits. Integration with existing compliance systems" },
      { role: "Branch Staff / Loan Officers", concern: "This will replace us", mitigation: "Reframed as 'transaction offload so you can focus on client relationships.' Volume metrics showed more time for advisory, not job losses" },
    ],
    tradeoffs: [
      { decision: "USSD interface, not smartphone app", tension: "UX richness vs. accessibility", rationale: "Feature phones are 70% of devices in our markets. A beautiful app is useless if clients can't run it" },
      { decision: "Local mobile money partnerships, not proprietary wallet", tension: "Control vs. speed", rationale: "M-Pesa in Kenya, GCash in Philippines, etc. already have client trust and regulatory approval" },
      { decision: "Agent-assisted model, not pure self-service", tension: "Scale vs. trust", rationale: "In low-literacy populations, agents build trust. Pure self-service would have failed adoption" },
      { decision: "3 countries first, not 20", tension: "Impact vs. learning", rationale: "Uganda, Kenya, Tanzania let us learn agent dynamics, mobile money integration, and client behavior before scaling" },
    ],
    results: [
      { value: "2M+", label: "Users reached", change: "Across 20 countries" },
      { value: "45%", label: "Agent activation rate", change: "vs. 20% industry benchmark" },
      { value: "68%", label: "Branch visit reduction", change: "For mobile-enabled clients" },
      { value: "12pp", label: "Repayment rate improvement", change: "Access-friction defaults reduced" },
    ],
    qualitative: [
      "A client in rural Uganda told our field researcher: 'I used to choose between paying FINCA and buying medicine for my child. Now I can do both because I don't spend money on transport.'",
      "Branch managers reported spending 60% more time on client advisory after transaction processing moved to mobile/agents",
      "FINCA's board cited the mobile platform as the primary reason for a strategic partnership with a major development bank",
      "The agent training and certification program became a model adopted by 3 other microfinance institutions",
    ],
    lessons: {
      worked: [
        { title: "Design for the constraint, not the ideal", text: "USSD on feature phones wasn't elegant, but it worked. Designing for the device clients actually have beats designing for the device you wish they had." },
        { title: "Agents as trust infrastructure", text: "Technology adoption in low-trust environments requires human intermediaries. Agents weren't just distribution — they were trust builders." },
        { title: "Mission alignment as a strategy tool", text: "Framing this as 'financial inclusion' (not 'mobile banking') aligned with FINCA's mission and made board approval, regulator conversations, and staff buy-in dramatically easier." },
      ],
      different: [
        { title: "Built offline transaction capability from day one", text: "In rural areas, network connectivity is unreliable. We added offline sync in Phase 2, but it should have been core to the initial design." },
        { title: "Invested in agent economics sooner", text: "Agent activation was high (45%) but agent retention was a challenge. Better commission structures and support would have reduced agent churn." },
      ],
    },
  },

  // 06 - Enterprise Procurement Platform (existing, enhanced)
  {
    id: "e-requisition",
    number: "06",
    title: "Federal Procurement Automation",
    subtitle: "$1.2B Spend Governance at Scale",
    oneLiner: "Led a team of 6 engineers to digitize procurement for a 5,000-person federal consulting firm — 65% faster approval cycles, zero audit findings, 94% adoption within 60 days.",
    impact: "65% faster · Zero audit findings",
    tags: ["BPM", "SharePoint", "Team Leadership", "Change Management"],
    color: "hsl(270 50% 55%)",
    company: "ICF International",
    teamSize: "6 Engineers, 2 UX Researchers, 8 Division Directors, CFO, IT Director, 5,000 End Users",
    role: "Product Lead — requirements, architecture decisions, change management, stakeholder alignment",
    timeline: "Q1 2019 — Q3 2019",
    scope: "$1.2B annual procurement, 5,000 users, federal audit compliance",
    opportunitySizing: "$1.2B annual procurement through paper = ~2,400 purchase requests/year with 3-4 week average cycle = significant working capital locked in approval queues. Plus 3 material audit findings = federal contract risk worth hundreds of millions.",
    stakeholderNarrative: "The most complex dynamic was the 8 Division Directors. Each controlled their own budget and approval process. Standardizing meant taking away autonomy they'd had for years. I couldn't mandate adoption — I had to make the system so obviously better that they'd choose it.",
    metricArchitecture: {
      input: { name: "Digital Submission Rate", target: "95% within 90 days", baseline: "0%", why: "Measures adoption velocity" },
      output: { name: "Average Procurement Cycle Time", target: "5-7 days", baseline: "3-4 weeks", why: "Direct measure of efficiency" },
      guardrail: { name: "Bypass / Override Rate", target: "< 2% of approvals", baseline: "Not tracked", why: "Ensures governance integrity" },
    },
    problem: {
      text: `A 5,000-person government consulting firm was running $1.2B in annual procurement through paper forms, email chains, and institutional knowledge. Purchase requisitions took 3-4 weeks. Budget holders couldn't see committed spend. Three material audit findings in the previous year — each one a risk to federal contract renewals.`,
      stat: "3-4 weeks",
      statLabel: "average approval cycle for a purchase requisition. Senior approvers physically walked paper forms between floors. If someone was out of office, forms sat on desks for days.",
    },
    discovery: {
      quotes: [
        { text: "I have to walk the form to three different floors to get signatures. If someone's out of office, it sits on their desk for a week. I've started making photocopies so I have proof I submitted it.", who: "Project Manager" },
        { text: "I approve things I've already approved before because I can't tell if the first one went through. There's no system of record. I'm making $200K decisions based on whether I recognize a piece of paper.", who: "Division Director" },
      ],
      insight: "The real problem wasn't speed — it was visibility. Budget holders were making significant financial decisions without knowing what was already committed. The audit findings were symptoms of a governance gap.",
    },
    approach: {
      options: [
        { name: "SAP Ariba", assessment: "Right tool for Fortune 500, massively overengineered for our approval workflow needs. 12-month implementation minimum", chosen: false },
        { name: "Custom web application", assessment: "Maximum flexibility but 9-month build with uncertain adoption in a change-resistant organization", chosen: false },
        { name: "SharePoint + BPM engine", assessment: "Leverage existing infrastructure the organization already pays for. 3-month delivery. Familiar interface", chosen: true },
      ],
      framing: `I reframed this from a technology project to a governance project. "We're not buying software — we're giving budget holders the visibility they need to make responsible decisions and pass federal audits." That framing got CFO sponsorship on day one.`,
    },
    stakeholders: [
      { role: "CFO", concern: "Will this survive a federal audit?", mitigation: "Built audit trail as a first-class feature. Every approval timestamped, every delegation logged, every override recorded" },
      { role: "IT Director", concern: "We can't support another system", mitigation: "Built entirely on existing SharePoint infrastructure. No new vendors, no new licenses" },
      { role: "8 Division Directors", concern: "Don't slow us down more than paper already does", mitigation: "Dynamic routing by dollar amount: <$10K = 2 approvers, >$100K = full chain. Routine purchases got FASTER than paper" },
      { role: "5,000 End Users", concern: "I don't want to learn a new system", mitigation: "The digital form mimicked the paper form exactly. Training time: 15 minutes" },
    ],
    tradeoffs: [
      { decision: "Dynamic routing by dollar threshold", tension: "Control vs. speed", rationale: "Under $10K = 2 approvers. Over $100K = full chain. Matched process weight to financial risk" },
      { decision: "Mimicked the paper form UI", tension: "Innovation vs. adoption", rationale: "In a change-resistant org, familiarity beats innovation. Users needed to trust the system first" },
      { decision: "SharePoint over custom application", tension: "Long-term flexibility vs. time-to-value", rationale: "3-month delivery on existing infrastructure beat 9-month delivery for an urgent governance need" },
      { decision: "No mobile app at launch", tension: "Convenience vs. scope", rationale: "95% of approvers worked at desks. Mobile was Phase 2, not a launch blocker" },
    ],
    results: [
      { value: "65%", label: "Cycle time reduction", change: "3-4 weeks → 5-7 days" },
      { value: "$340K", label: "Annual cost avoidance", change: "Eliminated duplicate purchases" },
      { value: "Zero", label: "Audit findings", change: "Down from 3 material findings" },
      { value: "94%", label: "User adoption", change: "Within 60 days of launch" },
    ],
    qualitative: [
      "CFO called it 'the most impactful internal project this year' in an all-hands meeting",
      "Federal audit team specifically cited the system as a model for other workflow automation",
      "Three other divisions requested similar workflow automation — the platform became a template",
      "System is still in production 4+ years later with minimal maintenance",
    ],
    lessons: {
      worked: [
        { title: "Governance framing over technology framing", text: "Calling it a governance project got CFO sponsorship. Calling it a software project would have triggered IT procurement bureaucracy." },
        { title: "Dynamic routing was the killer feature", text: "Matching process weight to financial risk was the single biggest driver of cycle time reduction." },
        { title: "Paper form mental model", text: "94% adoption in 60 days happened because users didn't feel like they were learning something new. The form looked familiar." },
      ],
      different: [
        { title: "Built spend analytics from day one", text: "Budget visibility reporting was an afterthought — added in Phase 2. It should have been the headline feature for Division Directors." },
        { title: "Mobile approval flow sooner", text: "Senior approvers traveled frequently. A simple mobile approval interface would have cut another 2-3 days off the cycle." },
      ],
    },
  },
];
