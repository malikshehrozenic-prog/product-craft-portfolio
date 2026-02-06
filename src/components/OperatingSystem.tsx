import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PHILOSOPHY, CAREER_ARC, EDUCATION, TECH_STACK } from "@/data/philosophy";

interface OperatingSystemProps {
  onCaseSelect: (id: string) => void;
}

const OperatingSystem = ({ onCaseSelect }: OperatingSystemProps) => {
  const [activeTab, setActiveTab] = useState("strategy");
  const current = PHILOSOPHY.find(p => p.id === activeTab) || PHILOSOPHY[0];

  return (
    <section id="operating-system" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              How I Work
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Operating System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Not frameworks for frameworks' sake. Principles tested across 11 years, 4 companies, and 5 product areas.
          </p>
        </motion.div>

        {/* Tabs + Content */}
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          {/* Tab buttons */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {PHILOSOPHY.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === p.id
                    ? 'bg-primary/10 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card/50 rounded-2xl p-8 border border-border/50"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">{current.title}</h3>
            
            <div className="space-y-6 mb-8">
              {current.items.map((item, i) => (
                <div key={i}>
                  <h4 className="font-display font-bold text-primary mb-2">{item.heading}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-3">{current.evidence}</p>
              <button
                onClick={() => onCaseSelect(current.caseLink)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium group"
              >
                Read the case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Career Arc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="font-display text-3xl font-bold mb-8">Career Arc</h3>
          <div className="space-y-4">
            {CAREER_ARC.map((c, i) => (
              <div key={i} className="bg-card/50 rounded-xl p-6 border border-border/50 grid md:grid-cols-[140px_1fr] gap-4">
                <div>
                  <p className="text-primary font-mono text-sm">{c.period}</p>
                  <p className="text-xs text-muted-foreground">{c.location}</p>
                </div>
                <div>
                  <p className="font-display font-bold">{c.company}</p>
                  <p className="text-sm text-primary mb-2">{c.role}</p>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Education & Tech */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-display font-bold text-primary mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">{EDUCATION}</p>
            </div>
            <div className="bg-card/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-display font-bold text-primary mb-2">Technical Stack</h4>
              <p className="text-sm text-muted-foreground">{TECH_STACK}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperatingSystem;
