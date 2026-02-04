import { motion } from "framer-motion";
import { ArrowLeft, Zap, AlertTriangle, Lightbulb, Rocket, Building2, FileCheck, Settings, Users, TrendingDown, DollarSign, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudyPayroll = () => {
  const metrics = [
    { value: "90%", label: "Error Reduction" },
    { value: "$2.5M", label: "Ops Savings (Annual)" },
    { value: "12 hrs", label: "Faster Processing" },
    { value: "Zero", label: "Touch Payroll" },
  ];

  const journeySteps = [
    {
      icon: AlertTriangle,
      title: "Discovery: Beyond the Tickets",
      description: "I didn't just read the Zendesk reports. I shadowed the Ops team for 3 days during payroll cutoff. I realized the problem wasn't \"bad data\"—it was late validation. We were trying to fix errors days after the user made them.",
      color: "text-amber-400",
    },
    {
      icon: Lightbulb,
      title: "Hypothesis: The Governance Plane",
      description: "If we could decouple the rules (Germany needs receipts) from the execution (Ops checking emails), we could validate inputs at the source. My hypothesis was that a flexible \"Rule Set\" engine could reduce Ops touches by 80%.",
      color: "text-emerald-400",
    },
    {
      icon: Zap,
      title: "Strategic Pivot: The \"Concierge\" MVP",
      description: "A major enterprise client threatened to churn due to lack of custom pay rules. Instead of rushing a complex UI, I proposed we build the Backend Logic First and inject their rules manually via script. This \"Concierge Service\" saved the deal and validated our schema in production with zero frontend cost.",
      highlight: true,
      color: "text-gold-primary",
    },
    {
      icon: Rocket,
      title: "Scale: Full Engine Rollout",
      description: "With the data model proven by our \"Concierge\" client, we confidently built the self-serve UI. We rolled out the full engine to all 5,000+ customers, enabling them to configure their own policies without Ops intervention.",
      color: "text-blue-400",
    },
  ];

  const architectureLayers = [
    {
      layer: "Taxonomy",
      title: "Flexible Types",
      description: "Decoupled \"System Categories\" (Tax) from \"User Types\" (e.g., \"TechStart Stipend\"), allowing infinite customization.",
      icon: Building2,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
    },
    {
      layer: "Validation",
      title: "Rule Sets",
      description: "The core engine. Configurable logic blocks: \"If Country=DE AND Amount>€20, Block unless Receipt Attached.\"",
      icon: FileCheck,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
    {
      layer: "Experience",
      title: "Guided Wizard",
      description: "Dynamic UI that renders questions and banners in real-time based on the selected type.",
      icon: Settings,
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
    },
  ];

  const impactMetrics = [
    { value: "90%", label: "Reduction in Rejections", sublabel: "Validations catch errors at entry", icon: TrendingDown },
    { value: "$2.5M", label: "Ops Savings", sublabel: "Avoided hiring 30+ Payroll Specialists", icon: DollarSign },
    { value: "40%", label: "Zero-Touch Rate", sublabel: "Transactions processed without human review", icon: CheckCircle2 },
  ];

  const sections = [
    { id: "crisis", label: "The Crisis", icon: AlertTriangle },
    { id: "journey", label: "Journey", icon: Rocket },
    { id: "architecture", label: "Architecture", icon: Building2 },
    { id: "execution", label: "Execution", icon: FileCheck },
    { id: "impact", label: "Impact", icon: TrendingDown },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link 
            to="/#case-studies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary text-sm font-medium mb-6 border border-gold-primary/20">
              <Zap className="w-4 h-4" />
              Feature Delivered
            </span>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Automating Trust: The{" "}
              <span className="text-gradient">Payroll Governance Engine</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              How I decoupled payroll operations from linear headcount growth by building a self-healing validation engine, saving $2.5M in annual operational costs.
            </p>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold-primary">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Tabs defaultValue="crisis" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0 mb-12">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border data-[state=active]:bg-gold-primary/10 data-[state=active]:border-gold-primary/30 data-[state=active]:text-gold-primary transition-all"
                >
                  <section.icon className="w-4 h-4" />
                  {section.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Crisis Tab */}
            <TabsContent value="crisis">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">01</span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-2">The "Operational Drag" Crisis</h2>
                  </div>
                </div>

                <div className="card-gradient rounded-2xl border border-border p-8 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    As we scaled to 5,000+ customers, our payroll operations hit a breaking point. An internal analysis of 179,063 support tickets revealed that <span className="text-foreground font-semibold">20% of our support volume</span> was purely "context chasing"—Ops asking customers for missing receipts, clarification on bonus policies, or fixing data entry errors.
                  </p>

                  <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <h3 className="text-xl font-semibold text-amber-400 mb-3">The "Tribal Knowledge" Trap</h3>
                    <p className="text-muted-foreground italic">
                      "Only Omar knows the per-diem cap for Germany." Our compliance logic lived in the heads of our Ops team, not in code. This meant if Omar was sick, German payroll stalled.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
                      <div className="text-2xl font-bold text-red-400">179K</div>
                      <div className="text-sm text-muted-foreground">Support Tickets Analyzed</div>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
                      <div className="text-2xl font-bold text-red-400">20%</div>
                      <div className="text-sm text-muted-foreground">Context Chasing</div>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border text-center">
                      <div className="text-2xl font-bold text-red-400">5,000+</div>
                      <div className="text-sm text-muted-foreground">Customers at Scale</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Journey Tab */}
            <TabsContent value="journey">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">02</span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-2">My Product Journey</h2>
                  </div>
                </div>

                <div className="space-y-6">
                  {journeySteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative pl-8 border-l-2 ${step.highlight ? 'border-gold-primary' : 'border-border'}`}
                    >
                      <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center ${step.highlight ? 'bg-gold-primary/20' : 'bg-secondary'}`}>
                        <step.icon className={`w-3 h-3 ${step.color}`} />
                      </div>
                      
                      <div className={`card-gradient rounded-xl border p-6 ${step.highlight ? 'border-gold-primary/30 bg-gold-primary/5' : 'border-border'}`}>
                        <h3 className={`text-lg font-semibold mb-2 ${step.color}`}>{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        
                        {step.highlight && (
                          <div className="mt-4 px-3 py-1 rounded-full bg-gold-primary/10 text-gold-primary text-sm inline-block">
                            💡 The "Aha" Moment
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Architecture Tab */}
            <TabsContent value="architecture">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">03</span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-2">The Architecture</h2>
                    <p className="text-muted-foreground">The "Rule Set" Engine</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I architected a backoffice-managed layer that intercepted payroll submissions before they reached our Ops team.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {architectureLayers.map((layer, index) => (
                    <motion.div
                      key={layer.layer}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative overflow-hidden rounded-xl border ${layer.borderColor} p-6`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-50`} />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <layer.icon className="w-4 h-4" />
                          {layer.layer}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{layer.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{layer.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center items-center gap-4 text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-secondary text-sm">User Input</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm">Taxonomy</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">Validation</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Guided UI</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-sm">Clean Data</span>
                </div>
              </motion.div>
            </TabsContent>

            {/* Execution Tab */}
            <TabsContent value="execution">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">04</span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-2">Execution in Production</h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The final result was a <span className="text-foreground font-semibold">"Self-Healing" UI</span>. We shifted the burden of accuracy from the Ops team (who have to chase details) to the User (who has the details).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By providing clear banners, blocking rules, and required fields at the moment of entry, we ensured that clean data enters the pipe.
                    </p>
                  </div>

                  {/* UI Mockup */}
                  <div className="card-gradient rounded-xl border border-border overflow-hidden">
                    <div className="p-4 border-b border-border bg-secondary/30">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Add Payroll Change</span>
                        <span className="text-xs text-muted-foreground">Tenant: Acme Corp</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Type</label>
                        <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                          Crew Layover Allowance
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-red-400">BLOCKING RULE</div>
                            <div className="text-sm text-muted-foreground">Flight number is required for layover allowances.</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Flight Number *</label>
                        <input 
                          type="text" 
                          placeholder="e.g., UA1234"
                          className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-gold-primary/50 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">05</span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-2">The Impact</h2>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  By moving governance from "people" to "platform," we fundamentally changed the unit economics of our payroll business.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {impactMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-2xl border border-gold-primary/20 p-8 text-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-transparent" />
                      <div className="relative z-10">
                        <metric.icon className="w-8 h-8 text-gold-primary mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gold-primary mb-2">{metric.value}</div>
                        <div className="font-medium mb-1">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="card-gradient rounded-xl border border-border p-6 text-center">
                  <p className="text-muted-foreground">
                    <span className="text-gold-primary font-medium">Key Insight:</span> The engine didn't just reduce errors—it fundamentally changed our hiring model. We avoided hiring 30+ additional Payroll Specialists as we scaled, converting what would have been linear operational costs into platform leverage.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground">
            Full lifecycle ownership: Discovery → Design → Build → Ship → Iterate
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPayroll;
