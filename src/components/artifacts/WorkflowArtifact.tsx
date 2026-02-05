import { motion } from "framer-motion";
import { FileText, Building2, Landmark, CheckCircle } from "lucide-react";

const WorkflowArtifact = () => {
  const nodes = [
    { icon: FileText, label: "Req", color: "bg-blue-500/10 border-blue-500/30" },
    { icon: Building2, label: "Biz", color: "bg-purple-500/10 border-purple-500/30" },
    { icon: Landmark, label: "CFO", color: "bg-amber-500/10 border-amber-500/30", conditional: true },
    { icon: CheckCircle, label: "Fed", color: "bg-emerald-500/10 border-emerald-500/30" },
  ];

  return (
    <div className="relative rounded-xl border border-border bg-card/80 p-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="workflow-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workflow-grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <p className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-wider">
          Approval Orchestration
        </p>

        <div className="flex items-center justify-center gap-3">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                {node.conditional && (
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[8px] font-mono bg-amber-500/20 text-amber-400 rounded border border-amber-500/30">
                    ≥$250K
                  </span>
                )}
                <div className={`w-12 h-12 rounded-lg border flex flex-col items-center justify-center ${node.color}`}>
                  <node.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="block text-[10px] font-mono text-center text-muted-foreground mt-1">
                  {node.label}
                </span>
              </div>
              {i < nodes.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="w-8 h-px bg-border origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowArtifact;