import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EVIDENCE_CARDS = [
  {
    value: "$36–48M",
    label: "Collect-before-payout exposure",
    description: "Mapped the full financial risk surface of client invoicing timing gaps — a blind spot the business had never quantified.",
  },
  {
    value: "5 Product Areas",
    label: "Owned simultaneously",
    description: "Benefits, Expenses, Payroll Changes, Invoicing & Pricing Infrastructure, AI Product Tooling — all interconnected, all laddering to one thesis.",
  },
  {
    value: "Competitive Intel",
    label: "vs. Deel, Remote, Rippling, Papaya",
    description: "Built frameworks comparing feature parity, pricing architecture, and compliance depth across the EOR landscape to inform product strategy.",
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
            EOR is a{" "}
            <span className="text-gradient italic">financial risk management problem</span>{" "}
            disguised as an HR problem.
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-4xl font-body"
          >
            Every employee an EOR onboards in a new country is a liability position — severance, 
            notice pay, statutory bonuses, accrued benefits, currency exposure. The industry treats 
            these as back-office compliance tasks. I believe the winners will be the platforms that 
            treat payroll infrastructure like fintech infrastructure: real-time risk visibility, 
            programmatic compliance, and financial intelligence that turns cost centers into pricing advantages.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-4xl mt-6 font-body"
          >
            At Oyster HR, I own five product areas that collectively manage over $50M in financial 
            exposure across 160+ countries. Every product I've shipped — from a real-time wage 
            liability engine to an AI-powered expense intelligence pipeline — is a bet on this thesis: 
            that the EOR platform which best understands its own financial exposure will outprice, 
            out-margin, and outlast every competitor.
          </motion.p>
        </motion.div>

        {/* Evidence cards */}
        <div className="grid md:grid-cols-3 gap-6">
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
