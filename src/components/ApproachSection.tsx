import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search,
  Users,
  Target,
  Settings,
  Zap,
  FileText,
  CheckCircle,
} from "lucide-react";

const PHILOSOPHY_TABS = [
  { id: 'strategy', label: 'Strategy & Bets', icon: Target },
  { id: 'discovery', label: 'Continuous Discovery', icon: Search },
  { id: 'execution', label: 'Velocity & Build', icon: Settings },
  { id: 'leadership', label: 'Leadership & Conflict', icon: Users },
  { id: 'ai', label: 'AI-Native PM', icon: Zap },
];

interface PhilosophyItem {
  title: string;
  text: string;
}

interface PhilosophyContent {
  title: string;
  content: PhilosophyItem[];
  artifacts: string[];
}

const PHILOSOPHY_CONTENT: Record<string, PhilosophyContent> = {
  strategy: {
    title: "Portfolio Management",
    content: [
      {
        title: "Betting > Planning",
        text: "I treat product teams as investment capital. I use 'Betting Tables' (inspired by Basecamp's Shape Up) to define 'Appetite'—how much time we are willing to wager on a problem—before we solutionize. This prevents the sunk-cost fallacy.",
      },
      {
        title: "Compound Growth Loops",
        text: "Linear funnels are leaky. I design 'Causal Loops' (Acquisition Loops, Data Network Effects) where every user interaction fuels the next user's value. I optimize for system compounding, not just conversion rates.",
      }
    ],
    artifacts: ["Betting Tables", "Causal Loop Diagrams", "Unit Economics Model"]
  },
  discovery: {
    title: "High-Velocity Truth Seeking",
    content: [
      {
        title: "Continuous Interviewing",
        text: "I don't wait for a 'research phase.' I aim for weekly customer touchpoints. I use the 'Mom Test' methodology to avoid leading questions and uncover actual past behaviors rather than hypothetical wishes.",
      },
      {
        title: "Synthetic Validation",
        text: "I use LLM Agents to simulate user personas for initial 'Red Teaming' of features. While this never replaces real users, it allows me to pressure-test logic flaws in minutes, accelerating the cycle time of live testing.",
      }
    ],
    artifacts: ["User Journey Maps", "Jobs-to-be-Done (JTBD)", "Synthetic User Personas"]
  },
  execution: {
    title: "Symbiotic Execution",
    content: [
      {
        title: "The 'Full-Stack' PM",
        text: "I use tools like Cursor and V0 to scaffold functional prototypes myself. I don't hand engineering a PDF spec; I hand them a working React component or Python script and ask, 'How do we make this production-grade?' This creates massive leverage.",
      },
      {
        title: "Product Sense",
        text: "Specs are never perfect. I rely on developed Product Sense to make micro-decisions during the build. I sweat the edge cases and error states so the 'happy path' isn't the only path that works.",
      }
    ],
    artifacts: ["Dual-Track Agile", "Visual PRDs", "Post-Mortems"]
  },
  leadership: {
    title: "Influence Without Authority",
    content: [
      {
        title: "Radical Transparency",
        text: "I send weekly 'State of the Union' updates that highlight blockers and wins equally. I find that 'difficult' stakeholders are often just 'unheard' stakeholders, so I over-communicate to build trust.",
      },
      {
        title: "Conflict Resolution",
        text: "When opinions clash, I act as the API between business goals and engineering reality. We practice 'Disagree and Commit' to keep velocity high. If data is missing, we define a time-boxed experiment.",
      }
    ],
    artifacts: ["No Surprises Policy", "Psychological Safety", "Extreme Ownership"]
  },
  ai: {
    title: "Eval-Driven Development",
    content: [
      {
        title: "Moving Beyond 'Vibes'",
        text: "Most teams ship AI based on 'it feels right.' I implement rigorous 'Evals'—automated datasets that grade the LLM's outputs against ground truth. We don't ship model updates unless the Eval Score improves. This brings engineering discipline to stochastic products.",
      },
      {
        title: "Agentic Workflows",
        text: "Chatbots are 2023. I design Agentic Systems—multi-step workflows where AI plans, executes, and critiques its own work. I focus on 'Cognitive Architecture' (how the AI thinks) rather than just Prompt Engineering.",
      }
    ],
    artifacts: ["Golden Datasets", "RAG Architecture", "Model Eval Scores"]
  }
};

const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState('strategy');
  const currentContent = PHILOSOPHY_CONTENT[activeTab];

  return (
    <section id="operating-system" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              The Manifesto
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Operating System
          </h2>
        </motion.div>

        {/* Tabbed Interface */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
          >
            {PHILOSOPHY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 border whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-card text-foreground border-primary/30 shadow-lg'
                    : 'text-muted-foreground border-transparent hover:bg-card/50 hover:text-foreground'
                }`}
              >
                <tab.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === tab.id ? 'text-primary' : ''}`} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-10"
              >
                {/* Section Title */}
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-8 text-gradient">
                  {currentContent.title}
                </h3>

                {/* Content Cards */}
                <div className="space-y-6 mb-10">
                  {currentContent.content.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Artifacts */}
                <div className="pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Core Artifacts
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentContent.artifacts.map((artifact) => (
                      <span
                        key={artifact}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm border border-border/30 hover:border-primary/30 hover:text-foreground transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
