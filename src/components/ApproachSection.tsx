import { motion } from "framer-motion";
import {
  Search,
  Users,
  RefreshCw,
  BarChart3,
  Map,
  Target,
  MessageSquare,
  Handshake,
  Code2,
  Lightbulb,
  Zap,
  Sparkles,
} from "lucide-react";

const approaches = [
  {
    id: "discovery",
    icon: Search,
    title: "Product Discovery",
    summary: "Hypothesis-driven exploration to find problems worth solving",
  },
  {
    id: "stakeholders",
    icon: Users,
    title: "Stakeholder Management",
    summary: "Building alignment through transparency and shared outcomes",
  },
  {
    id: "continuous-discovery",
    icon: RefreshCw,
    title: "Continuous Discovery",
    summary: "Weekly customer touchpoints that inform every sprint",
  },
  {
    id: "metrics",
    icon: BarChart3,
    title: "Metrics & Evaluation",
    summary: "Defining success criteria that drive meaningful outcomes",
  },
  {
    id: "roadmapping",
    icon: Map,
    title: "Roadmapping",
    summary: "Outcome-focused planning with room for adaptation",
  },
  {
    id: "strategy",
    icon: Target,
    title: "Product Strategy",
    summary: "Connecting vision to execution through focused bets",
  },
  {
    id: "difficult-stakeholders",
    icon: MessageSquare,
    title: "Difficult Stakeholders",
    summary: "Turning resistance into collaboration",
  },
  {
    id: "conflict",
    icon: Handshake,
    title: "Conflict Resolution",
    summary: "Navigating disagreements to stronger outcomes",
  },
  {
    id: "cross-functional",
    icon: Code2,
    title: "Engineering & Design",
    summary: "True partnership from discovery to delivery",
  },
  {
    id: "product-sense",
    icon: Lightbulb,
    title: "Product Sense",
    summary: "Intuition built on empathy, data, and experience",
  },
  {
    id: "execution",
    icon: Zap,
    title: "Product Execution",
    summary: "Shipping with speed, quality, and learning",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "My Take on AI",
    summary: "AI as a force multiplier for product work",
  },
];

const ApproachCard = ({ approach, index }: {
  approach: typeof approaches[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative p-6 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
        <approach.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      
      {/* Content */}
      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {approach.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {approach.summary}
      </p>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
};

const ApproachSection = () => {
  return (
    <section id="approach" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background pointer-events-none" />
      
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
              Philosophy
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              My Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              How I think about product development—from discovery to delivery, 
              and everything in between.
            </p>
          </div>
        </motion.div>

        {/* Grid of approaches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {approaches.map((approach, index) => (
            <ApproachCard
              key={approach.id}
              approach={approach}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
