import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2, XCircle, Users, Scale, BarChart3, MessageSquare, Lightbulb, AlertTriangle, Calculator, Clock, Target, Shield, Building } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

// Static infographic images for each case study
import pricingIntelligenceImg from "@/assets/case-study-pricing-intelligence.jpg";
import benefitsEngineImg from "@/assets/case-study-benefits-engine.jpg";
import wageRiskImg from "@/assets/case-study-wage-risk.jpg";
import expenseIntelligenceImg from "@/assets/case-study-expense-intelligence.jpg";
import mobileWalletImg from "@/assets/case-study-mobile-wallet.jpg";
import eRequisitionImg from "@/assets/case-study-e-requisition.jpg";
import CustomCursor from "./CustomCursor";

const INFOGRAPHIC_MAP: Record<string, string> = {
  "pricing-intelligence": pricingIntelligenceImg,
  "benefits-engine": benefitsEngineImg,
  "wage-risk": wageRiskImg,
  "expense-intelligence": expenseIntelligenceImg,
  "mobile-wallet": mobileWalletImg,
  "e-requisition": eRequisitionImg,
};

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
  onNext?: () => void;
  nextStudy?: CaseStudy | null;
}

const SECTIONS = [
  { id: "problem", label: "The Problem" },
  { id: "discovery", label: "Discovery" },
  { id: "approach", label: "Approach" },
  { id: "stakeholders", label: "Stakeholders" },
  { id: "metrics", label: "Metrics" },
  { id: "tradeoffs", label: "Trade-offs" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
];

// Animated section wrapper
const AnimatedSection = ({ children, id, delay = 0 }: { children: React.ReactNode; id?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.section>
  );
};

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) => (
  <div className="flex items-center gap-3 mb-6">
    <motion.div
      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
      whileHover={{ rotate: 10, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon className="w-5 h-5 text-primary" />
    </motion.div>
    <h3 className="font-display text-2xl font-medium">{children}</h3>
  </div>
);

// Animated counter for results
const AnimatedCounter = ({ value, color }: { value: string; color: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericMatch = value.match(/^([\d.]+)/);
    const suffix = value.replace(/^[\d.]+/, "");
    if (!numericMatch) { setDisplayValue(value); return; }

    const targetNum = parseFloat(numericMatch[1]);
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;
      const formatted = Number.isInteger(targetNum) ? Math.round(current).toString() : current.toFixed(1);
      setDisplayValue(formatted + suffix);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayValue(value);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold" style={{ color }}>
      {displayValue}
    </span>
  );
};

const CaseStudyDetail = ({ study, onBack, onNext, nextStudy }: CaseStudyDetailProps) => {
  const [activeSection, setActiveSection] = useState("problem");

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const wordCount = JSON.stringify(study).split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-transparent pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto relative">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.span 
                className="text-sm font-mono tracking-wider"
                style={{ color: study.color }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                CASE STUDY {study.number}
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md bg-muted/60 text-muted-foreground border border-border/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Building className="w-3 h-3" />
                {study.company}
              </motion.span>
              <div className="h-px flex-1 bg-border/50" />
              <motion.span
                className="text-xs text-muted-foreground font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ~{readingTime} min read
              </motion.span>
            </div>
            
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {study.title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-medium mb-6"
              style={{ color: study.color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {study.subtitle}
            </motion.p>
            
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {study.oneLiner}
            </motion.p>

            {/* Meta info with staggered entrance */}
            <motion.div
              className="flex flex-wrap gap-6 pt-6 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { label: "Impact", value: study.impact, isHighlight: true },
                { label: "Team", value: study.teamSize },
                { label: "My Role", value: study.role },
                ...(study.timeline ? [{ label: "Timeline", value: study.timeline, isMono: true }] : []),
                ...(study.scope ? [{ label: "Scope", value: study.scope }] : []),
              ].map((meta, i) => (
                <motion.div
                  key={meta.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{meta.label}</p>
                  <p className={`text-sm ${(meta as any).isHighlight ? "font-display text-lg font-bold" : "text-foreground"} ${(meta as any).isMono ? "font-mono" : ""}`}
                     style={(meta as any).isHighlight ? { color: study.color } : undefined}
                  >
                    {meta.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {study.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/60 text-secondary-foreground border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.04 }}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.4)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Infographic Hero Image */}
          {INFOGRAPHIC_MAP[study.id] && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12"
            >
              <motion.div
                className="rounded-2xl overflow-hidden border border-border/50 shadow-xl"
                whileHover={{ scale: 1.005 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={INFOGRAPHIC_MAP[study.id]}
                  alt={`${study.title} - Visual Summary`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                Visual summary · Key metrics at a glance
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            {/* Sticky Sidebar */}
            <nav className="hidden lg:block">
              <div className="sticky top-24 space-y-1">
                {SECTIONS.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors relative ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="activeSidebarIndicator"
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Content */}
            <div className="space-y-20">
              {/* 1. The Problem */}
              <AnimatedSection id="problem">
                <SectionTitle icon={AlertTriangle}>The Problem</SectionTitle>
                <motion.div
                  className="bg-card/50 rounded-2xl p-8 border border-border/50"
                  whileHover={{ borderColor: "hsl(var(--border-hover))" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                    {study.problem.text}
                  </p>
                  <div className="flex items-baseline gap-4 pt-6 border-t border-border/30">
                    <motion.span
                      className="font-display text-5xl font-bold"
                      style={{ color: study.color }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {study.problem.stat}
                    </motion.span>
                    <span className="text-muted-foreground text-lg">
                      {study.problem.statLabel}
                    </span>
                  </div>
                </motion.div>

                {study.opportunitySizing && (
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="w-5 h-5 text-primary" />
                      <h4 className="font-display text-lg font-medium">Opportunity Sizing</h4>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 font-mono text-sm leading-relaxed text-foreground/90">
                      {study.opportunitySizing}
                    </div>
                  </motion.div>
                )}
              </AnimatedSection>

              {/* 2. Discovery */}
              <AnimatedSection id="discovery">
                <SectionTitle icon={MessageSquare}>Discovery</SectionTitle>
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  {study.discovery.quotes.map((quote, i) => (
                    <motion.div 
                      key={i}
                      className="bg-card/50 rounded-2xl p-6 border border-border/50 relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ borderColor: "hsl(var(--primary) / 0.3)", y: -2 }}
                    >
                      <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                      <p className="text-foreground/90 italic mb-4 leading-relaxed">
                        "{quote.text}"
                      </p>
                      <p className="text-sm font-medium text-primary">— {quote.who}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="bg-primary/5 rounded-2xl p-6 border border-primary/20"
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Key Insight</p>
                      <p className="text-foreground/90 leading-relaxed">{study.discovery.insight}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* 3. Approach */}
              <AnimatedSection id="approach">
                <SectionTitle icon={Scale}>Approach — Decision Framework</SectionTitle>
                <div className="space-y-4 mb-8">
                  {study.approach.options.map((option, i) => (
                    <motion.div 
                      key={i}
                      className={`rounded-xl p-6 border transition-all ${
                        option.chosen 
                          ? 'bg-primary/5 border-primary/30' 
                          : 'bg-card/50 border-border/50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start gap-4">
                        {option.chosen ? (
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        ) : (
                          <XCircle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-display text-lg font-bold">{option.name}</h4>
                            {option.chosen && (
                              <motion.span
                                className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.3 }}
                              >
                                Chosen
                              </motion.span>
                            )}
                          </div>
                          <p className="text-muted-foreground">{option.assessment}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h4 className="font-display text-lg font-medium">The Framing That Worked</h4>
                  </div>
                  <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {study.approach.framing}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* 4. Stakeholder Navigation */}
              <AnimatedSection id="stakeholders">
                <SectionTitle icon={Users}>Stakeholder Navigation</SectionTitle>
                
                {study.stakeholderNarrative && (
                  <motion.div
                    className="bg-muted/30 rounded-xl p-6 border border-border/50 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-foreground/90 leading-relaxed italic">
                      {study.stakeholderNarrative}
                    </p>
                  </motion.div>
                )}

                <div className="grid gap-4">
                  {study.stakeholders.map((stakeholder, i) => (
                    <motion.div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ borderColor: "hsl(var(--primary) / 0.2)" }}
                    >
                      <div className="grid md:grid-cols-[200px_1fr_1fr] gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Role</p>
                          <p className="font-display font-bold text-primary">{stakeholder.role}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Their Concern</p>
                          <p className="text-foreground/90">{stakeholder.concern}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">How I Managed It</p>
                          <p className="text-foreground/90">{stakeholder.mitigation}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* 5. Metric Architecture */}
              {study.metricArchitecture && (
                <AnimatedSection id="metrics">
                  <SectionTitle icon={Target}>Metric Architecture</SectionTitle>
                  <p className="text-muted-foreground mb-8">
                    I don't just track metrics — I design measurement systems. Every product gets three tiers of metrics that work together.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { data: study.metricArchitecture.input, label: "Input Metric", color: "rgb(59 130 246)", dotClass: "bg-blue-500" },
                      { data: study.metricArchitecture.output, label: "Output Metric", color: "hsl(var(--primary))", dotClass: "bg-primary", highlight: true },
                      { data: study.metricArchitecture.guardrail, label: "Guardrail Metric", color: "rgb(245 158 11)", dotClass: "bg-amber-500" },
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        className={`bg-card/50 rounded-xl p-6 border ${metric.highlight ? "border-primary/30" : "border-border/50"}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.4)" }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-2 h-2 rounded-full ${metric.dotClass}`} />
                          <span className={`text-xs uppercase tracking-wider ${metric.highlight ? "text-primary" : "text-muted-foreground"}`}>
                            {metric.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-2">— what {metric.highlight ? "we're optimizing" : i === 0 ? "we're measuring" : "failure mode we're watching"}</p>
                        <h4 className="font-display text-lg font-bold text-foreground mb-4">{metric.data.name}</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-muted-foreground">Baseline:</span> <span className="font-mono text-foreground">{metric.data.baseline}</span></p>
                          <p><span className="text-muted-foreground">Target:</span> <span className="font-mono text-primary">{metric.data.target}</span></p>
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground">{metric.data.why}</p>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* 6. Trade-offs */}
              <AnimatedSection id="tradeoffs">
                <SectionTitle icon={Scale}>Key Trade-offs</SectionTitle>
                <div className="grid gap-4">
                  {study.tradeoffs.map((tradeoff, i) => (
                    <motion.div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ x: 4, borderColor: "hsl(var(--primary) / 0.2)" }}
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Decision</p>
                          <p className="font-display font-bold" style={{ color: study.color }}>{tradeoff.decision}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Tension</p>
                          <p className="text-foreground/90">{tradeoff.tension}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Rationale</p>
                          <p className="text-foreground/90">{tradeoff.rationale}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* 7. Results */}
              <AnimatedSection id="results">
                <SectionTitle icon={BarChart3}>Results</SectionTitle>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {study.results.map((result, i) => (
                    <motion.div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
                    >
                      <AnimatedCounter value={result.value} color={study.color} />
                      <p className="text-sm font-medium text-foreground mt-2 mb-1">{result.label}</p>
                      <p className="text-xs text-muted-foreground">{result.change}</p>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h4 className="font-display text-xl font-medium">Beyond the Numbers</h4>
                  </div>
                  <div className="space-y-3">
                    {study.qualitative.map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-start gap-3 bg-card/50 rounded-xl p-4 border border-border/50"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.2, type: "spring" }}
                        />
                        <p className="text-foreground/90">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* 8. Honest Reflection */}
              <AnimatedSection id="reflection">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold">What Worked</h3>
                  </div>
                  <div className="space-y-4">
                    {study.lessons.worked.map((lesson, i) => (
                      <motion.div 
                        key={i}
                        className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/20"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ borderColor: "rgb(52 211 153 / 0.4)" }}
                      >
                        <h4 className="font-display font-bold text-emerald-400 mb-2">{lesson.title}</h4>
                        <p className="text-foreground/90 leading-relaxed">{lesson.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                    >
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold">What I'd Do Differently</h3>
                  </div>
                  <div className="space-y-4">
                    {study.lessons.different.map((lesson, i) => (
                      <motion.div 
                        key={i}
                        className="bg-amber-500/5 rounded-xl p-6 border border-amber-500/20"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ borderColor: "rgb(245 158 11 / 0.4)" }}
                      >
                        <h4 className="font-display font-bold text-amber-400 mb-2">{lesson.title}</h4>
                        <p className="text-foreground/90 leading-relaxed">{lesson.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Section Divider */}
              <div className="flex items-center gap-4 py-8">
                <div className="h-px flex-1 bg-border/30" />
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary/50"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="h-px flex-1 bg-border/30" />
              </div>

              {/* Next Case Study */}
              {nextStudy && onNext && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={onNext}
                    className="w-full group flex items-center justify-between p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-left">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">Next Case Study</span>
                      <h3 className="font-display text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {nextStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body line-clamp-1">{nextStudy.subtitle}</p>
                    </div>
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudyDetail;
