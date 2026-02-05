import { motion } from "framer-motion";

interface ArchitectureArtifactProps {
  animated?: boolean;
}

const ArchitectureArtifact = ({ animated = true }: ArchitectureArtifactProps) => (
  <div className="relative rounded-xl border border-border bg-card/80 p-6 overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="relative z-10">
      <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
        System Architecture v2.0
      </p>

      <div className="flex items-center justify-between gap-4">
        {/* Client */}
        <motion.div
          initial={animated ? { opacity: 0, x: -20 } : false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-14 h-14 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <span className="text-2xl">💻</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">Clients</span>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          initial={animated ? { scaleX: 0 } : false}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-primary/50 origin-left"
        />

        {/* Async Queue */}
        <motion.div
          initial={animated ? { opacity: 0, scale: 0.8 } : false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 border-2 border-primary/40 flex flex-col items-center justify-center shadow-lg shadow-primary/10">
            <span className="text-xl">⚡</span>
            <span className="text-[8px] font-mono text-primary/80 mt-1">QUEUE</span>
          </div>
          <span className="text-xs font-mono text-primary">Async Queue</span>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          initial={animated ? { scaleX: 0 } : false}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex-1 h-px bg-gradient-to-r from-primary/50 to-emerald-500/50 origin-left"
        />

        {/* Postgres */}
        <motion.div
          initial={animated ? { opacity: 0, x: 20 } : false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-14 h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <span className="text-2xl">🗄️</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">Postgres</span>
        </motion.div>
      </div>
    </div>
  </div>
);

export default ArchitectureArtifact;