import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Users, Target, Settings, TrendingUp, Clock, Bot, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CaseStudyERequisition = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const target = 1.2;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(eased * target);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, []);

  const stages = [
    { id: 'requisition', title: 'Requisition Entry', icon: '📝', owner: 'Requester' },
    { id: 'business', title: 'Business Approval', icon: '👔', owner: 'Business Approver' },
    { id: 'cfo', title: 'CFO Approval', icon: '🏛️', owner: 'CFO', conditional: '≥$250K' },
    { id: 'buyer', title: 'Buyer Review', icon: '🔍', owner: 'Procurement' },
    { id: 'agreement', title: 'Agreement Setup', icon: '📄', owner: 'Procurement' },
    { id: 'pfc', title: 'PFC Endorsement', icon: '✅', owner: 'Finance' },
    { id: 'integration', title: 'System Push', icon: '⚡', owner: 'Automated' }
  ];

  const stakeholders = [
    { role: 'Requesters', count: '500+', need: 'Speed & simplicity', pain: 'Manual forms, lost paperwork' },
    { role: 'Business Approvers', count: '50+', need: 'Visibility & control', pain: 'Email chains, no audit trail' },
    { role: 'Procurement/Buyers', count: '25+', need: 'Compliance & accuracy', pain: 'Rework, missing data' },
    { role: 'Finance/PFCs', count: '15+', need: 'Governance & reporting', pain: 'Reconciliation delays' },
    { role: 'Executive (CFO)', count: '1', need: 'Risk oversight', pain: 'Large POs slipping through' }
  ];

  const decisions = [
    { 
      decision: 'Dynamic Approval Routing', 
      rationale: 'Different project types (Direct/Indirect) and amounts require different approvers. Hardcoding would create maintenance nightmare.',
      impact: 'Reduced approval config changes from weeks to hours'
    },
    { 
      decision: '$250K CFO Threshold', 
      rationale: 'Stakeholder interviews revealed CFO only needed visibility on large INDIRECT spend. Direct project spend already had PM oversight.',
      impact: 'Reduced CFO queue by 80% while maintaining governance'
    },
    { 
      decision: 'Re-Approval Trigger on Amount Increase', 
      rationale: 'Buyers often negotiate different terms. Without re-approval, approved budgets could be exceeded without visibility.',
      impact: 'Zero budget overruns due to unapproved increases'
    },
    { 
      decision: 'P-Card Fast Track', 
      rationale: 'Low-value purchases didn\'t need full workflow. Created express lane for P-Card purchases on indirect projects.',
      impact: '3-day → same-day for qualifying purchases'
    }
  ];

  const metrics = [
    { label: 'Annual Throughput', value: `$${animatedValue.toFixed(1)}B`, sublabel: 'Federal Procurement', icon: TrendingUp },
    { label: 'Cycle Time', value: '-65%', sublabel: 'Avg. Days to PO', icon: Clock },
    { label: 'Manual Touchpoints', value: '-80%', sublabel: 'Data Entry Eliminated', icon: Bot },
    { label: 'Compliance', value: '100%', sublabel: 'Audit Trail Coverage', icon: CheckCircle }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-6 hero-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-primary/10 text-gold-primary text-sm font-medium mb-6 border border-gold-primary/20">
                Product Case Study
              </span>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                E-Requisition{" "}
                <span className="text-gradient">Workflow System</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Designed and shipped an end-to-end procurement automation platform 
                processing $1.2B annually in federal government contracts.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["BPM Workflow", "SharePoint", "Cost Point", "Process Automation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                ICF International • 6-month initiative • 600+ users
              </p>
            </motion.div>

            {/* Right: Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <metric.icon className="w-8 h-8 text-gold-primary mx-auto mb-3" />
                  <div className="font-display text-3xl font-bold text-gold-light mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-secondary/50">
              <TabsTrigger value="problem" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Problem
              </TabsTrigger>
              <TabsTrigger value="stakeholders" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Stakeholders
              </TabsTrigger>
              <TabsTrigger value="decisions" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Key Decisions
              </TabsTrigger>
              <TabsTrigger value="workflow" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Solution
              </TabsTrigger>
            </TabsList>

            {/* Problem Tab */}
            <TabsContent value="problem">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <span className="text-4xl">🔥</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      ICF's procurement process was drowning in manual workflows. Requisitions lived in email chains, 
                      approvals stalled without visibility, and Finance spent days reconciling paperwork. 
                      With $1B+ flowing through annually, even small inefficiencies compounded into major losses.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card border border-destructive/30">
                    <h4 className="text-sm font-semibold text-destructive mb-4 uppercase tracking-wide">
                      BEFORE — Pain Points
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Average 14-day cycle time for PO creation',
                        'No visibility into approval status',
                        'Manual data entry across 3 systems',
                        'Paper-based audit trail (compliance risk)',
                        'CFO reviewing all large purchases manually'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-destructive font-bold">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-card border border-emerald-500/30">
                    <h4 className="text-sm font-semibold text-emerald-500 mb-4 uppercase tracking-wide">
                      AFTER — Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {[
                        '5-day average cycle time (65% reduction)',
                        'Real-time status tracking for all stakeholders',
                        'Single data entry with auto-population',
                        '100% digital audit trail',
                        'Intelligent routing: CFO only sees what matters'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-emerald-500 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Stakeholders Tab */}
            <TabsContent value="stakeholders">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <Users className="w-10 h-10 text-gold-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3">Stakeholder Ecosystem</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducted 30+ stakeholder interviews across 5 user groups to map needs, pain points, and political dynamics. 
                      Key insight: each group optimized for different outcomes — speed vs. control vs. compliance.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stakeholders.map((s, i) => (
                    <div key={i} className="p-5 rounded-xl bg-card border border-border hover:border-gold-primary/30 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display font-semibold">{s.role}</h4>
                        <span className="text-gold-primary font-mono text-sm">{s.count}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="text-emerald-500 font-medium">Need:</span> {s.need}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-destructive font-medium">Pain:</span> {s.pain}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-gold-primary/10 border border-gold-primary/20">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-gold-primary">PM Insight:</span> Procurement wanted more control; Requesters wanted less friction. 
                    Resolved by designing progressive disclosure — simple default path with power-user options hidden until needed.
                  </p>
                </div>
              </motion.div>
            </TabsContent>

            {/* Key Decisions Tab */}
            <TabsContent value="decisions">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <Target className="w-10 h-10 text-gold-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3">Strategic Product Decisions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every workflow rule represents a deliberate tradeoff. Here are the decisions that shaped the product — 
                      and the reasoning behind them.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {decisions.map((d, i) => (
                    <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-gold-primary/30 transition-colors">
                      <h4 className="font-display text-lg font-semibold text-gold-light mb-3">
                        {d.decision}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">Rationale:</span> {d.rationale}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-emerald-500">Impact:</span>{" "}
                        <span className="text-muted-foreground">{d.impact}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Workflow Tab */}
            <TabsContent value="workflow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <Settings className="w-10 h-10 text-gold-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3">Workflow Architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      7-stage workflow with conditional routing, exception handling, and system integrations. 
                      Hover to explore each stage.
                    </p>
                  </div>
                </div>

                {/* Flow Diagram */}
                <div className="flex flex-wrap items-center justify-center gap-3 p-6 rounded-2xl bg-card border border-border overflow-x-auto">
                  {stages.map((stage, index) => (
                    <div key={stage.id} className="flex items-center gap-3">
                      <div
                        onMouseEnter={() => setActiveStage(stage.id)}
                        onMouseLeave={() => setActiveStage(null)}
                        className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200 min-w-[100px] ${
                          activeStage === stage.id
                            ? "bg-gold-primary/10 border-gold-primary scale-105"
                            : "bg-secondary/50 border-border hover:border-gold-primary/50"
                        }`}
                      >
                        {stage.conditional && (
                          <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-mono bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                            {stage.conditional}
                          </span>
                        )}
                        <span className="text-2xl">{stage.icon}</span>
                        <span className="text-xs font-medium text-center">{stage.title}</span>
                        <span className="text-xs text-muted-foreground">{stage.owner}</span>
                      </div>
                      
                      {index < stages.length - 1 && (
                        <span className="text-gold-primary text-xl">→</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Re-approval indicator */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <span className="text-2xl">🔄</span>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-purple-400">Exception Flow:</span> Amount increases trigger re-approval loop back to Business Approval
                  </p>
                </div>

                {/* Technical Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: 'Platform', items: ['BPM Workflow Engine', 'SharePoint Repository', 'Cost Point Integration'] },
                    { title: 'My Role', items: ['Requirements & PRDs', 'Workflow Design', 'Hands-on Development', 'UAT & Training'] },
                    { title: 'Techniques', items: ['Progressive Disclosure', 'Conditional Branching', 'Auto-population Logic'] }
                  ].map(card => (
                    <div key={card.title} className="p-5 rounded-xl bg-card border border-border">
                      <h4 className="text-sm font-semibold text-gold-primary mb-3 uppercase tracking-wide">
                        {card.title}
                      </h4>
                      {card.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-primary/50" />
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Full lifecycle ownership: Discovery → Design → Build → Ship → Iterate
          </p>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyERequisition;
