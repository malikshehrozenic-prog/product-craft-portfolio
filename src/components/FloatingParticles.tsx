import { motion } from "framer-motion";

const EMOJIS = ["🚀", "💡", "📊", "⚡", "🎯", "🔥"];

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {EMOJIS.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-[0.08]"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            rotate: [0, (i % 2 === 0 ? 20 : -20), 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
