import { motion } from "framer-motion";
import { ArrowLeft, Workflow, Bot, Database, MessageSquare, ExternalLink, CheckCircle2, AlertTriangle, XCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const workflowStages = [
  { stage: "Intake", description: "Accepts expenses via API webhook, email forward, or Slack command" },
  { stage: "AI Extraction", description: "GPT-4 Vision parses receipts to extract vendor, amount, date, and category" },
  { stage: "Tax Assessment", description: "Applies country-specific rules to calculate taxable benefits, VAT reclaim eligibility, and corporate deductibility" },
  { stage: "Policy Validation", description: "Checks against daily limits, prohibited categories, and flags anomalies with a 0-100 risk score" },
  { stage: "Smart Routing", description: "Auto-approves low-risk expenses; escalates others to manager, finance, or full approval chain" },
  { stage: "Slack Approvals", description: "Sends rich notifications with tax impact summary and interactive approve/reject buttons" },
  { stage: "Processing", description: "Updates accounting records, queues payroll reimbursements, and logs audit trail" },
];

const taxRules = [
  { country: "🇩🇪", name: "Germany", rule: "Meals over €50/day are taxable benefits (Sachbezug)" },
  { country: "🇬🇧", name: "UK", rule: "VAT on meals and accommodation is never reclaimable" },
  { country: "🇺🇸", name: "USA", rule: "Entertainment is 0% deductible since TCJA 2017" },
  { country: "🇫🇷", name: "France", rule: "Client entertainment VAT is 50% reclaimable" },
  { country: "🇳🇱", name: "Netherlands", rule: "Bicycle purchases have special tax exemption" },
];

const techStack = [
  { name: "n8n", description: "Workflow automation" },
  { name: "OpenAI GPT-4o", description: "Receipt AI" },
  { name: "Airtable", description: "Data layer" },
  { name: "Slack", description: "Notifications" },
  { name: "REST APIs", description: "Currency conversion" },
];

const technicalHighlights = [
  "36-node n8n workflow with 3 trigger paths",
  "GPT-4 Vision for receipt data extraction",
  "Tax rules engine covering 7 countries and 30+ category combinations",
  "Real-time currency conversion and duplicate detection",
  "Parallel processing for accounting, payroll, and audit systems",
];

const businessValue = [
  "Reduces manual compliance research by automating tax assessments",
  "Ensures consistent policy application across jurisdictions",
  "Speeds up approval cycles with intelligent auto-approve",
  "Creates audit-ready documentation for every expense",
];

const CaseStudyN8n = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container max-w-6xl mx-auto px-6 py-4">
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
            <div className="flex flex-wrap gap-2 mb-6">
              {["n8n", "OpenAI", "Airtable", "Slack"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gold-shine">
              EOR Expense Intelligence System
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              A sophisticated expense management workflow designed for Employer of Record (EOR) businesses operating across multiple countries. The system automates what typically requires specialized payroll knowledge—determining the tax treatment of employee expenses in different jurisdictions.
            </p>
          </motion.div>

          {/* Workflow Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 rounded-2xl border border-border overflow-hidden bg-card"
          >
            <div className="p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-2">
                <Workflow className="w-5 h-5 text-gold-primary" />
                <span className="font-medium">n8n Workflow Architecture</span>
              </div>
            </div>
            <div className="p-8 bg-[#1a1a1a] min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-secondary/50 border border-border mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded bg-gold-primary/60" />
                    <span className="text-muted-foreground">Intake Layer</span>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bot className="w-4 h-4 text-gold-primary" />
                    <span className="text-muted-foreground">AI Extraction</span>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="w-4 h-4 text-gold-primary" />
                    <span className="text-muted-foreground">Tax Engine</span>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-gold-primary" />
                    <span className="text-muted-foreground">Approval Routing</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">36-node workflow with 3 trigger paths</p>
              </div>
            </div>
          </motion.div>

          {/* The Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              The Challenge
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When a German employee submits a €150 client dinner receipt, the EOR needs to answer:
            </p>
            <div className="space-y-4 pl-4 border-l-2 border-gold-primary/30">
              <div className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">1.</span>
                <div>
                  <p className="text-foreground">Is this a taxable benefit?</p>
                  <p className="text-sm text-muted-foreground">(Yes, amounts over €50/day trigger Sachbezug rules)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">2.</span>
                <div>
                  <p className="text-foreground">Can we reclaim the VAT?</p>
                  <p className="text-sm text-muted-foreground">(No, meals are "blocked input" in Germany)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">3.</span>
                <div>
                  <p className="text-foreground">What percentage is tax-deductible?</p>
                  <p className="text-sm text-muted-foreground">(70% for business meals)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">4.</span>
                <div>
                  <p className="text-foreground">Should we recommend per diem instead?</p>
                  <p className="text-sm text-muted-foreground">(Often more tax-efficient)</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Multiply this by dozens of countries and hundreds of employees—it's a compliance nightmare that traditionally requires manual research for every expense.
            </p>
          </motion.section>

          {/* The Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              The Solution
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I built an end-to-end automation that handles the entire expense lifecycle:
            </p>
            <div className="space-y-3">
              {workflowStages.map((item, index) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gold-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.stage}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tax Intelligence Examples */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Tax Intelligence Examples
            </h2>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Country</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rule Applied</th>
                  </tr>
                </thead>
                <tbody>
                  {taxRules.map((rule, index) => (
                    <tr key={rule.name} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm">
                        <span className="text-xl mr-2">{rule.country}</span>
                        <span className="text-muted-foreground">{rule.name}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{rule.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Sample Output */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Sample Output
            </h2>
            <p className="text-muted-foreground mb-6">
              The Slack approval message shows approvers exactly what they need:
            </p>
            <div className="rounded-xl border border-border bg-[#1a1a1a] p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🧾</span>
                <span className="font-bold text-foreground">Expense Approval Required</span>
              </div>
              
              <div className="space-y-1 mb-6 text-muted-foreground">
                <p><span className="text-foreground">Employee:</span> Hans Mueller (Germany)</p>
                <p><span className="text-foreground">Amount:</span> €150.00 (≈ $163.50 USD)</p>
                <p><span className="text-foreground">Category:</span> Client Dinner</p>
              </div>
              
              <div className="mb-6">
                <p className="text-foreground mb-2">📊 Tax Assessment</p>
                <div className="pl-4 space-y-1 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="text-muted-foreground">├─</span>
                    <span>Employee Impact:</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500">€100 added to taxable income</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-muted-foreground">├─</span>
                    <span>VAT Reclaim:</span>
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400">Not eligible (blocked input)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-muted-foreground">└─</span>
                    <span>Corp Deduction:</span>
                    <span className="text-foreground">70% deductible</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mb-6 p-3 rounded-lg bg-gold-primary/10 border border-gold-primary/20">
                <Lightbulb className="w-4 h-4 text-gold-primary mt-0.5" />
                <p className="text-gold-light text-sm">Per diem method would save employee ~€30 in taxes</p>
              </div>
              
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-green-600/20 text-green-400 border border-green-600/30 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Approve
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 border border-red-600/30 text-sm flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground border border-border text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Request Info
                </button>
              </div>
            </div>
          </motion.section>

          {/* Technical Highlights & Business Value */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h2 className="font-display text-xl font-bold mb-4 text-gold-light">
                Technical Highlights
              </h2>
              <ul className="space-y-3">
                {technicalHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h2 className="font-display text-xl font-bold mb-4 text-gold-light">
                Business Value
              </h2>
              <ul className="space-y-3">
                {businessValue.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-3 rounded-xl bg-card border border-border hover:border-gold-primary/30 transition-colors"
                >
                  <p className="font-semibold text-foreground">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-primary text-background font-semibold hover:bg-gold-light transition-colors"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyN8n;
