import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Globe, Workflow, FileText, Shield } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "wage-risk": TrendingUp,
  "benefits-engine": Globe,
  "expense-intelligence": Workflow,
  "e-requisition": FileText,
  "payroll-governance": Shield,
};

const CaseStudyCard = ({ 
  study, 
  index, 
  onSelect 
}: { 
  study: CaseStudy; 
  index: number;
  onSelect: (id: string) => void;
}) => {
  const Icon = iconMap[study.id] || TrendingUp;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={index === 0 ? "md:col-span-2" : ""}
    >
      <button
        onClick={() => onSelect(study.id)}
        className="group relative block w-full h-full min-h-[340px] text-left rounded-xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {/* Background gradient on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, transparent 60%)` 
          }}
        />
        
        {/* Card background */}
        <div className="absolute inset-0 card-gradient" />

        {/* Content */}
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono tracking-wider text-primary">
                {study.number}
              </span>
              <motion.div 
                className="w-10 h-10 rounded-lg bg-muted/80 border border-border/50 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
            <motion.div
              className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </motion.div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <p className="text-xs font-medium tracking-wide uppercase mb-2 text-primary/80 font-body">
              {study.subtitle}
            </p>
            <h3 className="font-display text-xl lg:text-2xl font-normal mb-3 group-hover:text-primary transition-colors duration-300">
              {study.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed line-clamp-2 text-sm font-body mb-4">
              {study.oneLiner}
            </p>
            
            {/* Impact badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
              {study.impact}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
            {study.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-body rounded-md bg-muted/60 text-muted-foreground border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover line accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        />
      </button>
    </motion.article>
  );
};

interface CaseStudyGridProps {
  onSelect: (id: string) => void;
}

const CaseStudyGrid = ({ onSelect }: CaseStudyGridProps) => {
  return (
    <section id="case-studies" className="py-32 px-6 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
              Selected Work
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-4">
            Five bets on the same thesis.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            Each case study represents a different facet of turning financial complexity into product advantage — from real-time risk engines to AI-powered operations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={index}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
