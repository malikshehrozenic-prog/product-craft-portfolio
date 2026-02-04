import { motion } from "framer-motion";
import { ArrowLeft, Globe, Database, Package, Layers, ChevronDown, Check, Zap, Shield, TrendingUp, Target, Building2, Scale, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CaseStudyBenefits = () => {
  const [animatedGPV, setAnimatedGPV] = useState(0);
  const [animatedCountries, setAnimatedCountries] = useState(0);
  const [animatedARR, setAnimatedARR] = useState(0);
  const [activeSection, setActiveSection] = useState("gap");

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

  const sections = [
    { id: "gap", label: "Strategic Gap", icon: Target },
    { id: "architecture", label: "Architecture", icon: Building2 },
    { id: "packaging", label: "Packaging", icon: Package },
    { id: "execution", label: "Execution", icon: Scale },
    { id: "impact", label: "Impact", icon: Rocket },
  ];

  const architectureLayers = [
    {
      layer: "Layer 1: Supply",
      name: "Providers",
      icon: Database,
      color: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      description: "Defined constraints for reconciliation frequency (Weekly/Monthly) and contract logic (EOR vs. Global)."
    },
    {
      layer: "Layer 2: Logic",
      name: "Plans",
      icon: Layers,
      color: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      description: "Granular offerings (Health, Pension) with embedded constraints (e.g., Age-banding pricing 0...20)."
    },
    {
      layer: "Layer 3: Product",
      name: "Packages",
      icon: Package,
      color: "bg-gold-primary/10",
      borderColor: "border-gold-primary/30",
      iconBg: "bg-gold-primary/20",
      iconColor: "text-gold-primary",
      description: "Customer-facing bundles tailored to local norms: Essential, Competitive, and Best-in-Class."
    }
  ];

  const pricingTiers = [
    { name: "Essential", price: "€280/mo", description: "Statutory minimums", subtitle: "The 'Compliance Safety Net'" },
    { name: "Competitive", price: "€450/mo", description: "Market standard", subtitle: "The primary conversion driver", recommended: true },
    { name: "Best-in-Class", price: "€680/mo", description: "Premium differentiation", subtitle: "The upsell lever" }
  ];

  const impactMetrics = [
    { value: "$3M", label: "New GPV Generated", sublabel: "Directly attributed to benefits packages", icon: TrendingUp, color: "from-emerald-500/20 to-emerald-600/10" },
    { value: "10%", label: "ARR Contribution", sublabel: "Increased retention (churn reduction)", icon: Zap, color: "from-purple-500/20 to-purple-600/10" },
    { value: "160", label: "Countries Live", sublabel: "Scaled from 5 countries in 12 months", icon: Globe, color: "from-blue-500/20 to-blue-600/10" }
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
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="container max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary text-sm font-medium mb-6 border border-gold-primary/20">
              Product Launch
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
              Scaling Trust: The{" "}
              <span className="text-gradient">Global Benefits Engine</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              From manual fragmentation to a $3M GPV revenue driver. How I architected 
              the localized benefits infrastructure for 160+ countries, driving a 10% ARR uplift.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: `$${animatedGPV.toFixed(0)}M`, label: "GPV Contribution", icon: TrendingUp },
                { value: `${animatedCountries}+`, label: "Markets Launched", icon: Globe },
                { value: `${animatedARR}%`, label: "ARR Uplift", icon: Zap },
                { value: "3-Tier", label: "Packaging Strategy", icon: Package }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="card-gradient rounded-2xl border border-border p-5 group hover:border-gold-primary/30 transition-colors"
                >
                  <metric.icon className="w-5 h-5 text-gold-primary mb-3" />
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="sticky top-[65px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-gold-primary/15 text-gold-primary border border-gold-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          
          {/* Strategic Gap */}
          {activeSection === "gap" && (
            <motion.div
              key="gap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <span className="text-2xl">01</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold">The Strategic Gap</h2>
                  <p className="text-muted-foreground">The Localization Paradox</p>
                </div>
              </div>

              <div className="card-gradient rounded-2xl border border-border p-8 md:p-10">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  As we scaled our Employer of Record (EOR) platform, we encountered a critical "Localization Paradox." 
                  Our customers wanted to hire globally in seconds, but retaining talent in markets like Brazil or Germany 
                  requires hyper-localized benefits that are notoriously complex to administer.
                </p>

                <p className="text-foreground font-semibold mb-6 text-lg">
                  We faced a binary choice that was stifling growth:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-red-500/5 rounded-2xl p-6 border border-red-500/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <span className="text-red-400 text-lg">✗</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-red-400">
                        The "Generic" Trap
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Offering a single global insurance policy that was expensive and legally irrelevant 
                      in local markets, leading to high churn.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-orange-500/5 rounded-2xl p-6 border border-orange-500/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-400 text-lg">⚠</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-orange-400">
                        The Ops Bottleneck
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Manually curating local vendors for every hire. This created linear operational costs 
                      for exponential user growth.
                    </p>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-gold-primary/10 to-gold-accent/5 rounded-2xl p-6 md:p-8 border border-gold-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-gold-primary mb-2">My Hypothesis</h4>
                      <p className="text-foreground text-lg leading-relaxed">
                        By decoupling the supply of benefits from the consumption via a modular architecture, 
                        we could turn compliance into a competitive moat and monetize the complexity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Architecture */}
          {activeSection === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <span className="text-2xl">02</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold">Systems Architecture</h2>
                  <p className="text-muted-foreground">The "Provider-Plan-Package" Model</p>
                </div>
              </div>

              <div className="card-gradient rounded-2xl border border-border p-8 md:p-10">
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  I led the design of a three-tiered relational schema to abstract complexity. 
                  This allowed us to scale from 5 to 160 countries without refactoring the codebase.
                </p>

                {/* Architecture Diagram */}
                <div className="space-y-4 mb-10">
                  {architectureLayers.map((layer, index) => (
                    <motion.div
                      key={layer.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                      <div className={`${layer.color} rounded-2xl p-6 border ${layer.borderColor}`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl ${layer.iconBg} flex items-center justify-center flex-shrink-0`}>
                            <layer.icon className={`w-6 h-6 ${layer.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground mb-1 font-medium">{layer.layer}</div>
                            <h3 className="font-display text-xl font-semibold mb-2">{layer.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                          </div>
                        </div>
                      </div>
                      {index < architectureLayers.length - 1 && (
                        <div className="flex justify-center py-2">
                          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Constraint Engine Callout */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-secondary/30 rounded-2xl p-6 md:p-8 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold mb-3">The "Constraint Engine"</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        The hardest part wasn't the database; it was mapping real-world chaos to code. 
                        For example, France has strict "Post-Enrollment Amendment Windows." I designed fields like{" "}
                        <code className="bg-background px-2 py-1 rounded text-gold-primary text-sm font-mono">
                          benefits_providers.post_enrollment_amendment_window_days
                        </code>{" "}
                        directly into the Provider schema. This automated compliance, preventing Ops from 
                        legally exposing us by accepting late changes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Packaging */}
          {activeSection === "packaging" && (
            <motion.div
              key="packaging"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-2xl">03</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold">Packaging & Monetization</h2>
                  <p className="text-muted-foreground">From "selling insurance" to "selling competitiveness"</p>
                </div>
              </div>

              <div className="card-gradient rounded-2xl border border-border p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Technical capabilities mean nothing without a Go-To-Market strategy. 
                      I pivoted our approach from "selling insurance" to "selling competitiveness."
                    </p>

                    <p className="text-foreground font-medium mb-6">
                      We utilized psychological pricing tiers to reduce decision fatigue for customers 
                      unfamiliar with local laws:
                    </p>

                    <div className="space-y-3">
                      {pricingTiers.map((tier, index) => (
                        <motion.div
                          key={tier.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border"
                        >
                          <Check className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-foreground">{tier.name}:</span>{" "}
                            <span className="text-muted-foreground">
                              {tier.description}. {tier.subtitle}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Package Selector Mockup */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-secondary/20 rounded-2xl p-6 border border-border"
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-3">
                        <Globe className="w-3 h-3" />
                        Interactive Preview
                      </div>
                      <h4 className="font-display text-xl font-semibold">Select Benefits Package</h4>
                      <p className="text-sm text-muted-foreground">Region: Germany</p>
                    </div>

                    <div className="space-y-3">
                      {pricingTiers.map((tier) => (
                        <div
                          key={tier.name}
                          className={`relative p-5 rounded-xl border-2 transition-all ${
                            tier.recommended
                              ? "border-gold-primary bg-gold-primary/10 shadow-lg shadow-gold-primary/10"
                              : "border-border hover:border-muted-foreground bg-background/50"
                          }`}
                        >
                          {tier.recommended && (
                            <span className="absolute -top-3 left-4 px-3 py-1 bg-gold-primary text-background text-xs font-bold rounded-full">
                              RECOMMENDED
                            </span>
                          )}
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-lg">{tier.name}</h5>
                              {tier.recommended && (
                                <p className="text-sm text-muted-foreground">+ Pension & Health</p>
                              )}
                            </div>
                            <span className={`font-bold text-lg ${tier.recommended ? "text-gold-primary" : "text-muted-foreground"}`}>
                              {tier.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Execution */}
          {activeSection === "execution" && (
            <motion.div
              key="execution"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <span className="text-2xl">04</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold">Execution & Trade-offs</h2>
                  <p className="text-muted-foreground">Strategic decisions that shaped the product</p>
                </div>
              </div>

              <div className="card-gradient rounded-2xl border border-border p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-red-500/5 rounded-2xl p-6 md:p-8 border border-red-500/20"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <span className="text-red-400 font-bold">⚠</span>
                      </div>
                      <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">The Trade-off</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-4">Flexibility vs. Automation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sales teams demanded custom benefits for every enterprise deal. However, allowing 
                      customization at the plan level would break our reconciliation engine and spike 
                      operational costs.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-emerald-500/5 rounded-2xl p-6 md:p-8 border border-emerald-500/20"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">The Decision</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-4">Productize, Don't Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I enforced the 3-tier strategy. We accepted losing highly bespoke deals in the short 
                      term to gain velocity. This allowed us to launch automated reconciliation 
                      ("Automated Dependents Filling"), reducing Ops headcount required per 1,000 users by 60%.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Impact */}
          {activeSection === "impact" && (
            <motion.div
              key="impact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gold-primary/10 border border-gold-primary/20">
                  <span className="text-2xl">05</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold">The Impact</h2>
                  <p className="text-muted-foreground">Transforming a cost center into a profit engine</p>
                </div>
              </div>

              <div className="card-gradient rounded-2xl border border-border p-8 md:p-10">
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                  This wasn't just a feature; it was a fundamental shift in our unit economics. 
                  By adding a "Benefits Support Fee" and localizing the offering, we turned a cost 
                  center into a profit engine.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {impactMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className={`bg-gradient-to-br ${metric.color} rounded-2xl p-8 border border-border text-center`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-background/50 flex items-center justify-center mx-auto mb-5">
                        <metric.icon className="w-7 h-7 text-gold-primary" />
                      </div>
                      <div className="font-display text-5xl font-bold text-foreground mb-3">
                        {metric.value}
                      </div>
                      <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-8">
              Full lifecycle ownership: Discovery → Design → Build → Ship → Iterate
            </p>
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-primary text-background font-semibold hover:bg-gold-primary/90 transition-all hover:scale-105"
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
