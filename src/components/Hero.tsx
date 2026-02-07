import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import ConstellationGraph from "./ConstellationGraph";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: "$50M+", label: "Managed Exposure" },
    { value: "5", label: "Product Areas" },
    { value: "160+", label: "Countries" },
    { value: "12", label: "Years in Product" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dramatic gradient backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient" />
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid lines for editorial feel */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 px-6 py-24"
      >
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] uppercase text-xs">
                Lead Product Manager · EOR & Fintech Infrastructure
              </span>
            </motion.div>

            {/* Main headline - Editorial typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] mb-8"
            >
              I lead teams that turn{" "}
              <span className="text-gradient italic">financial complexity</span>{" "}
              into competitive advantage.
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                Five product areas. $50M+ in financial exposure. 160+ countries. 
                I build prototypes that become production systems, write strategy docs 
                that shift executive thinking, and lead cross-functional teams through 
                problems no framework can solve.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8 md:gap-12 mt-12 pt-8 border-t border-border/30"
            >
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="font-mono text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1 tracking-wide uppercase font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Constellation Graph (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <ConstellationGraph />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-body">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
