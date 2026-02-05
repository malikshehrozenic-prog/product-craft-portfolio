import { motion } from "framer-motion";
import { Ban, AlertTriangle, CheckCircle } from "lucide-react";

const ConfidenceArtifact = () => {
  const bars = [40, 65, 85, 92, 96, 98, 94, 88];

  return (
    <div className="relative rounded-xl border border-border bg-card/80 p-6 overflow-hidden">
      <p className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-wider">
        AI Confidence Thresholds
      </p>

      {/* Bars */}
      <div className="flex items-end justify-center gap-2 h-24 mb-6">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative w-6"
          >
            <div
              className={`w-full rounded-t transition-all ${
                height >= 95
                  ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30'
                  : height >= 80
                  ? 'bg-amber-500/80'
                  : 'bg-red-500/50'
              }`}
              style={{ height: '100%' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-1.5">
          <Ban className="w-3.5 h-3.5 text-red-400" />
          <span className="text-muted-foreground">Reject &lt;80%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-muted-foreground">Review 80-95%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-muted-foreground">Auto &gt;95%</span>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceArtifact;