import { motion } from "framer-motion";
import { ArrowLeft, Workflow, CheckCircle2, AlertTriangle, XCircle, Lightbulb, Clock, DollarSign, Target, Users, Zap, MessageSquare } from "lucide-react";
import n8nWorkflowScreenshot from "@/assets/n8n-workflow-screenshot.png";
import { Link } from "react-router-dom";
import { NarrativeBlock } from "@/components/CaseStudySection";
import CodeBlock from "@/components/CodeBlock";

const problemNumbers = [
  { value: "$180K", label: "Annual labor on rule-based lookups" },
  { value: "12%", label: "Rework rate due to incorrect tax treatment" },
  { value: "4.2 days", label: "Average submission to reimbursement" },
  { value: "15+ hrs", label: "Weekly specialist time on research" },
];

const options = [
  { option: "Wait for Engineering", detail: "9+ months until Q1 next year", rejected: true },
  { option: "Buy a solution", detail: "None handled EOR tax complexity", rejected: true },
  { option: "Build it myself with no-code", detail: "Validate quickly, prove concept or learn", chosen: true },
];

const stakeholderBuyIn = [
  { 
    team: "Engineering", 
    pitch: "I'm not asking for resources. I'll build and maintain it. I need your blessing and architecture review.",
    result: "Approved with conditions"
  },
  { 
    team: "Operations", 
    pitch: "Let me pilot with Germany and UK. You get a kill switch if it doesn't work.",
    result: "Enthusiastic yes"
  },
  { 
    team: "Finance/Compliance", 
    pitch: "Every rule comes from your existing guides. The audit trail will be better than today. I own accountability.",
    result: "Approved for pilot"
  },
];

const workflowCapabilities = [
  "Extracts receipt data using GPT-4 Vision",
  "Applies country-specific tax rules (German Sachbezug, UK VAT blocking, US TCJA limits)",
  "Calculates risk scores for approval routing",
  "Sends interactive Slack messages with full tax breakdowns",
  "Auto-approves low-risk expenses, escalates others",
];

const results = [
  { metric: "Processing time", before: "4.2 days", after: "0.8 days" },
  { metric: "Tax accuracy", before: "88%", after: "99.2%" },
  { metric: "Hours/week on expenses", before: "15", after: "4" },
  { metric: "Compliance findings", before: "3/year", after: "0" },
];

const keyDecisions = [
  {
    title: "No-code over waiting",
    description: "Time-to-value mattered more than architectural purity. Contained risk with operational (not customer-facing) scope."
  },
  {
    title: "Two countries first",
    description: "Germany + UK = 45% of volume. Validated approach before scaling to 7 countries."
  },
  {
    title: "Risk-based auto-approve",
    description: "34% of expenses now auto-approve with zero compliance issues. Approvers can audit anytime."
  },
];

const takeaways = [
  "The best solution isn't always a product feature. Sometimes it's an operational tool you build yourself.",
  "Quantify before you build. \"15 hours/week\" made every conversation easier than \"it takes a long time.\"",
  "Ask stakeholders for blessing, not resources. Engineering became allies, not blockers.",
];

const techStack = [
  { name: "n8n", description: "Workflow automation" },
  { name: "OpenAI GPT-4o", description: "Receipt AI" },
  { name: "Airtable", description: "Data layer" },
  { name: "Slack", description: "Notifications" },
  { name: "REST APIs", description: "Currency conversion" },
];

