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
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-transparent to-muted/10 pointer-events-none" />
      
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
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
              My Operating System
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-4">
            How I think about product work.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            Five principles, each forged in real decisions. Not frameworks I read about — patterns I've found myself returning to across 12 years and 4 companies.
          </p>
        </motion.div>

        {/* Tabs + Content */}
        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          {/* Tab buttons */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {PHILOSOPHY.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-3 rounded-lg text-left text-sm font-body font-medium transition-all whitespace-nowrap ${
                  activeTab === p.id
                    ? 'bg-primary/10 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
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
            className="bg-card/50 rounded-xl p-6 md:p-8 border border-border/50"
          >
            <h3 className="font-display text-2xl md:text-3xl font-normal mb-8">{current.title}</h3>
            
            <div className="space-y-6 mb-8">
              {current.items.map((item, i) => (
                <div key={i}>
                  <h4 className="font-display text-lg font-medium text-primary mb-2">{item.heading}</h4>
                  <p className="text-muted-foreground leading-relaxed font-body text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-3 font-body italic">{current.evidence}</p>
              <button
                onClick={() => onCaseSelect(current.caseLink)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium group font-body"
              >
                Read the case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Education & Tech */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 rounded-lg p-5 border border-border/50">
              <h4 className="font-display text-lg font-medium text-primary mb-2">Education</h4>
              <p className="text-sm text-muted-foreground font-body">{EDUCATION}</p>
            </div>
            <div className="bg-card/50 rounded-lg p-5 border border-border/50">
              <h4 className="font-display text-lg font-medium text-primary mb-2">Technical Stack</h4>
              <p className="text-sm text-muted-foreground font-body">{TECH_STACK}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperatingSystem;
