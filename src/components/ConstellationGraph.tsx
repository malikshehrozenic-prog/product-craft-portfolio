import { useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  stat: string;
  x: number;
  y: number;
}

const NODES: Node[] = [
  { id: "benefits", label: "Benefits", stat: "$3M GPV", x: 200, y: 80 },
  { id: "expenses", label: "Expenses", stat: "150 hrs/mo saved", x: 320, y: 160 },
  { id: "payroll", label: "Payroll Changes", stat: "40% error reduction", x: 260, y: 280 },
  { id: "invoicing", label: "Invoicing & Pricing", stat: "$50M+ exposure", x: 100, y: 200 },
  { id: "ai", label: "AI Tooling", stat: "12 languages processed", x: 160, y: 340 },
];

const CONNECTIONS = [
  ["benefits", "expenses"],
  ["benefits", "invoicing"],
  ["expenses", "payroll"],
  ["invoicing", "payroll"],
  ["payroll", "ai"],
  ["invoicing", "ai"],
  ["expenses", "ai"],
];

const ConstellationGraph = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodePos = (id: string) => {
    const node = NODES.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-[400px] h-[400px]">
      <svg className="absolute inset-0 w-full h-full">
        {/* Connections */}
        {CONNECTIONS.map(([from, to], i) => {
          const fromPos = getNodePos(from);
          const toPos = getNodePos(to);
          const isHighlighted = hoveredNode === from || hoveredNode === to;
          
          return (
            <motion.line
              key={i}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke="hsl(var(--primary))"
              strokeWidth={isHighlighted ? 1.5 : 0.5}
              strokeOpacity={isHighlighted ? 0.6 : 0.2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {NODES.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ left: node.x - 6, top: node.y - 6 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
          
          {/* Node dot */}
          <motion.div
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              hoveredNode === node.id 
                ? "bg-primary scale-150" 
                : "bg-primary/60"
            }`}
            whileHover={{ scale: 1.5 }}
          />

          {/* Tooltip */}
          {hoveredNode === node.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap z-10"
            >
              <div className="bg-card border border-border/50 rounded-md px-3 py-2 shadow-lg">
                <p className="text-xs font-medium text-foreground">{node.label}</p>
                <p className="text-xs text-primary font-mono">{node.stat}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ConstellationGraph;
