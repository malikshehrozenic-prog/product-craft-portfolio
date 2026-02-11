import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp, Globe, Workflow, FileText, Shield, Wallet, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "pricing-intelligence": DollarSign,
  "benefits-engine": Globe,
  "wage-risk": TrendingUp,
  "expense-intelligence": Workflow,
  "mobile-wallet": Wallet,
  "e-requisition": FileText,
  "payroll-governance": Shield,
};

const CaseStudyCard = ({ 
  study, 
  index, 
  isFeatured = false,
}: { 
  study: CaseStudy; 
  index: number;
  isFeatured?: boolean;
}) => {
  const Icon = iconMap[study.id] || TrendingUp;
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };
  
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
      className={`${isFeatured ? "md:col-span-2" : ""} group/flip`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* FRONT */}
        <div
          className={`relative block w-full rounded-xl border border-border/50 overflow-hidden ${
            isFeatured ? "min-h-[380px]" : "min-h-[340px]"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 card-gradient" />
          <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono tracking-wider text-primary">{study.number}</span>
                <div className="w-10 h-10 rounded-lg bg-muted/80 border border-border/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                  {study.company}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium tracking-wide uppercase mb-2 text-primary/80 font-body">{study.subtitle}</p>
              <h3 className={`font-display font-normal mb-3 transition-colors duration-300 ${
                isFeatured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
              }`}>{study.title}</h3>
              <p className={`text-muted-foreground leading-relaxed text-sm font-body mb-4 ${
                isFeatured ? "line-clamp-3" : "line-clamp-2"
              }`}>{study.oneLiner}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 text-primary">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {study.impact}
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-body mt-4 line-clamp-1">{study.teamSize}</p>
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
              {study.tags.slice(0, isFeatured ? 4 : 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-body rounded-md bg-muted/60 text-muted-foreground border border-border/30"
                >{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* BACK */}
        <Link
          to={`/case-study/${study.id}`}
          className={`absolute inset-0 rounded-xl border border-primary/30 overflow-hidden flex flex-col items-center justify-center p-8 text-center ${
            isFeatured ? "min-h-[380px]" : "min-h-[340px]"
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-card" />
          <div className="relative z-10">
            <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl mb-3">{study.title}</h3>
            <p className="text-muted-foreground text-sm font-body mb-6 max-w-sm">{study.oneLiner}</p>
            <div className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium">
              View Case Study <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  );
};

const CaseStudyGrid = () => {
  return (
    <section id="case-studies" className="py-32 px-6 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="h-px bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
              Selected Work
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-4">
            Six products. Four companies.{" "}
            <motion.span
              className="text-gradient italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              One pattern.
            </motion.span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            From mobile wallets in emerging markets to AI-powered expense processing in 160 countries — every product turns financial complexity into product advantage.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={index}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
