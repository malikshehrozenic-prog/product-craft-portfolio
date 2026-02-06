// Operating System / Philosophy Data

export interface PhilosophyItem {
  heading: string;
  text: string;
}

export interface Philosophy {
  id: string;
  label: string;
  title: string;
  items: PhilosophyItem[];
  evidence: string;
  caseLink: string;
}

export const PHILOSOPHY: Philosophy[] = [
  {
    id: "strategy",
    label: "Strategy & Bets",
    title: "I Treat Product Teams Like Investment Capital",
    items: [
      { 
        heading: "Betting Tables, Not Roadmaps", 
        text: "Roadmaps create an illusion of certainty. I use Betting Tables (inspired by Shape Up) to define 'Appetite' — how much time we're willing to wager on a problem — before we solutionize. At Oyster, this approach let us kill two initiatives early when the bet didn't justify the appetite, freeing capacity for the Benefits platform that generated $3M." 
      },
      { 
        heading: "Compound Growth Loops", 
        text: "Linear funnels are inherently leaky. I design systems where every user action creates value for the next user. The Benefits platform is an example: every country we launch improves the data for pricing the next country, which improves the sales pitch, which drives more clients, which justifies more country launches." 
      },
      { 
        heading: "Unit Economics as a Decision Tool", 
        text: "At Oyster, I manage $50M+ in financial exposure across payroll initiatives. I model unit economics not as a reporting exercise but as a decision framework — the Payroll Governance Engine was approved in one meeting because the cost-per-error × error-rate × growth-trajectory math was irrefutable." 
      },
    ],
    evidence: "See: Global Benefits Platform — how revenue framing and unit economics modeling drove executive sponsorship",
    caseLink: "benefits-engine",
  },
  {
    id: "discovery",
    label: "Continuous Discovery",
    title: "Weekly Touchpoints, Not Quarterly Research",
    items: [
      { 
        heading: "Continuous Customer Interviews", 
        text: "I maintain weekly touchpoints with internal and external users, partnered with our UX Research team. I use Mom Test methodology to uncover actual past behaviors — not hypothetical wishes. The Wage Risk Engine started from one Finance Analyst's 3-day quarterly process that nobody had thought to question." 
      },
      { 
        heading: "Slack Archaeology as Discovery", 
        text: "At Oyster, I developed a practice I call 'Slack archaeology' — systematically mining internal channels for pain signals. The Finance Vision initiatives ($50M+ in exposure) were surfaced not through formal discovery but through patterns I noticed across 6 months of Slack conversations between Finance, Legal, and Operations." 
      },
      { 
        heading: "Synthetic Validation for Speed", 
        text: "For initial red-teaming, I use LLM agents to simulate user personas and pressure-test feature logic. This never replaces real users — but it catches logical flaws in 30 minutes that would otherwise surface in week 2 of a beta." 
      },
    ],
    evidence: "See: Wage Liability Risk Engine — how Finance Analyst discovery quotes shaped every product decision",
    caseLink: "wage-risk",
  },
  {
    id: "execution",
    label: "Velocity & Build",
    title: "Working Prototypes, Not Slide Decks",
    items: [
      { 
        heading: "The PM Who Can Prototype", 
        text: "When Engineering's roadmap is locked, I don't wait. I build validated prototypes in Python, Google Apps Script, or React — then hand Engineering a working system instead of a PDF spec. The Wage Risk Engine was a Streamlit app I built in 3 weeks that became the production spec. This isn't about bypassing Engineering — it's about giving them certainty." 
      },
      { 
        heading: "48-Hour Validation Cycles", 
        text: "At Oyster, I built a contextual invoice guidance chatbot from idea to production in 48 hours using Cursor and Claude. It now serves the operations team daily. Not every problem needs a 6-sprint roadmap. Some problems need a weekend and the right tools." 
      },
      { 
        heading: "Technical Fluency as PM Leverage", 
        text: "I write Python, SQL, Google Apps Script, and JavaScript. I've built production integrations with Workday, BambooHR, and NetSuite via Merge API. I've architected n8n workflows with OpenAI. This fluency means I have better conversations with engineers, write better specs, and never block on 'waiting for a prototype.'" 
      },
    ],
    evidence: "See: AI Expense Intelligence — PM-built prototype that became the engineering architecture spec",
    caseLink: "expense-intelligence",
  },
  {
    id: "leadership",
    label: "Leadership & Influence",
    title: "No Surprises, No Silos",
    items: [
      { 
        heading: "Radical Transparency at Scale", 
        text: "I send weekly 'State of the Union' updates that highlight blockers and wins equally. At Oyster, managing 5 product areas simultaneously (Benefits, Expenses, Payroll Changes, Invoicing & Pricing, AI Tooling), this cadence is the only thing that keeps stakeholders aligned without requiring synchronous meetings." 
      },
      { 
        heading: "Influence Without Authority", 
        text: "The E-Requisition platform required alignment across 8 division directors, a CFO, an IT director, and 5,000 end users — none of whom reported to me. The 94% adoption rate within 60 days came from framing (governance, not technology), design (familiar form, not new interface), and stakeholder co-design (directors shaped the routing rules)." 
      },
      { 
        heading: "Disagree and Commit — With Data", 
        text: "When opinions clash, I act as the translator between business goals and engineering reality. At Oyster, a key leader documented opposition to a collect-before-payout initiative due to customer experience risk. Instead of debating opinions, I quantified the exposure ($36-48M annually) and proposed a threshold-based compromise. Data moves conversations that opinions cannot." 
      },
    ],
    evidence: "See: Enterprise Procurement — how governance framing and stakeholder co-design drove 94% adoption",
    caseLink: "e-requisition",
  },
  {
    id: "ai",
    label: "AI-Native PM",
    title: "Eval-Driven, Not Vibes-Driven",
    items: [
      { 
        heading: "Evals Before Shipping", 
        text: "Most teams ship AI features based on 'it seems to work.' I implement Evals — automated datasets that grade LLM outputs against ground truth. The expense OCR system uses confidence scoring: above 85% = auto-process, below = human review. We don't ship model updates unless Eval scores improve. This is the difference between AI as a demo and AI as infrastructure." 
      },
      { 
        heading: "Agentic Systems, Not Chatbots", 
        text: "I design multi-step AI workflows where the system plans, executes, and validates its own work — not single-prompt chatbots. The expense intelligence pipeline is an agentic system: receive receipt → extract data → classify language → apply tax rules → route for approval → log for audit. Each step has its own validation." 
      },
      { 
        heading: "AI for Competitive Intelligence", 
        text: "I built a market intelligence dashboard using Gemini AI that analyzes competitor positioning across Deel, Remote, Rippling, and Papaya Global — tracking integration capabilities, pricing changes, and customer sentiment across Reddit, G2, and LinkedIn. This feeds directly into Oyster's product strategy." 
      },
    ],
    evidence: "See: AI Expense Intelligence — confidence scoring, human-in-the-loop, deterministic tax rules alongside AI extraction",
    caseLink: "expense-intelligence",
  },
];

