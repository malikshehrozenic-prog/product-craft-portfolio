import { motion } from "framer-motion";
import { ArrowLeft, Globe, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import wageLibraryDashboard from "@/assets/wage-liability-dashboard.png";

const successMetrics = [
  { metric: "Liability data freshness", baseline: "6 weeks old", target: "Real-time" },
  { metric: "Time to generate report", baseline: "3 days", target: "< 30 minutes" },
  { metric: "Alert-to-action time", baseline: "Reactive (∞)", target: "< 24 hours" },
  { metric: "Countries with validated formulas", baseline: "40%", target: "90%" },
];

const buildOptions = [
  { option: "Buy", assessment: "No off-the-shelf product exists for EOR-specific liability modeling" },
  { option: "Build (Engineering)", assessment: "Right solution long-term, but 6-month wait minimum" },
  { option: "Build (PM-led prototype)", assessment: "Validate concept in 3 weeks, then hand off working spec ✓", highlight: true },
];

const stakeholders = [
  { role: "CFO", concern: '"Is this accurate enough?"', management: "Weekly check-ins, Legal-validated formulas" },
  { role: "Engineering Lead", concern: '"Don\'t create tech debt"', management: "Shared architecture, full documentation" },
  { role: "Legal", concern: '"Are we exposed if it\'s wrong?"', management: 'Positioned as "planning tool, not legal advice"' },
  { role: "Finance Analyst", concern: '"Will this save me time?"', management: "Made her a co-designer of the dashboard" },
];

const countries = [
  { flag: "🇧🇷", name: "Brazil", drivers: "40% FGTS penalty, 13th month, 30 + 3 days/year notice" },
  { flag: "🇫🇷", name: "France", drivers: "Tiered severance: 1/4 month/year (first 10), 1/3 after" },
  { flag: "🇩🇪", name: "Germany", drivers: "Market practice 0.5 months/year, works council" },
  { flag: "🇲🇽", name: "Mexico", drivers: "3 months constitutional indemnity + seniority premium" },
  { flag: "🇳🇱", name: "Netherlands", drivers: "Transitievergoeding: 1/3 month/year, €94k cap" },
  { flag: "🇮🇳", name: "India", drivers: "Gratuity after 5 years: 15 days/year" },
];

const tradeoffs = [
  { decision: "10 countries, not 30", tradeoff: "Coverage vs. speed", rationale: "10 countries = 80% of liability" },
  { decision: "Simplified formulas", tradeoff: "Precision vs. usability", rationale: "Planning accuracy > legal-grade precision" },
  { decision: "Streamlit, not internal stack", tradeoff: "Integration vs. speed", rationale: "Validate before committing Engineering" },
  { decision: "Manual data upload", tradeoff: "Automation vs. scope", rationale: "HRIS integration is Phase 2" },
];

const results = [
  { value: "15 min", label: "Report generation", change: "↓ from 3 days" },
  { value: "Real-time", label: "Data freshness", change: "↓ from 6 weeks" },
  { value: "20 hrs", label: "Saved per quarter", change: "Finance analyst time" },
  { value: "New", label: "Concentration alerts", change: "Previously invisible" },
];

const CaseStudyWageRisk = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container max-w-4xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gold-shine">
              Wage Liability Risk Engine
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Building Real-Time Financial Risk Visibility for Global Workforce Operations
            </p>
            
            {/* Meta Row */}
            <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-border">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Role</p>
                <p className="font-medium">Lead Product Manager</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Timeline</p>
                <p className="font-medium">3 weeks (prototype)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
                <p className="font-medium text-gold-primary">92% reduction in reporting time</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wage-liability-risk-engine.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-primary text-background font-semibold hover:bg-gold-light transition-colors"
              >
                <Globe className="w-4 h-4" />
                View Live Demo →
              </a>
            </div>
          </motion.div>

          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              The Problem
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As an EOR (Employer of Record), we employ people on behalf of our clients in 30+ countries. Every employee represents a financial liability — if they're terminated tomorrow, we owe severance, notice pay, statutory bonuses, and accrued vacation.
            </p>
            
            {/* Highlight Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold-primary/20 via-gold-primary/10 to-transparent border border-gold-primary/30">
              <p className="text-sm uppercase tracking-wider text-gold-primary mb-2 font-medium">The Blind Spot</p>
              <p className="text-5xl md:text-6xl font-bold text-gold-shine mb-4">$4.2M</p>
              <p className="text-muted-foreground">
                in termination liability, calculated quarterly using 6-week-old data and manual Excel models. When the CFO asked "What's our exposure today?" — nobody could answer.
              </p>
            </div>
          </motion.section>

          {/* Discovery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Discovery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I spent two weeks talking to stakeholders across Finance, Legal, Operations, and Client Success to understand the problem space.
            </p>
            
            {/* Quotes */}
            <div className="space-y-4 mb-8">
              <blockquote className="border-l-4 border-gold-primary pl-6 py-4 bg-card rounded-r-xl">
                <p className="text-foreground italic mb-2">
                  "I spend 3 days every quarter pulling data from our HRIS, running it through country-specific Excel workbooks, then manually converting currencies. By the time I'm done, the data is already outdated."
                </p>
                <cite className="text-sm text-muted-foreground not-italic">— Finance Analyst</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-gold-primary pl-6 py-4 bg-card rounded-r-xl">
                <p className="text-foreground italic mb-2">
                  "The formulas live in different places — some in old counsel memos, some in our wiki, some in people's heads. I'm never fully confident we're calculating Brazil correctly."
                </p>
                <cite className="text-sm text-muted-foreground not-italic">— Legal Counsel</cite>
              </blockquote>
            </div>

            {/* Key Insight */}
            <div className="p-5 rounded-xl bg-gold-primary/10 border border-gold-primary/30">
              <p className="text-sm font-semibold text-gold-primary uppercase tracking-wider mb-2">Key Insight</p>
              <p className="text-foreground">
                High-value problem. Manual process. No single owner. Affects multiple teams. This was a classic case of organizational pain hiding in plain sight.
              </p>
            </div>
          </motion.section>

          {/* Defining Success */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Defining Success
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Before building anything, I aligned stakeholders on what success would look like:
            </p>
            
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Metric</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Baseline</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {successMetrics.map((item, index) => (
                    <tr key={item.metric} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm">{item.metric}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.baseline}</td>
                      <td className="px-4 py-3 text-sm text-gold-primary font-medium">{item.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* The Build Decision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              The Build Decision
            </h2>
            
            <h3 className="font-display text-lg font-semibold mb-4">Why Not Just Ask Engineering?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Engineering's roadmap was locked for 2 quarters with critical payroll and compliance work. Asking for 2-3 engineers for 6 weeks would mean delayed features that directly impact client retention.
            </p>
            
            <div className="overflow-hidden rounded-xl border border-border mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Option</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Assessment</th>
                  </tr>
                </thead>
                <tbody>
                  {buildOptions.map((item, index) => (
                    <tr key={item.option} className={item.highlight ? "bg-gold-primary/10" : index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm font-medium">{item.option}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.assessment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Framing Insight */}
            <div className="p-5 rounded-xl bg-gold-primary/10 border border-gold-primary/30">
              <p className="text-sm font-semibold text-gold-primary uppercase tracking-wider mb-2">Framing That Worked</p>
              <p className="text-foreground">
                I didn't position this as "going around Engineering." I framed it as "de-risking for Engineering" — building a validated prototype so they wouldn't waste cycles on unvalidated requirements.
              </p>
            </div>
          </motion.section>

          {/* Stakeholder Management */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Stakeholder Management
            </h2>
            
            <div className="overflow-hidden rounded-xl border border-border mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Stakeholder</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Their Concern</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">How I Managed It</th>
                  </tr>
                </thead>
                <tbody>
                  {stakeholders.map((item, index) => (
                    <tr key={item.role} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm font-medium">{item.role}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.concern}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.management}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <blockquote className="border-l-4 border-gold-primary pl-6 py-4 bg-card rounded-r-xl">
              <p className="text-foreground italic">
                The Finance Analyst was my secret weapon. I made her a co-creator, not just a stakeholder. When I presented to the CFO, she advocated for it: "This is exactly what I need."
              </p>
            </blockquote>
          </motion.section>

          {/* What I Built */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              What I Built
            </h2>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Python", "Streamlit", "Plotly", "Financial Modeling"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Dashboard Screenshot */}
            <div className="mb-8 rounded-2xl border border-border overflow-hidden bg-card">
              <div className="p-4 border-b border-border bg-secondary/30">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-gold-primary" />
                  <span className="font-medium">Risk Dashboard Overview</span>
                </div>
              </div>
              <div className="p-4 bg-[#1a1a1a]">
                <img 
                  src={wageLibraryDashboard} 
                  alt="Wage Liability Risk Engine dashboard showing portfolio exposure analysis, country breakdown, and risk scoring"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold mb-4">Core Capabilities</h3>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Liability Calculation Engine</span> — Computes notice period + severance + statutory bonuses + vacation accrual using country-specific labor law formulas.
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">FX Conversion & Risk</span> — Real-time exchange rates with 30-day volatility tracking and risk ratings.
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Portfolio Risk Scoring</span> — Composite score weighting liability magnitude, FX volatility, and legal risk. Concentration alerts when exposure is over-weighted.
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Interactive Dashboard</span> — Treemap visualizations, filterable employee analysis, drill-down from portfolio → country → individual.
              </p>
            </div>

            <h3 className="font-display text-lg font-semibold mb-4">Countries Covered</h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Country</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Key Liability Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country, index) => (
                    <tr key={country.name} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm whitespace-nowrap">
                        <span className="text-xl mr-2">{country.flag}</span>
                        <span>{country.name}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{country.drivers}</td>
                    </tr>
                  ))}
                  <tr className="bg-secondary/20">
                    <td colSpan={2} className="px-4 py-3 text-sm text-muted-foreground italic">
                      + UK, Philippines, Singapore, Australia
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Key Trade-offs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Key Trade-offs
            </h2>
            
            <div className="overflow-hidden rounded-xl border border-border mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Decision</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Trade-off</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {tradeoffs.map((item, index) => (
                    <tr key={item.decision} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm font-medium">{item.decision}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.tradeoff}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Product Sense */}
            <div className="p-5 rounded-xl bg-gold-primary/10 border border-gold-primary/30">
              <p className="text-sm font-semibold text-gold-primary uppercase tracking-wider mb-2">Product Sense</p>
              <p className="text-foreground">
                Legal wanted every edge case covered. I pushed back: "That's 3 employees. Let's get 95% right first, then handle exceptions." Knowing when "good enough" unlocks value is the job.
              </p>
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Results
            </h2>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {results.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 rounded-xl bg-card border border-border text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gold-primary mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-xs text-green-500">{item.change}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-display text-lg font-semibold mb-4">Qualitative Impact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-gold-primary">•</span>
                <span><span className="text-foreground font-medium">CFO</span> now references the dashboard in board meetings</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-primary">•</span>
                <span><span className="text-foreground font-medium">Enterprise sales</span> uses liability management as a competitive differentiator</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-primary">•</span>
                <span><span className="text-foreground font-medium">Engineering</span> has a working prototype and validated spec for their roadmap</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-primary">•</span>
                <span><span className="text-foreground font-medium">Finance team</span> actually uses it daily — the real test</span>
              </li>
            </ul>
          </motion.section>

          {/* Lessons Learned */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Lessons Learned
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-green-500 mb-4">What Worked</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>
                    <span className="text-foreground font-medium">Co-designing with the end user.</span> The Finance Analyst shaped every decision. Her advocacy made executive buy-in effortless.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Framing as "de-risking."</span> Engineering felt supported, not bypassed.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Starting with 80% coverage.</span> 10 countries covered the vast majority. Perfect is the enemy of shipped.
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-amber-500 mb-4">What I'd Do Differently</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>
                    <span className="text-foreground font-medium">Involve Legal earlier.</span> They had context about upcoming labor law changes I didn't know about.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Build the data pipeline first.</span> A simple CSV template would have accelerated adoption.
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border text-center"
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-gold-light">See It In Action</h2>
            <p className="text-muted-foreground mb-6">
              The live demo includes sample data for 25 employees across 10 countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wage-liability-risk-engine.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-primary text-background font-semibold hover:bg-gold-light transition-colors"
              >
                <Globe className="w-4 h-4" />
                View Live Demo →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyWageRisk;
