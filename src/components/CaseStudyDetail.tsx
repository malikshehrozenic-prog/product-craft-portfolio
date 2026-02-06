import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Quote, CheckCircle2, XCircle, Users, Scale, BarChart3, MessageSquare, Lightbulb, AlertTriangle } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="font-display text-2xl font-bold">{children}</h3>
  </div>
);

const CaseStudyDetail = ({ study, onBack }: CaseStudyDetailProps) => {
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
              <div className="h-px flex-1 bg-border/50" />
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
                <p className="text-foreground">{study.teamSize}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">My Role</p>
                <p className="text-foreground">{study.role}</p>
              </div>
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
          </motion.div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Tabs defaultValue="context" className="w-full">
            <TabsList className="w-full justify-start mb-12 bg-transparent border-b border-border/50 rounded-none p-0 h-auto flex-wrap gap-2">
              {[
                { value: "context", label: "Context" },
                { value: "approach", label: "Approach" },
                { value: "stakeholders", label: "Stakeholders" },
                { value: "tradeoffs", label: "Trade-offs" },
                { value: "results", label: "Results" },
                { value: "lessons", label: "Lessons" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-4 py-3 text-muted-foreground data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Context Tab */}
            <TabsContent value="context" className="space-y-12">
              {/* Problem */}
              <div>
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
              </div>

              {/* Discovery */}
              <div>
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
              </div>
            </TabsContent>

            {/* Approach Tab */}
            <TabsContent value="approach" className="space-y-12">
              <div>
                <SectionTitle icon={Scale}>Options Considered</SectionTitle>
                <div className="space-y-4">
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
              </div>

              <div>
                <SectionTitle icon={Lightbulb}>The Framing That Worked</SectionTitle>
                <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {study.approach.framing}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Stakeholders Tab */}
            <TabsContent value="stakeholders" className="space-y-6">
              <SectionTitle icon={Users}>Stakeholder Management</SectionTitle>
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
            </TabsContent>

            {/* Trade-offs Tab */}
            <TabsContent value="tradeoffs" className="space-y-6">
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
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" className="space-y-12">
              <div>
                <SectionTitle icon={BarChart3}>Quantitative Results</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.results.map((result, i) => (
                    <div 
                      key={i}
                      className="bg-card/50 rounded-xl p-6 border border-border/50 text-center"
                    >
                      <p className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: study.color }}>
                        {result.value}
                      </p>
                      <p className="text-sm font-medium text-foreground mb-1">{result.label}</p>
                      <p className="text-xs text-muted-foreground">{result.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle icon={MessageSquare}>Beyond the Numbers</SectionTitle>
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
            </TabsContent>

            {/* Lessons Tab */}
            <TabsContent value="lessons" className="space-y-12">
              <div>
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudyDetail;
