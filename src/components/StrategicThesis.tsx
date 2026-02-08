import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EVIDENCE_CARDS = [
  {
    value: "$50M+",
    label: "Financial Operations Productized",
    description: "From federal procurement to EOR payroll — turned manual financial workflows into software systems across 4 companies.",
  },
  {
    value: "6 Products",
    label: "Shipped across 4 companies",
    description: "Mobile wallets, procurement platforms, insurance quoting engines, payroll risk dashboards, AI expense systems, benefits monetization.",
  },
  {
    value: "180+",
    label: "Countries of cross-border complexity",
    description: "Every product I've built operates across regulatory boundaries — different tax regimes, labor laws, payment rails, and compliance requirements.",
  },
  {
    value: "$0 → Revenue",
    label: "Three times",
    description: "Turned cost centers into revenue lines at FINCA (agent banking fees), Oyster (benefits monetization), and Oyster (pricing intelligence).",
  },
];

const StrategicThesis = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="thesis" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />

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
              Strategic Point of View
            </span>
          </div>
        </motion.div>

        {/* Main thesis quote with parallax */}
        <motion.div style={{ y: parallaxY }} className="mb-20">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-8"
          >
            Every industry I've worked in has the same hidden problem:{" "}
            <span className="text-gradient italic">financial complexity that everyone treats as someone else's job.</span>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-4xl font-body"
          >
            In microfinance, sending money to a village agent across 20 countries was treated as an operations problem. 
            In federal consulting, $1.2B in procurement was managed through paper forms. In EOR, multi-country payroll 
            liabilities worth tens of millions were tracked in quarterly spreadsheets.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-4xl mt-6 font-body"
          >
            The pattern is always the same: regulated, multi-country financial operations that everyone assumes 
            can't be productized. I keep finding they can — and the companies that do it first win their markets.
          </motion.p>
        </motion.div>

        {/* Evidence cards - 4 cards in a row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVIDENCE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.4 }}
              className="bg-card/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="font-mono text-2xl md:text-3xl text-primary mb-2">
                {card.value}
              </div>
              <div className="text-sm text-foreground font-medium mb-3 font-body">
                {card.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicThesis;
