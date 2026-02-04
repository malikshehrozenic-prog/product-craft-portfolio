import { motion } from "framer-motion";
import { ArrowLeft, Globe, Database, Package, Layers, ChevronDown, Check, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudyBenefits = () => {
  const [animatedGPV, setAnimatedGPV] = useState(0);
  const [animatedCountries, setAnimatedCountries] = useState(0);
  const [animatedARR, setAnimatedARR] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedGPV(eased * 3);
      setAnimatedCountries(Math.floor(eased * 160));
      setAnimatedARR(Math.floor(eased * 10));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, []);

  const architectureLayers = [
    {
      layer: "Layer 1: Supply",
      name: "Providers",
      icon: Database,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      description: "Defined constraints for reconciliation frequency (Weekly/Monthly) and contract logic (EOR vs. Global)."
    },
    {
      layer: "Layer 2: Logic",
      name: "Plans",
      icon: Layers,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      description: "Granular offerings (Health, Pension) with embedded constraints (e.g., Age-banding pricing 0...20)."
    },
    {
      layer: "Layer 3: Product",
      name: "Packages",
      icon: Package,
      color: "from-gold-primary/20 to-gold-accent/20",
      borderColor: "border-gold-primary/30",
      description: "Customer-facing bundles tailored to local norms: Essential, Competitive, and Best-in-Class."
    }
  ];

  const pricingTiers = [
    { name: "Essential", description: "Statutory minimums", subtitle: "The 'Compliance Safety Net'" },
    { name: "Competitive", description: "Market standard", subtitle: "The primary conversion driver", recommended: true },
    { name: "Best-in-Class", description: "Premium differentiation", subtitle: "The upsell lever" }
  ];

  const impactMetrics = [
    { value: "$3M", label: "New GPV Generated", sublabel: "Directly attributed to benefits packages", icon: TrendingUp },
    { value: "10%", label: "ARR Contribution", sublabel: "Increased retention (churn reduction)", icon: Zap },
    { value: "160", label: "Countries Live", sublabel: "Scaled from 5 countries in 12 months", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary text-sm font-medium mb-6 border border-gold-primary/20">
              Product Launch
            </span>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Scaling Trust: The{" "}
              <span className="text-gradient">Global Benefits Engine</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              From manual fragmentation to a $3M GPV revenue driver. How I architected 
              the localized benefits infrastructure for 160+ countries, driving a 10% ARR uplift.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: `$${animatedGPV.toFixed(0)}M`, label: "GPV Contribution" },
                { value: `${animatedCountries}+`, label: "Markets Launched" },
                { value: `${animatedARR}%`, label: "ARR Uplift" },
                { value: "3-Tier", label: "Packaging Strategy" }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="card-gradient rounded-xl border border-border p-4 text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-gold-primary">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <Tabs defaultValue="gap" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-secondary/50 p-1 rounded-lg overflow-x-auto flex-nowrap">
              <TabsTrigger value="gap" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Strategic Gap
              </TabsTrigger>
              <TabsTrigger value="architecture" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Architecture
              </TabsTrigger>
              <TabsTrigger value="packaging" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Packaging
              </TabsTrigger>
              <TabsTrigger value="execution" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Execution
              </TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-gold-primary/20 data-[state=active]:text-gold-primary">
                Impact
              </TabsTrigger>
            </TabsList>

            {/* Strategic Gap Tab */}
            <TabsContent value="gap">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="card-gradient rounded-2xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">The Strategic Gap</h2>
                      <p className="text-muted-foreground">The Localization Paradox</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    As we scaled our Employer of Record (EOR) platform, we encountered a critical "Localization Paradox." 
                    Our customers wanted to hire globally in seconds, but retaining talent in markets like Brazil or Germany 
                    requires hyper-localized benefits that are notoriously complex to administer.
                  </p>

                  <p className="text-foreground font-medium mb-6">
                    We faced a binary choice that was stifling growth:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                      <h3 className="font-display text-xl font-semibold mb-3 text-red-400">
                        The "Generic" Trap
                      </h3>
                      <p className="text-muted-foreground">
                        Offering a single global insurance policy that was expensive and legally irrelevant 
                        in local markets, leading to high churn.
                      </p>
                    </div>
                    <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/20">
                      <h3 className="font-display text-xl font-semibold mb-3 text-orange-400">
                        The Ops Bottleneck
                      </h3>
                      <p className="text-muted-foreground">
                        Manually curating local vendors for every hire. This created linear operational costs 
                        for exponential user growth.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gold-primary/10 rounded-xl p-6 border border-gold-primary/20">
                    <p className="text-lg">
                      <span className="font-semibold text-gold-primary">My Hypothesis:</span>{" "}
                      <span className="text-foreground">
                        By decoupling the supply of benefits from the consumption via a modular architecture, 
                        we could turn compliance into a competitive moat and monetize the complexity.
                      </span>
                    </p>
                  </div>
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
                <div className="card-gradient rounded-2xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
                      🏗️
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">Systems Architecture</h2>
                      <p className="text-muted-foreground">The "Provider-Plan-Package" Model</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    I led the design of a three-tiered relational schema to abstract complexity. 
                    This allowed us to scale from 5 to 160 countries without refactoring the codebase.
                  </p>

                  {/* Architecture Diagram */}
                  <div className="space-y-4 mb-8">
                    {architectureLayers.map((layer, index) => (
                      <motion.div
                        key={layer.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className={`bg-gradient-to-r ${layer.color} rounded-xl p-6 border ${layer.borderColor}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
                            <layer.icon className="w-5 h-5 text-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground mb-1">{layer.layer}</div>
                            <h3 className="font-display text-xl font-semibold mb-2">{layer.name}</h3>
                            <p className="text-muted-foreground">{layer.description}</p>
                          </div>
                        </div>
                        {index < architectureLayers.length - 1 && (
                          <div className="flex justify-center mt-4">
                            <ChevronDown className="w-6 h-6 text-muted-foreground" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Constraint Engine Callout */}
                  <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-gold-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-2">The "Constraint Engine"</h4>
                        <p className="text-muted-foreground">
                          The hardest part wasn't the database; it was mapping real-world chaos to code. 
                          For example, France has strict "Post-Enrollment Amendment Windows." I designed fields like{" "}
                          <code className="bg-background px-2 py-1 rounded text-gold-primary text-sm">
                            benefits_providers.post_enrollment_amendment_window_days
                          </code>{" "}
                          directly into the Provider schema. This automated compliance, preventing Ops from 
                          legally exposing us by accepting late changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Packaging Tab */}
            <TabsContent value="packaging">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="card-gradient rounded-2xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                      💰
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">Packaging & Monetization Strategy</h2>
                      <p className="text-muted-foreground">From "selling insurance" to "selling competitiveness"</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        Technical capabilities mean nothing without a Go-To-Market strategy. 
                        I pivoted our approach from "selling insurance" to "selling competitiveness."
                      </p>

                      <p className="text-foreground mb-4">
                        We utilized psychological pricing tiers to reduce decision fatigue for customers 
                        unfamiliar with local laws:
                      </p>

                      <div className="space-y-3">
                        {pricingTiers.map((tier, index) => (
                          <div
                            key={tier.name}
                            className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                          >
                            <Check className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-foreground">{tier.name}:</span>{" "}
                              <span className="text-muted-foreground">
                                {tier.description}. {tier.subtitle}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Package Selector Mockup */}
                    <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                      <div className="text-center mb-4">
                        <h4 className="font-display text-lg font-semibold">Select Benefits Package</h4>
                        <p className="text-sm text-muted-foreground">Region: Germany</p>
                      </div>

                      <div className="space-y-3">
                        {pricingTiers.map((tier, index) => (
                          <div
                            key={tier.name}
                            className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                              tier.recommended
                                ? "border-gold-primary bg-gold-primary/10"
                                : "border-border hover:border-muted-foreground"
                            }`}
                          >
                            {tier.recommended && (
                              <span className="absolute -top-3 left-4 px-2 py-1 bg-gold-primary text-background text-xs font-semibold rounded">
                                RECOMMENDED
                              </span>
                            )}
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-semibold">{tier.name}</h5>
                                {tier.recommended && (
                                  <p className="text-sm text-muted-foreground">+ Pension & Health</p>
                                )}
                              </div>
                              {tier.recommended && (
                                <span className="text-gold-primary font-bold">€450/mo</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                <div className="card-gradient rounded-2xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                      ⚖️
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">Execution & Trade-offs</h2>
                      <p className="text-muted-foreground">Strategic decisions that shaped the product</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                          <span className="text-red-400">⚠️</span>
                        </div>
                        <span className="text-sm font-medium text-red-400">The Trade-off</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">Flexibility vs. Automation</h3>
                      <p className="text-muted-foreground">
                        Sales teams demanded custom benefits for every enterprise deal. However, allowing 
                        customization at the plan level would break our reconciliation engine and spike 
                        operational costs.
                      </p>
                    </div>

                    <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-emerald-400">✓</span>
                        </div>
                        <span className="text-sm font-medium text-emerald-400">The Decision</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">Productize, Don't Service</h3>
                      <p className="text-muted-foreground">
                        I enforced the 3-tier strategy. We accepted losing highly bespoke deals in the short 
                        term to gain velocity. This allowed us to launch automated reconciliation 
                        ("Automated Dependents Filling"), reducing Ops headcount required per 1,000 users by 60%.
                      </p>
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
                <div className="card-gradient rounded-2xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-primary/20 flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">The Impact</h2>
                      <p className="text-muted-foreground">Transforming a cost center into a profit engine</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    This wasn't just a feature; it was a fundamental shift in our unit economics. 
                    By adding a "Benefits Support Fee" and localizing the offering, we turned a cost 
                    center into a profit engine.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {impactMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gold-primary/10 to-gold-accent/5 rounded-xl p-6 border border-gold-primary/20 text-center"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gold-primary/20 flex items-center justify-center mx-auto mb-4">
                          <metric.icon className="w-6 h-6 text-gold-primary" />
                        </div>
                        <div className="font-display text-4xl font-bold text-gold-primary mb-2">
                          {metric.value}
                        </div>
                        <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              Full lifecycle ownership: Discovery → Design → Build → Ship → Iterate
            </p>
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-primary text-background font-semibold hover:bg-gold-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyBenefits;
