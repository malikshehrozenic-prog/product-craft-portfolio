import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import TextReveal from "./TextReveal";
import CountUp from "./CountUp";
import FloatingParticles from "./FloatingParticles";
import malikCaricature from "@/assets/malik-caricature.png";
import { lazy, Suspense } from "react";

const Globe3D = lazy(() => import("./Globe3D"));

// Magnetic element — follows cursor within its bounding box
const MagneticStat = ({ value, label, index }: { value: string; label: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
    >
      <CountUp
        value={value}
        className="font-mono text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors block"
      />
      <div className="text-muted-foreground text-xs mt-1 tracking-wide uppercase font-body">
        {label}
      </div>
      <motion.div
        className="h-0.5 bg-primary mt-2"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [waveCount, setWaveCount] = useState(0);

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
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Floating emoji particles */}
      <FloatingParticles />

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
            {/* Overline with line draw */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                className="h-px bg-primary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-primary font-medium tracking-[0.15em] uppercase text-xs"
              >
                Lead Product Manager · EOR & Fintech Infrastructure
              </motion.span>
            </motion.div>

            {/* Main headline with word-by-word reveal */}
            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] mb-8">
              <TextReveal delay={0.3} className="inline">
                I lead teams that turn
              </TextReveal>{" "}
              <motion.span
                className="text-gradient italic inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
              >
                financial complexity
              </motion.span>{" "}
              <TextReveal delay={0.8} className="inline">
                into competitive advantage.
              </TextReveal>
            </div>

            {/* Subheadline with staggered fade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="max-w-xl"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                Five product areas. $50M+ in financial exposure. 160+ countries. 
                I build prototypes that become production systems, write strategy docs 
                that shift executive thinking, and lead cross-functional teams through 
                problems no framework can solve.
              </p>
            </motion.div>

            {/* Stats row with magnetic effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-8 md:gap-12 mt-12 pt-8 border-t border-border/30"
            >
              {stats.map((stat, i) => (
                <MagneticStat key={i} value={stat.value} label={stat.label} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Right - Caricature with constellation overlay (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex flex-col items-center relative"
          >
            {/* Caricature with interactive wave */}
            <motion.div
              className="relative cursor-hover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setWaveCount(c => c + 1)}
            >
              <motion.img
                src={malikCaricature}
                alt="Malik Shehroze Ali caricature"
                className="w-48 h-48 rounded-full object-cover border-2 border-primary/20"
                animate={{
                  boxShadow: [
                    "0 0 0px hsl(var(--primary) / 0)",
                    "0 0 40px hsl(var(--primary) / 0.15)",
                    "0 0 0px hsl(var(--primary) / 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Wave emoji on click */}
              {waveCount > 0 && (
                <motion.span
                  key={waveCount}
                  className="absolute -top-4 -right-4 text-3xl"
                  initial={{ opacity: 1, scale: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 1.5, y: -40 }}
                  transition={{ duration: 0.8 }}
                >
                  👋
                </motion.span>
              )}
              {/* Floating label */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-mono text-primary whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                click me! 🚀
              </motion.div>
            </motion.div>

            {/* 3D Globe */}
            <div className="mt-4 w-[280px] h-[280px]">
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs font-mono">loading globe...</div>}>
                <Globe3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-hover"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-body">Scroll</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <motion.div
              className="w-1 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
