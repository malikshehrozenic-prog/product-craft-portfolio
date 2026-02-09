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
      className={isFeatured ? "md:col-span-2" : ""}
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Link
          to={`/case-study/${study.id}`}
          className={`group relative block w-full h-full text-left rounded-xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            isFeatured ? "min-h-[380px]" : "min-h-[340px]"
          }`}
        >
          {/* Mouse-follow glare */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) => `radial-gradient(600px circle at ${gx} ${gy}, hsl(var(--primary) / 0.08), transparent 60%)`
              ),
            }}
          />
          
          {/* Card background */}
          <div className="absolute inset-0 card-gradient" />

          {/* Content */}
          <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-sm font-mono tracking-wider text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  {study.number}
                </motion.span>
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-muted/80 border border-border/50 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10, borderColor: "hsl(var(--primary) / 0.5)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                {/* Company badge */}
                <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                  {study.company}
                </span>
              </div>
              <motion.div
                className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center"
                initial={{ opacity: 0, x: -10, y: 10 }}
                whileHover={{ scale: 1.1 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0 }}
              >
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </motion.div>
            </div>

            {/* Text content */}
            <div className="flex-1">
              <motion.p
                className="text-xs font-medium tracking-wide uppercase mb-2 text-primary/80 font-body"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {study.subtitle}
              </motion.p>
              <h3 className={`font-display font-normal mb-3 group-hover:text-primary transition-colors duration-300 ${
                isFeatured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
              }`}>
                {study.title}
              </h3>
              <p className={`text-muted-foreground leading-relaxed text-sm font-body mb-4 ${
                isFeatured ? "line-clamp-3" : "line-clamp-2"
              }`}>
                {study.oneLiner}
              </p>
              
              {/* Impact badge with pulse */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 text-primary"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.15)" }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {study.impact}
              </motion.div>
            </div>

            {/* Team size */}
            <p className="text-xs text-muted-foreground font-body mt-4 line-clamp-1">
              {study.teamSize}
            </p>

            {/* Tags with staggered hover */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
              {study.tags.slice(0, isFeatured ? 4 : 3).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-body rounded-md bg-muted/60 text-muted-foreground border border-border/30 group-hover:border-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + tagIndex * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hover line accent with glow */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            style={{
              boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
            }}
          />

          {/* Corner accent on hover */}
          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-px h-8 bg-primary/50" />
            <div className="absolute top-0 right-0 h-px w-8 bg-primary/50" />
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