export interface CareerEntry {
  period: string;
  company: string;
  location: string;
  role: string;
  description: string;
}

export const CAREER_ARC: CareerEntry[] = [
  {
    period: "2012–2015",
    company: "IFS Group",
    location: "Dubai",
    role: "Product Owner / Business Analyst",
    description: "Enterprise resource planning across MENA region. Learned requirements engineering and stakeholder management across cultures and languages.",
  },
  {
    period: "2015–2018",
    company: "FINCA International",
    location: "Global",
    role: "Product Manager",
    description: "Microfinance platform serving 2M+ clients across 20+ countries. Designed agent workflows and intelligent case routing for underserved communities. First exposure to building products for users with vastly different levels of digital literacy.",
  },
  {
    period: "2018–2019",
    company: "Legal & General",
    location: "US",
    role: "Product Manager",
    description: "Led the company's first web-based application for one of the largest life insurance providers in the US. Built automated underwriting rules engine for instant decisioning. 30% improvement in agent onboarding time.",
  },
  {
    period: "2019–2022",
    company: "ICF International",
    location: "US",
    role: "Principal Product Manager",
    description: "Led 6 engineers building a $1.2B procurement automation platform for a 5,000-person federal consulting firm. 65% cycle time reduction, zero audit findings, 94% adoption. Built predictive analytics dashboards and intelligent vendor routing systems.",
  },
  {
    period: "2022–Present",
    company: "Oyster HR",
    location: "Remote / Global",
    role: "Lead Product Manager",
    description: "Own 5 product areas: Benefits, Expenses, Payroll Changes, Invoicing & Pricing Infrastructure, AI Product Tooling. Manage $50M+ in financial exposure. Built the Benefits monetization strategy ($3M GPV), AI expense intelligence pipeline, and competitive intelligence systems across a 160+ country EOR platform.",
  },
];

export const EDUCATION = "MS Data Analytics Engineering — Northeastern University (2024). MBA Finance & Marketing — Lahore School of Economics. ML Specialization — DeepLearning.AI. Reforge (Product Management, Data for PMs, PLG). Harvard CS50 Python.";

export const TECH_STACK = "Python, SQL, Google Apps Script, JavaScript/React. API integrations (Workday, BambooHR, NetSuite, Merge API). AI/ML (LangChain, Gemini, OpenAI, Cursor, Claude). Automation (n8n, Playwright, Alteryx). Data (Mixpanel, Amplitude, Metabase).";
