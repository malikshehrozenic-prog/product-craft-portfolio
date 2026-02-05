import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, TrendingUp, FileText, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  link: string;
  size: "medium" | "large" | "full";
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "EOR Expense Intelligence",
    subtitle: "Automated multi-country expense processing",
    description: "AI-powered receipt extraction, tax assessment engine, and intelligent approval routing via Slack.",
    tags: ["n8n", "OpenAI", "Airtable"],
    icon: Workflow,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    link: "/case-study/n8n-expense",
    size: "large" as const,
  },
  {
    id: 2,
    title: "Wage Liability Risk Engine",
    subtitle: "Real-time EOR termination monitoring",
    description: "10-country liability monitoring with automated FX conversion and risk scoring.",
    tags: ["Python", "Streamlit", "Financial Modeling"],
    icon: TrendingUp,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    link: "/case-study/wage-risk",
    size: "medium" as const,
  },
  {
    id: 3,
    title: "E-Requisition Workflow",
    subtitle: "$1.2B annual procurement automation",
    description: "Dynamic approval routing with 65% cycle time reduction.",
    tags: ["BPM", "SharePoint", "Automation"],
    icon: FileText,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    link: "/case-study/e-requisition",
    size: "medium" as const,
  },
  {
    id: 4,
    title: "Global Benefits Engine",
    subtitle: "160+ country benefits infrastructure",
    description: "Transformed a cost center into a $3M GPV profit engine with 10% ARR uplift.",
    tags: ["Product Strategy", "Monetization", "GTM"],
    icon: Globe,
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    link: "/case-study/benefits-engine",
    size: "large" as const,
  },
  {
    id: 5,
    title: "Payroll Governance Engine",
    subtitle: "Self-healing validation system",
    description: "Reduced errors by 90% and saved $2.5M annually by decoupling ops from headcount.",
    tags: ["Rule Engine", "Validation", "Ops Automation"],
    icon: Shield,
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    link: "/case-study/payroll-governance",
    size: "full" as const,
  },
];

const BentoCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const sizeClasses = {
    medium: "md:col-span-1",
    large: "md:col-span-1 lg:row-span-1",
    full: "md:col-span-2",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={sizeClasses[study.size]}
    >
      <Link 
        to={study.link} 
        className="group relative block h-full min-h-[320px] rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30"
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Card background */}
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 h-full p-8 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className="w-14 h-14 rounded-xl bg-secondary/80 border border-border/50 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <study.icon className="w-7 h-7 text-primary" />
            </motion.div>
            <motion.div
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <p className="text-primary/80 text-sm font-medium tracking-wide uppercase mb-2">
              {study.subtitle}
            </p>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
              {study.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {study.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/60 text-secondary-foreground border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover line accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.article>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 px-6 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />

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
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              Selected Work
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Case Studies
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <BentoCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