const routingLogic = `// Tax Classification Router
def route_expense(expense, country):
  confidence = model.predict(expense)
  
  if confidence > 0.95:
    return "AUTO_APPROVE"  # High confidence
  elif confidence < 0.80:
    return "AUTO_REJECT"   # Needs attention
  else:
    # The expensive path - human review
    return "ROUTE_TO_SPECIALIST"
    
# Result: 34% auto-approved, 0 compliance issues`;

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
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-sm rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20">
                Lead Product Manager
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Oyster HR</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">2024</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gold-shine">
              Automating Multi-Country Expense Tax Compliance
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {["n8n", "OpenAI", "Airtable", "Slack"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Workflow Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 rounded-2xl border border-border overflow-hidden bg-card"
          >
            <div className="p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-2">
                <Workflow className="w-5 h-5 text-gold-primary" />
                <span className="font-medium">36-Node n8n Workflow</span>
              </div>
            </div>
            <div className="p-4 bg-[#1a1a1a]">
              <img 
                src={n8nWorkflowScreenshot} 
                alt="n8n workflow showing 36-node expense automation system"
                className="w-full h-auto rounded-lg"
              />
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
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                During quarterly reviews with our Payroll Operations team, I uncovered a hidden time sink: specialists were spending <span className="text-gold-primary font-semibold">15+ hours per week</span> researching tax rules for employee expenses. Is this meal taxable in Germany? Can we reclaim VAT in the UK? Every submission became a research project.
              </p>
              <p>
                I ran a time study and found that over <span className="text-foreground font-medium">60% of their work followed deterministic rules</span>—not judgment calls. We were paying specialists to do what a system should handle.
              </p>
            </div>

            {/* Problem Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {problemNumbers.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-card border border-border text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gold-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Strategic Narrative: Context/Conflict/Bet */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Strategic Narrative
            </h2>
            <div className="space-y-4">
              <NarrativeBlock type="context">
                During quarterly reviews with Payroll Operations, I uncovered a hidden time sink: specialists were spending <span className="text-foreground font-semibold">15+ hours per week</span> researching tax rules for employee expenses across 10+ countries. Each submission became a research project—"Is this meal taxable in Germany?" "Can we reclaim VAT in the UK?"
              </NarrativeBlock>

              <NarrativeBlock type="conflict">
                I wrote a product brief and took it to Engineering. Their response: <span className="text-foreground italic">"Solid problem, but we're committed through Q3. Earliest is Q1 next year."</span> The "Safe" option was to wait. The "Fast" option was to build something myself—but stakeholders feared a PM-built tool would create tech debt or compliance risk.
              </NarrativeBlock>

              <NarrativeBlock type="bet">
                I proposed a <span className="text-foreground font-semibold">"Guardrails, Not Gates"</span> strategy: I'd build and maintain it myself using no-code tools. I'd pilot with just Germany and UK (45% of volume), and I'd give stakeholders a kill switch. If it failed, we'd learn something. If it worked, Engineering would have a validated reference implementation.
              </NarrativeBlock>
            </div>
          </motion.section>

          {/* Technical Implementation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              The Trade-Off Matrix
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We traded "100% Automation" for "100% Safety." Instead of letting AI decide everything, we built a confidence-based router that triages expenses into three buckets:
            </p>
            <CodeBlock 
              code={routingLogic}
              language="python"
              filename="routing_logic.py"
            />
          </motion.section>

          {/* Why Not Just Build It? */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Why Not Just Build It?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I wrote a product brief and took it to Engineering. Their response: <span className="text-foreground italic">"Solid problem, but we're committed through Q3. Earliest is Q1 next year."</span>
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              They were right to prioritize core platform work. But Operations couldn't wait 9 months.
            </p>

            <div className="space-y-3">
              {options.map((item, index) => (
                <motion.div
                  key={item.option}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                    item.chosen 
                      ? "bg-gold-primary/10 border-gold-primary/30" 
                      : "bg-card border-border"
                  }`}
                >
                  {item.rejected ? (
                    <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-gold-primary flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`font-medium ${item.chosen ? "text-gold-primary" : "text-foreground"}`}>
                      {item.option}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  {item.chosen && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gold-primary/20 text-gold-primary">
                      Chosen
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Getting Buy-In */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Getting Buy-In
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This required careful stakeholder management:
            </p>
            <div className="space-y-4">
              {stakeholderBuyIn.map((item, index) => (
                <motion.div
                  key={item.team}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-gold-primary" />
                    <h3 className="font-semibold text-foreground">{item.team}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 italic">"{item.pitch}"</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">{item.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A <span className="text-foreground font-medium">36-node n8n workflow</span> that:
            </p>
            <div className="space-y-3 mb-8">
              {workflowCapabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                >
                  <Zap className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-primary/10 border border-gold-primary/20">
              <Lightbulb className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gold-light">Key design principle</p>
                <p className="text-sm text-muted-foreground">
                  Automate the deterministic, surface the judgment calls. The system explains every decision so approvers trust it.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sample Slack Output */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Sample Slack Output
            </h2>
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
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Metric</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Before</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">After</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, index) => (
                    <tr key={row.metric} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-4 py-3 text-sm text-foreground font-medium">{row.metric}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{row.before}</td>
                      <td className="px-4 py-3 text-sm text-gold-primary font-semibold">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Strategic impact:</span> The pilot's success moved "Expense Tax Engine" from backlog to Q2 priority. Engineering now has validated requirements and a working reference implementation.
              </p>
            </div>
          </motion.section>

          {/* Key Decisions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Key Decisions
            </h2>
            <div className="space-y-4">
              {keyDecisions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-gold-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Takeaways */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold-light">
              Takeaways
            </h2>
            <div className="space-y-4">
              {takeaways.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gold-primary">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

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
        </div>
      </div>
    </main>
  );
};

export default CaseStudyN8n;
