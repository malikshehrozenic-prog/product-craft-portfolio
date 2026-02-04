import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, TrendingUp, FileText, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "EOR Expense Intelligence System",
    description: "Automated multi-country expense processing with AI-powered receipt extraction, tax assessment engine, and intelligent approval routing via Slack.",
    tags: ["n8n", "OpenAI", "Airtable", "Slack"],
    icon: Workflow,
    color: "from-gold-primary/20 to-gold-accent/20",
    link: "/case-study/n8n-expense",
  },
  {
    id: 2,
    title: "Wage Liability Risk Engine",
    description: "Real-time EOR termination liability monitoring across 10 countries with automated FX conversion, risk scoring, and concentration alerts.",
    tags: ["Python", "Streamlit", "Plotly", "Financial Modeling"],
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
    link: "/case-study/wage-risk",
  },
  {
    id: 3,
    title: "E-Requisition Workflow System",
    description: "End-to-end procurement automation platform processing $1.2B annually with dynamic approval routing and 65% cycle time reduction.",
    tags: ["BPM Workflow", "SharePoint", "Cost Point", "Process Automation"],
    icon: FileText,
    color: "from-amber-500/20 to-orange-500/20",
    link: "/case-study/e-requisition",
  },
  {
    id: 4,
    title: "Global Benefits Engine",
    description: "Architected localized benefits infrastructure for 160+ countries, transforming a cost center into a $3M GPV profit engine with 10% ARR uplift.",
    tags: ["Product Strategy", "Systems Design", "Monetization", "GTM"],
    icon: Globe,
    color: "from-purple-500/20 to-indigo-500/20",
    link: "/case-study/benefits-engine",
  },
  {
    id: 5,
    title: "Payroll Governance Engine",
    description: "Self-healing validation engine that decoupled payroll ops from headcount, reducing errors by 90% and saving $2.5M annually.",
    tags: ["Rule Engine", "Validation", "Ops Automation", "Self-Serve"],
    icon: Shield,
    color: "from-cyan-500/20 to-blue-500/20",
    link: "/case-study/payroll-governance",
  },
];

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  link: string | null;
}

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const content = (
    <>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center border border-border">
            <study.icon className="w-7 h-7 text-gold-primary" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold-primary transition-colors" />
        </div>

        <h3 className="font-display text-2xl font-semibold mb-3">
          {study.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {study.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className = "group relative block card-gradient rounded-2xl border border-border p-8 hover:border-gold-primary/30 transition-all duration-300";
  const style = { boxShadow: "var(--shadow-card)" };

  if (study.link) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link to={study.link} className={`${className} cursor-pointer`} style={style}>
          {content}
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={className} style={style}>
        {content}
      </div>
    </motion.article>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real-world examples of products I've shaped, from discovery to delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
