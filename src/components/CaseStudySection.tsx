import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Target } from "lucide-react";
import { ReactNode } from "react";

interface NarrativeBlockProps {
  type: 'context' | 'conflict' | 'bet';
  title?: string;
  children: ReactNode;
}

export const NarrativeBlock = ({ type, title, children }: NarrativeBlockProps) => {
  const config = {
    context: {
      icon: Target,
      label: 'The Context',
      bgClass: 'bg-blue-500/5',
      borderClass: 'border-blue-500/20',
      iconBgClass: 'bg-blue-500/10',
      iconClass: 'text-blue-400',
    },
    conflict: {
      icon: AlertTriangle,
      label: 'The Conflict',
      bgClass: 'bg-amber-500/5',
      borderClass: 'border-amber-500/20',
      iconBgClass: 'bg-amber-500/10',
      iconClass: 'text-amber-400',
    },
    bet: {
      icon: Lightbulb,
      label: 'The Strategic Bet',
      bgClass: 'bg-primary/5',
      borderClass: 'border-primary/20',
      iconBgClass: 'bg-primary/10',
      iconClass: 'text-primary',
    },
  };

  const { icon: Icon, label, bgClass, borderClass, iconBgClass, iconClass } = config[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl p-6 ${bgClass} border ${borderClass}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg ${iconBgClass} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconClass}`} />
        </div>
        <h4 className={`font-display text-lg font-semibold ${iconClass}`}>
          {title || label}
        </h4>
      </div>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

interface MetricCardProps {
  value: string;
  label: string;
  change?: string;
}

export const MetricCard = ({ value, label, change }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-4 rounded-xl bg-card border border-border text-center"
  >
    <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
    <p className="text-sm text-foreground font-medium mt-1">{label}</p>
    {change && <p className="text-xs text-muted-foreground mt-0.5">{change}</p>}
  </motion.div>
);

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ number, title, subtitle }: SectionHeaderProps) => (
  <div className="flex items-start gap-4 mb-8">
    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
      <span className="text-lg font-bold text-primary">{number}</span>
    </div>
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  </div>
);