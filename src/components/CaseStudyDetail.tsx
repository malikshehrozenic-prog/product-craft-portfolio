import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2, XCircle, Users, Scale, BarChart3, MessageSquare, Lightbulb, AlertTriangle, Calculator, Clock, Target, Shield, Building } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import InfographicHero from "./InfographicHero";

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

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
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

    // Extract numeric part and suffix
    const numericMatch = value.match(/^([\d.]+)/);
    const suffix = value.replace(/^[\d.]+/, "");
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[1]);
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      
      const current = targetNum * eased;
      const formatted = Number.isInteger(targetNum) 
        ? Math.round(current).toString()
        : current.toFixed(1);
      
      setDisplayValue(formatted + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate reading time
  const wordCount = JSON.stringify(study).split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
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
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="text-sm font-mono tracking-wider"
                style={{ color: study.color }}
              >
                CASE STUDY {study.number}
              </span>
              {/* Company badge */}
              <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md bg-muted/60 text-muted-foreground border border-border/30">
                <Building className="w-3 h-3" />
                {study.company}
              </span>
              <div className="h-px flex-1 bg-border/50" />
              {/* Reading time */}
              <span className="text-xs text-muted-foreground font-mono">~{readingTime} min read</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              {study.title}
            </h1>
            
            <p 
              className="text-xl md:text-2xl font-medium mb-6"
              style={{ color: study.color }}
            >
              {study.subtitle}
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {study.oneLiner}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border/50">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
                <p className="font-display text-lg font-bold" style={{ color: study.color }}>{study.impact}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Team</p>
                <p className="text-foreground text-sm">{study.teamSize}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">My Role</p>
                <p className="text-foreground text-sm">{study.role}</p>
              </div>
              {study.timeline && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Timeline</p>
                  <p className="text-foreground text-sm font-mono">{study.timeline}</p>
                </div>
              )}
              {study.scope && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Scope</p>
                  <p className="text-foreground text-sm">{study.scope}</p>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/60 text-secondary-foreground border border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Infographic Hero */}
            <InfographicHero caseStudy={study} />
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            {/* Sticky Sidebar - Desktop only */}
            <nav className="hidden lg:block">
              <div className="sticky top-24 space-y-1">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Content */}
            <div className="space-y-20">
              {/* 1. The Problem */}
              <section id="problem">
                <SectionTitle icon={AlertTriangle}>The Problem</SectionTitle>
                <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                  <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                    {study.problem.text}
                  </p>
                  <div className="flex items-baseline gap-4 pt-6 border-t border-border/30">
                    <span className="font-display text-5xl font-bold" style={{ color: study.color }}>
                      {study.problem.stat}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {study.problem.statLabel}
                    </span>
                  </div>
                </div>

                {/* Opportunity Sizing */}
                {study.opportunitySizing && (
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="w-5 h-5 text-primary" />
                      <h4 className="font-display text-lg font-medium">Opportunity Sizing</h4>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 font-mono text-sm leading-relaxed text-foreground/90">
                      {study.opportunitySizing}
                    </div>
                  </div>
                )}
              </section>

              {/* 2. Discovery */}
              <section id="discovery">
                <SectionTitle icon={MessageSquare}>Discovery</SectionTitle>
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  {study.discovery.quotes.map((quote, i) => (
                    <div 
                      key={i}
                      className="bg-card/50 rounded-2xl p-6 border border-border/50 relative"
                    >
                      <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                      <p className="text-foreground/90 italic mb-4 leading-relaxed">
                        "{quote.text}"
                      </p>
                      <p className="text-sm font-medium text-primary">— {quote.who}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Key Insight</p>
                      <p className="text-foreground/90 leading-relaxed">{study.discovery.insight}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Approach - Decision Framework */}
              <section id="approach">
                <SectionTitle icon={Scale}>Approach — Decision Framework</SectionTitle>
                <div className="space-y-4 mb-8">
                  {study.approach.options.map((option, i) => (
                    <div 
                      key={i}
                      className={`rounded-xl p-6 border transition-all ${
                        option.chosen 
                          ? 'bg-primary/5 border-primary/30' 
                          : 'bg-card/50 border-border/50'
                      }`}
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
                              <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                                Chosen
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground">{option.assessment}</p>
                        </div>
                      </div>
                    </div>
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
              </section>

              {/* 4. Stakeholder Navigation */}
              <section id="stakeholders">
                <SectionTitle icon={Users}>Stakeholder Navigation</SectionTitle>
                
                {/* Stakeholder narrative */}
                {study.stakeholderNarrative && (
                  <div className="bg-muted/30 rounded-xl p-6 border border-border/50 mb-8">
                    <p className="text-foreground/90 leading-relaxed italic">
                      {study.stakeholderNarrative}
                    </p>
                  </div>
                )}

                <div className="grid gap-4">
                  {study.stakeholders.map((stakeholder, i) => (
                    <div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50"
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
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Metric Architecture */}
              {study.metricArchitecture && (
                <section id="metrics">
                  <SectionTitle icon={Target}>Metric Architecture</SectionTitle>
                  <p className="text-muted-foreground mb-8">
                    I don't just track metrics — I design measurement systems. Every product gets three tiers of metrics that work together.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Input Metric */}
                    <div className="bg-card/50 rounded-xl p-6 border border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Input Metric</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">— what we're measuring</p>
                      <h4 className="font-display text-lg font-bold text-foreground mb-4">{study.metricArchitecture.input.name}</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-muted-foreground">Baseline:</span> <span className="font-mono text-foreground">{study.metricArchitecture.input.baseline}</span></p>
                        <p><span className="text-muted-foreground">Target:</span> <span className="font-mono text-primary">{study.metricArchitecture.input.target}</span></p>
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground">{study.metricArchitecture.input.why}</p>
                    </div>

                    {/* Output Metric */}
                    <div className="bg-card/50 rounded-xl p-6 border border-primary/30">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs uppercase tracking-wider text-primary">Output Metric</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">— what we're optimizing</p>
                      <h4 className="font-display text-lg font-bold text-foreground mb-4">{study.metricArchitecture.output.name}</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-muted-foreground">Baseline:</span> <span className="font-mono text-foreground">{study.metricArchitecture.output.baseline}</span></p>
                        <p><span className="text-muted-foreground">Target:</span> <span className="font-mono text-primary">{study.metricArchitecture.output.target}</span></p>
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground">{study.metricArchitecture.output.why}</p>
                    </div>

                    {/* Guardrail Metric */}
                    <div className="bg-card/50 rounded-xl p-6 border border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Guardrail Metric</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">— what failure mode we're watching</p>
                      <h4 className="font-display text-lg font-bold text-foreground mb-4">{study.metricArchitecture.guardrail.name}</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-muted-foreground">Baseline:</span> <span className="font-mono text-foreground">{study.metricArchitecture.guardrail.baseline}</span></p>
                        <p><span className="text-muted-foreground">Target:</span> <span className="font-mono text-primary">{study.metricArchitecture.guardrail.target}</span></p>
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground">{study.metricArchitecture.guardrail.why}</p>
                    </div>
                  </div>
                </section>
              )}

              {/* 6. Trade-offs */}
              <section id="tradeoffs">
                <SectionTitle icon={Scale}>Key Trade-offs</SectionTitle>
                <div className="grid gap-4">
                  {study.tradeoffs.map((tradeoff, i) => (
                    <div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50"
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
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. Results */}
              <section id="results">
                <SectionTitle icon={BarChart3}>Results</SectionTitle>
                
                {/* Quantitative */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {study.results.map((result, i) => (
                    <div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50 text-center"
                    >
                      <AnimatedCounter value={result.value} color={study.color} />
                      <p className="text-sm font-medium text-foreground mt-2 mb-1">{result.label}</p>
                      <p className="text-xs text-muted-foreground">{result.change}</p>
                    </div>
                  ))}
                </div>

                {/* Qualitative - Beyond the Numbers */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h4 className="font-display text-xl font-medium">Beyond the Numbers</h4>
                  </div>
                  <div className="space-y-3">
                    {study.qualitative.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 bg-card/50 rounded-xl p-4 border border-border/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 8. Honest Reflection */}
              <section id="reflection">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">What Worked</h3>
                  </div>
                  <div className="space-y-4">
                    {study.lessons.worked.map((lesson, i) => (
                      <div 
                        key={i}
                        className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/20"
                      >
                        <h4 className="font-display font-bold text-emerald-400 mb-2">{lesson.title}</h4>
                        <p className="text-foreground/90 leading-relaxed">{lesson.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">What I'd Do Differently</h3>
                  </div>
                  <div className="space-y-4">
                    {study.lessons.different.map((lesson, i) => (
                      <div 
                        key={i}
                        className="bg-amber-500/5 rounded-xl p-6 border border-amber-500/20"
                      >
                        <h4 className="font-display font-bold text-amber-400 mb-2">{lesson.title}</h4>
                        <p className="text-foreground/90 leading-relaxed">{lesson.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section Divider */}
              <div className="flex items-center gap-4 py-8">
                <div className="h-px flex-1 bg-border/30" />
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <div className="h-px flex-1 bg-border/30" />
              </div>

              {/* Next Case Study */}
              {nextStudy && onNext && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={onNext}
                    className="w-full group flex items-center justify-between p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="text-left">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">Next Case Study</span>
                      <h3 className="font-display text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {nextStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body line-clamp-1">{nextStudy.subtitle}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </button>
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
