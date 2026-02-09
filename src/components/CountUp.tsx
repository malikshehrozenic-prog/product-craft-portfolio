import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
}

const CountUp = ({ value, className = "" }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract number and surrounding text
    const match = value.match(/^([^0-9]*)(\d+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {display}
    </motion.span>
  );
};

export default CountUp;
