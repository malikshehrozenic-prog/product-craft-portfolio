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

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  impact: string;
  tags: string[];
  color: string;
  teamSize: string;
  role: string;
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
  {
    id: "wage-risk",
    number: "01",
    title: "Wage Liability Risk Engine",
    subtitle: "Real-Time Financial Risk Visibility",
    oneLiner: "Turned a $4.2M blind spot into a real-time risk dashboard — prototyped in 3 weeks, then handed Engineering a validated spec that changed the roadmap.",
    impact: "92% faster reporting",
    tags: ["Python", "Streamlit", "Financial Modeling", "Stakeholder Strategy"],
    color: "hsl(var(--primary))",
    teamSize: "Solo prototype → Engineering handoff",
    role: "Led strategy, prototyped, managed stakeholder alignment",
    problem: {
      text: `As an EOR, every employee across 30+ countries is a financial liability — terminate them tomorrow, and we owe severance, notice pay, statutory bonuses, and accrued vacation. The CFO asked a simple question in a leadership meeting: "What's our total exposure today?" Nobody in the room could answer. The data existed in fragments — HRIS exports, country-specific Excel workbooks, currency conversion spreadsheets. But no single source of truth.`,
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
      framing: `The critical move wasn't building the prototype — it was how I positioned it. I didn't frame this as "going around Engineering." I framed it as "de-risking for Engineering." By handing them a validated prototype with real stakeholder feedback, I eliminated the ambiguity that makes engineers reluctant to commit to Finance tooling. Engineering's lead later told me this was the first time a PM gave him something he could actually evaluate technically.`,
    },
    stakeholders: [
      { role: "CFO", concern: "Is this accurate enough for board-level decisions?", mitigation: "Weekly calibration sessions with Finance. Legal-validated formulas. Positioned output as 'planning grade, not audit grade'" },
      { role: "Engineering Lead", concern: "Don't create shadow IT or tech debt", mitigation: "Shared architecture docs from day one. Made him a reviewer, not a bystander. Clear handoff criteria defined upfront" },
      { role: "Legal Counsel", concern: "Liability if the tool gives wrong numbers", mitigation: "Positioned as 'planning tool, not legal advice.' Caveat language on every output. Legal co-signed the formula validation" },
      { role: "Finance Analyst", concern: "Will this actually save me time or just create more work?", mitigation: "Made her the co-designer. Every UI decision went through her. She became the internal champion because it was partly her product" },
    ],
    tradeoffs: [
      { decision: "10 countries, not 30", tension: "Coverage vs. speed", rationale: "10 countries = 80% of total liability. Covering the long tail would have tripled scope for 20% more coverage" },
      { decision: "Simplified formulas", tension: "Precision vs. usability", rationale: "Planning accuracy is sufficient. Legal-grade precision requires legal review of every formula — a 6-month process" },
      { decision: "Streamlit, not internal stack", tension: "Integration vs. validation speed", rationale: "The goal was proving the concept, not building the product. Validate first, then commit Engineering resources" },
      { decision: "Manual data upload (CSV)", tension: "Automation vs. scope", rationale: "HRIS API integration is a 2-sprint effort. CSV upload let us ship in 1 week and test with real data immediately" },
    ],
    results: [
      { value: "15 min", label: "Report generation", change: "↓ from 3 days" },
      { value: "Real-time", label: "Data freshness", change: "↓ from 6 weeks stale" },
      { value: "20 hrs", label: "Saved per quarter", change: "Finance analyst time" },
      { value: "New", label: "Concentration alerts", change: "Previously invisible risk" },
    ],
    qualitative: [
      "CFO now references the dashboard in board meetings — it became a governance tool, not just an ops tool",
      "Enterprise Sales started using liability management as a competitive differentiator in deals against Deel and Remote",
      "Engineering prioritized the production build for Q3 — the prototype de-risked the investment decision",
      "The Finance Analyst who co-designed it became its biggest advocate, training other team members without being asked",
    ],
    lessons: {
      worked: [
        { title: "Co-designing with the end user", text: "Making the Finance Analyst a co-designer meant every decision had user validation built in. Her advocacy made executive buy-in effortless — she was selling it before I had to." },
        { title: '"De-risking" framing for Engineering', text: "When you hand engineers a working prototype with validated requirements, you're not bypassing them — you're giving them confidence. This framing turned a potential political problem into a partnership." },
        { title: "80% coverage was enough to ship", text: "10 countries covered the vast majority of exposure. Waiting for 30 would have killed momentum. The remaining 20 countries had less liability than Brazil alone." },
      ],
      different: [
        { title: "Involved Legal earlier", text: "They had context about upcoming labor law changes in Brazil and France that I didn't know about. Two weeks of rework could have been avoided with one early conversation." },
        { title: "Built the data pipeline before the dashboard", text: "A standardized CSV template shared on day one would have accelerated adoption by a week. I built the pretty UI first — should have built the boring input template first." },
      ],
    },
  },
  {
    id: "benefits-engine",
    number: "02",
    title: "Global Benefits Platform",
    subtitle: "Cost Center → $3M Revenue Engine",
    oneLiner: "Led a cross-functional team to transform benefits from a compliance checkbox into a monetized platform across 160+ countries — driving 10% ARR uplift and becoming Oyster's #1 competitive differentiator.",
    impact: "$3M GPV · 10% ARR uplift",
    tags: ["Product Strategy", "Monetization", "Cross-Functional Leadership", "GTM"],
    color: "hsl(210 70% 55%)",
    teamSize: "Cross-functional: Engineering, Ops, Legal, Sales, Finance",
    role: "Product lead — strategy, roadmap, pricing model, GTM, P&L ownership",
    problem: {
      text: `Benefits at Oyster were a cost of doing business — statutory health insurance, mandatory pension contributions, whatever local law required. Nothing more. Meanwhile, our clients were churning to benefits brokers for voluntary coverage (dental in Germany, supplemental health in Brazil), and competitors like Deel were starting to bundle benefits as a sales differentiator. We were losing deals and losing existing clients — but nobody had connected these dots because Benefits sat in Operations, not Product.`,
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
      framing: `The key insight was the pricing model. Instead of marking up broker costs (which creates misaligned incentives), I designed a service fee mechanism — Oyster earns a transparent fee for benefits administration, plan selection, and ongoing management. This aligned our incentive with client outcomes, not broker commissions. Sales could explain it honestly, clients understood the value, and Finance could model the revenue.`,
    },
    stakeholders: [
      { role: "CEO", concern: "Is this a distraction from core EOR?", mitigation: "Modeled the $3M revenue opportunity and showed benefits was the #2 churn reason. This isn't a distraction — it's a retention strategy that pays for itself" },
      { role: "Legal (30+ country teams)", concern: "Regulatory exposure across 160 countries", mitigation: "Phased rollout: 15 low-risk countries first. Built a compliance checklist with Legal for each new country launch" },
      { role: "Sales Team", concern: "Can we actually sell this? How do we price it?", mitigation: "Co-designed the pricing model with Sales. When Sales helps build pricing, they sell with conviction because they understand the value story" },
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
      { value: "15→40", label: "Countries launched", change: "6 months post-launch" },
    ],
    qualitative: [
      "Benefits became the #1 requested feature in enterprise sales conversations — ahead of payroll flexibility",
      "Three enterprise accounts cited benefits as the specific reason they didn't churn to Deel",
      "CEO referenced the benefits monetization model in the Series C investor pitch as an example of product-led revenue expansion",
      "Operations team went from 'this is a nightmare' to 'this is my favorite part of the job' — because tooling replaced spreadsheets",
    ],
    lessons: {
      worked: [
        { title: "Revenue framing changed the entire conversation", text: "The moment I put a dollar figure on the opportunity, executive support went from 'interesting idea' to 'fully funded initiative.' Revenue projections are the universal language of executive buy-in." },
        { title: "Making Sales co-designers of pricing", text: "When Sales helps build the pricing model, they don't need a training deck. They sell with conviction because they understand why every number exists." },
        { title: "Phased country rollout", text: "Starting with 15 countries let us learn broker management, compliance patterns, and enrollment workflows at manageable scale before expanding. Every country taught us something." },
      ],
      different: [
        { title: "Invested in self-serve enrollment earlier", text: "Manual enrollment became the bottleneck at scale. We hit a ceiling where adding countries didn't help because ops couldn't process enrollments fast enough. Should have automated sooner." },
        { title: "Built utilization analytics from day one", text: "For 3 months we couldn't measure whether employees actually used the benefits we enrolled them in. That data would have helped us optimize plans and prove ROI to clients faster." },
      ],
    },
  },
  {
    id: "expense-intelligence",
    number: "03",
    title: "AI Expense Intelligence System",
    subtitle: "Intelligent Multi-Country Expense Processing",
    oneLiner: "Designed and prototyped an AI-powered expense pipeline — receipt OCR across 12 languages, country-specific tax classification, and Slack-based approvals — then led the ops team through adoption, cutting processing time by 70%.",
    impact: "70% faster · 150 hrs/mo saved",
    tags: ["n8n", "OpenAI Vision", "Google Apps Script", "Gemini AI"],
    color: "hsl(40 90% 50%)",
    teamSize: "PM-built prototype → Ops adoption → Engineering roadmap input",
    role: "Product design, prototype build, tax rule architecture, adoption management",
    problem: {
      text: `Expense management in an EOR is uniquely painful because every country has different tax rules, receipt requirements, and reimbursement thresholds. An expense that's tax-deductible in Germany might be taxable income in Brazil. A receipt in Korean needs different validation than one in Portuguese. Our ops team was manually reviewing every receipt, googling tax codes, converting currencies by hand, and chasing approvals over email and WhatsApp. A single expense report averaged 45 minutes to process.`,
      stat: "150 hrs/mo",
      statLabel: "of manual expense processing across the ops team. With 200+ reports monthly across 30 countries, the team was drowning — and accuracy was suffering because fatigued humans make mistakes.",
    },
    discovery: {
      quotes: [
        { text: "I have a folder of screenshots from Google Translate. That's how I figure out what a receipt says when it's in Korean or Portuguese.", who: "Expense Ops Analyst" },
        { text: "The approval chain is chaos. I email the client manager, they forget, I follow up three times, they finally approve over WhatsApp. Nothing is tracked. Nothing is auditable.", who: "Payroll Operations Lead" },
      ],
      insight: "This wasn't just an efficiency problem — it was a data integrity and compliance risk. Unstructured approvals meant we couldn't audit expense decisions, couldn't predict processing costs, and couldn't flag anomalies. One misclassified expense in Germany could trigger a tax audit for the client.",
    },
    approach: {
      options: [
        { name: "Buy (Expensify/Brex)", assessment: "Not built for EOR multi-entity, multi-country tax complexity. These tools assume one employer, one tax jurisdiction", chosen: false },
        { name: "Build in-house (Engineering)", assessment: "Engineering capacity locked for 3+ quarters on core payroll infrastructure", chosen: false },
        { name: "No-code AI pipeline (prototype)", assessment: "n8n + OpenAI Vision + Gemini + Google Apps Script + Airtable. Validate the workflow, prove the ROI, then hand off the architecture", chosen: true },
      ],
      framing: `I positioned this as "intelligent middleware" — not replacing any existing system, but connecting them. Receipt comes in → AI extracts and translates → tax rules applied by country → routed for approval in Slack → synced to payroll. No system migration required. No training on new tools. The ops team's existing workflow just got smarter.`,
    },
    stakeholders: [
      { role: "Ops Director", concern: "AI can't handle our edge cases — Korean receipts, handwritten Brazilian notes", mitigation: "Built a confidence scoring system: above 85% = auto-process, below = human review. The AI handles the routine, humans handle the edge cases" },
      { role: "Compliance Lead", concern: "Tax classification accuracy — one mistake triggers client audits", mitigation: "Deterministic rule engine for tax, not probabilistic ML. Tax authorities need to see logic, not confidence scores" },
      { role: "Client Managers", concern: "Another tool to learn, another tab to open", mitigation: "Approvals happen in Slack — the tool they already live in. Zero new interfaces, zero training" },
      { role: "Engineering", concern: "Shadow IT risk — what happens when you leave?", mitigation: "Full architecture documentation, API-first design, every decision documented. Clear handoff plan from day one" },
    ],
    tradeoffs: [
      { decision: "OpenAI Vision for OCR, not custom model", tension: "Accuracy vs. build time", rationale: "GPT-4V handled 92% of receipts accurately across 12 languages. A custom model would take 6 months to match that" },
      { decision: "Airtable as database", tension: "Scale vs. speed", rationale: "Perfect for validation phase with <1000 records/month. Migration plan ready for when volume exceeds threshold" },
      { decision: "Slack for approvals, not web UI", tension: "Feature richness vs. adoption", rationale: "100% of managers already use Slack. Adoption friction = zero. Features can come later" },
      { decision: "Rule engine for tax, not ML", tension: "Sophistication vs. auditability", rationale: "When a tax authority asks 'why was this classified as business expense?' — the answer needs to be a rule, not a model weight" },
    ],
    results: [
      { value: "70%", label: "Processing time reduction", change: "45 min → 13 min per report" },
      { value: "92%", label: "AI extraction accuracy", change: "Across 12 languages" },
      { value: "< 2 hrs", label: "Approval turnaround", change: "↓ from 3-5 business days" },
      { value: "150 hrs", label: "Monthly ops hours saved", change: "Redeployed to client-facing work" },
    ],
    qualitative: [
      "The ops team went from dreading expense cycles to processing them same-day — morale impact was immediate and visible",
      "Compliance team gained a complete audit trail for the first time — every decision logged, every classification traceable",
      "Client managers described Slack approvals as 'invisible — in a good way.' They approve in 30 seconds between meetings",
      "Engineering adopted the architecture document as the basis for their own implementation roadmap — the prototype became the spec",
    ],
    lessons: {
      worked: [
        { title: "Meeting users where they already are", text: "Slack as the approval interface eliminated the adoption problem entirely. The best product change is one the user doesn't notice — it just works inside their existing flow." },
        { title: "Human-in-the-loop as a trust mechanism", text: "The confidence scoring system (auto-process above 85%, human review below) built trust with the ops team. They didn't feel replaced — they felt like they got a smart assistant." },
        { title: "Rules for compliance, AI for extraction", text: "Splitting the system into 'AI handles the messy stuff (OCR, translation)' and 'rules handle the regulated stuff (tax classification)' was the architecture decision that made compliance comfortable." },
      ],
      different: [
        { title: "Launched with fewer countries", text: "30 countries on day one created a long tail of edge cases in the first month. Starting with 10 high-volume countries would have been cleaner — then expanding with confidence." },
        { title: "Designed error messages for ops, not developers", text: "When OCR failed, the error messages were too technical. The analyst seeing 'multipart boundary parse error' doesn't help anyone. Should have designed for the human who needs to fix the problem." },
      ],
    },
  },
  {
    id: "e-requisition",
    number: "04",
    title: "Enterprise Procurement Platform",
    subtitle: "$1.2B Spend Automation",
    oneLiner: "Led a team of 6 engineers to digitize procurement for a 5,000-person federal consulting firm — cutting approval cycles by 65%, eliminating audit findings, and driving 94% adoption within 60 days.",
    impact: "65% faster · $340K saved",
    tags: ["BPM", "SharePoint", "Team Leadership", "Change Management"],
    color: "hsl(270 50% 55%)",
    teamSize: "6 engineers, 2 UX researchers, stakeholders across 8 divisions",
    role: "Product lead — requirements, architecture decisions, sprint planning, stakeholder management, change management",
    problem: {
      text: `A 5,000-person government consulting firm was running $1.2B in annual procurement through paper forms, email chains, and institutional knowledge. Purchase requisitions took 3-4 weeks to wind through approvals. Budget holders couldn't see committed spend. Duplicate purchases happened constantly because nobody had visibility into what was already in flight. Three material audit findings in the previous year — each one a risk to federal contract renewals worth hundreds of millions.`,
      stat: "3-4 weeks",
      statLabel: "average approval cycle for a purchase requisition. Senior approvers physically walked paper forms between floors. If someone was out of office, forms sat on desks for days.",
    },
    discovery: {
      quotes: [
        { text: "I have to walk the form to three different floors to get signatures. If someone's out of office, it sits on their desk for a week. I've started making photocopies so I have proof I submitted it.", who: "Project Manager" },
        { text: "I approve things I've already approved before because I can't tell if the first one went through. There's no system of record. I'm making $200K decisions based on whether I recognize a piece of paper.", who: "Division Director" },
      ],
      insight: "The real problem wasn't speed — it was visibility. Budget holders were making significant financial decisions without knowing what was already committed. The audit findings were symptoms of a governance gap, not a technology gap.",
    },
    approach: {
      options: [
        { name: "SAP Ariba", assessment: "Right tool for Fortune 500, massively overengineered for our approval workflow needs. 12-month implementation minimum", chosen: false },
        { name: "Custom web application", assessment: "Maximum flexibility but 9-month build with uncertain adoption in a change-resistant organization", chosen: false },
        { name: "SharePoint + BPM engine", assessment: "Leverage existing infrastructure the organization already pays for. 3-month delivery. Familiar interface", chosen: true },
      ],
      framing: `I reframed this from a technology project to a governance project. "We're not buying software — we're giving budget holders the visibility they need to make responsible decisions and pass federal audits." That framing got CFO sponsorship on day one. Technology projects get scrutinized. Governance projects get funded.`,
    },
    stakeholders: [
      { role: "CFO", concern: "Will this survive a federal audit?", mitigation: "Built audit trail as a first-class feature, not an afterthought. Every approval timestamped, every delegation logged, every override recorded" },
      { role: "IT Director", concern: "We can't support another system", mitigation: "Built entirely on existing SharePoint infrastructure. No new vendors, no new licenses, no new support contracts" },
      { role: "8 Division Directors", concern: "Don't slow us down more than paper already does", mitigation: "Dynamic routing by dollar amount: <$10K = 2 approvers, >$100K = full chain. Routine purchases got FASTER than paper" },
      { role: "5,000 End Users", concern: "I don't want to learn a new system", mitigation: "The digital form mimicked the paper form exactly — same fields, same layout. Familiar mental model, digital execution. Training time: 15 minutes" },
    ],
    tradeoffs: [
      { decision: "Dynamic routing by dollar threshold", tension: "Control vs. speed", rationale: "Under $10K = 2 approvers. Over $100K = full chain. Matched process weight to financial risk. This single decision drove most of the cycle time improvement" },
      { decision: "Mimicked the paper form UI", tension: "Innovation vs. adoption", rationale: "In a change-resistant org, familiarity beats innovation. Users needed to trust the system before we could optimize it" },
      { decision: "SharePoint over custom application", tension: "Long-term flexibility vs. time-to-value", rationale: "3-month delivery on existing infrastructure beat 9-month delivery for an urgent governance need. The org needed a win, not a vision" },
      { decision: "No mobile app at launch", tension: "Convenience vs. scope", rationale: "95% of approvers worked at desks. Mobile was a Phase 2 nice-to-have, not a launch blocker" },
    ],
    results: [
      { value: "65%", label: "Cycle time reduction", change: "3-4 weeks → 5-7 days" },
      { value: "$340K", label: "Annual cost avoidance", change: "Eliminated duplicate purchases" },
      { value: "Zero", label: "Audit findings", change: "↓ from 3 material findings" },
      { value: "94%", label: "User adoption", change: "Within 60 days of launch" },
    ],
    qualitative: [
      "CFO called it 'the most impactful internal project this year' in an all-hands meeting",
      "Federal audit team specifically cited the system as a model for other workflow automation",
      "Three other divisions requested similar workflow automation — the platform became a template",
      "System is still in production 4+ years later with minimal maintenance — a testament to building on existing infrastructure",
    ],
    lessons: {
      worked: [
        { title: "Governance framing over technology framing", text: "Calling it a governance project got CFO sponsorship. Calling it a software project would have triggered IT procurement bureaucracy. Same system, different narrative, completely different organizational path." },
        { title: "Dynamic routing was the killer feature", text: "Matching process weight to financial risk was the single biggest driver of cycle time reduction. Routine purchases moved 80% faster. High-value purchases maintained full oversight." },
        { title: "Paper form mental model", text: "94% adoption in 60 days happened because users didn't feel like they were learning something new. The form looked familiar. The magic was in the routing, not the form." },
      ],
      different: [
        { title: "Built spend analytics from day one", text: "Budget visibility reporting was an afterthought — added in Phase 2. It should have been the headline feature for Division Directors. That's what they actually cared about." },
        { title: "Mobile approval flow sooner", text: "Senior approvers traveled frequently. When they were on the road, approvals stalled. A simple mobile approval interface would have cut another 2-3 days off the cycle." },
      ],
    },
  },
  {
    id: "payroll-governance",
    number: "05",
    title: "Payroll Validation Engine",
    subtitle: "Decoupling Quality from Headcount",
    oneLiner: "Defined the product strategy and prototyped the validation logic for a rule-based payroll quality system — then led the engineering team through build and rollout, reducing errors by 90% and saving $2.5M annually.",
    impact: "90% error reduction · $2.5M saved",
    tags: ["Rule Engine", "Product Strategy", "Engineering Partnership", "Ops Automation"],
    color: "hsl(340 60% 55%)",
    teamSize: "3 engineers, Country Leads (rule authors), Ops team (validation)",
    role: "Product strategy, rule architecture prototype, engineering leadership, rollout management",
    problem: {
      text: `Running payroll across 30+ countries means hundreds of data points per employee per cycle — tax IDs, bank details, allowances, deductions, statutory contributions. Every country has different formats, requirements, and edge cases. Our quality gate was humans reviewing spreadsheets. As employee headcount grew 40% year-over-year, errors grew faster than headcount — because fatigued analysts make more mistakes at volume. We were hiring QA analysts to keep pace, and still missing things. The unit economics were fundamentally broken.`,
      stat: "1 in 12",
      statLabel: "payroll runs contained at least one error requiring a correction cycle — costing $800-$2,000 per incident in rework, client escalations, and late payment penalties. At scale, this was a $2.5M+ annual problem.",
    },
    discovery: {
      quotes: [
        { text: "I check the same 15 things every cycle. Tax ID format, bank code length, mandatory fields. It's completely mechanical — but if I miss one, the whole run fails and I'm working Sunday to fix it.", who: "Payroll Analyst" },
        { text: "Every time we onboard a new country, I have to train someone on that country's quirks. It takes 3 months before they stop making mistakes. And then they leave and I start over.", who: "Payroll Operations Manager" },
      ],
      insight: "Quality was coupled to headcount. Every new country or growth spike required more humans doing the same mechanical checks. This isn't a training problem — it's an architecture problem. The question isn't 'how many more people do we need?' but 'how do we make quality automatic so our people focus on judgment calls?'",
    },
    approach: {
      options: [
        { name: "Hire more QA analysts", assessment: "Linear cost scaling. Every 50 new employees = 1 new analyst. Doesn't solve the root cause", chosen: false },
        { name: "AI-based anomaly detection", assessment: "Interesting technology, wrong domain. Payroll needs deterministic rules, not probabilistic flags. When a tax ID is wrong, it's wrong — there's no 'confidence score'", chosen: false },
        { name: "Configurable rule engine", assessment: "Country-specific validation rules that run before payroll submission. Deterministic, auditable, self-serve for country leads", chosen: true },
      ],
      framing: `I framed this as "decoupling quality from headcount" — a concept that resonated immediately with Finance because it directly impacted ops cost projections. Every growth forecast assumed proportional QA hiring. This initiative broke that assumption. I prototyped the rule logic in Python to validate the architecture, then worked with 3 engineers to build the production system while I managed rollout with country leads.`,
    },
    stakeholders: [
      { role: "VP Operations", concern: "Will this replace my team?", mitigation: "Reframed explicitly: 'This replaces the mechanical checks so your team does the judgment work — the stuff that actually requires expertise.' Showed how their role would elevate, not shrink" },
      { role: "Country Leads (12 countries)", concern: "Who maintains the rules? We don't code", mitigation: "Built a no-code rule editor. Country leads author rules in plain language. No engineering tickets, no deployment cycles" },
      { role: "Engineering (3 engineers)", concern: "Another internal tool to maintain", mitigation: "Clean API, comprehensive documentation, monitoring dashboard. Positioned as platform infrastructure, not a one-off tool" },
      { role: "Finance", concern: "What's the ROI and when?", mitigation: "Modeled: cost of errors × error rate × projected headcount growth. ROI payback: 4 months. Finance approved the investment in one meeting" },
    ],
    tradeoffs: [
      { decision: "Deterministic rules, not ML", tension: "Sophistication vs. trust", rationale: "Payroll teams need to know exactly why something was flagged. 'The model thinks this might be wrong' doesn't work when someone's salary is at stake" },
      { decision: "Block on critical, warn on advisory", tension: "Strictness vs. workflow speed", rationale: "Hard stops for data integrity errors (wrong bank code = failed payment). Soft warnings for best practices (unusual bonus amount = worth checking). This prevented the system from becoming a bottleneck" },
      { decision: "Country leads own their rules", tension: "Consistency vs. local expertise", rationale: "Nobody in a central team knows Brazilian tax ID formats better than the Brazil country lead. Local knowledge beats centralized guessing" },
      { decision: "Pre-submission validation, not post-run", tension: "Timing vs. coverage", rationale: "Catching errors before submission prevents 95% of downstream costs. Post-run detection means the damage is already done" },
    ],
    results: [
      { value: "90%", label: "Error reduction", change: "1-in-12 → 1-in-120 runs" },
      { value: "$2.5M", label: "Annual savings", change: "Rework, penalties, escalations" },
      { value: "0", label: "New QA hires needed", change: "Despite 40% headcount growth" },
      { value: "3 min", label: "New country rule setup", change: "↓ from 3 months training" },
    ],
    qualitative: [
      "Payroll analysts said it 'gave them their weekends back' — Sunday error correction cycles became almost non-existent",
      "Country leads became rule authors, creating ownership and pride in data quality. They compete to have the lowest error rates",
      "Client NPS for payroll accuracy improved by 18 points in two quarters — accuracy is the #1 driver of payroll NPS",
      "Engineering adopted the rule engine architecture pattern for benefits validation and invoicing — the design became a platform",
    ],
    lessons: {
      worked: [
        { title: "Decoupling quality from headcount", text: "This framing made the business case self-evident. When you can show Finance that growth won't require proportional ops hiring, the ROI conversation takes 5 minutes instead of 5 meetings." },
        { title: "Block vs. warn was the key design decision", text: "This single distinction prevented the system from becoming a bottleneck while still catching the errors that actually cost money. Not every validation deserves the same severity." },
        { title: "Self-serve rule editor for non-engineers", text: "Country leads adding rules themselves meant the system got smarter every week without engineering sprints. The system's intelligence scales with domain expertise, not engineering capacity." },
      ],
      different: [
        { title: "Built feedback loops earlier", text: "We didn't track how often warnings were overridden versus acted on. That data would have helped us tune rule thresholds and separate signal from noise." },
        { title: "Cross-country rule sharing from day one", text: "Some validations (IBAN format, email format) are universal but were configured per-country. A shared rule library would have eliminated duplication and reduced setup time further." },
      ],
    },
  },
];
