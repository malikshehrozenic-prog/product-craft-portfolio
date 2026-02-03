import { motion } from "framer-motion";
import { useState } from "react";
import {
  Search,
  Users,
  RefreshCw,
  BarChart3,
  Map,
  Target,
  MessageSquare,
  Handshake,
  Code2,
  Lightbulb,
  Zap,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const approaches = [
  {
    id: "discovery",
    icon: Search,
    title: "Product Discovery",
    summary: "Hypothesis-driven exploration to find problems worth solving",
    content: "I believe in continuous discovery that blends qualitative insights with quantitative validation. My approach centers on understanding user pain points through interviews, usability tests, and data analysis before committing to solutions. I use techniques like opportunity solution trees to map the problem space and ensure we're building the right thing.",
  },
  {
    id: "stakeholders",
    icon: Users,
    title: "Stakeholder Management",
    summary: "Building alignment through transparency and shared outcomes",
    content: "Great products require great alignment. I proactively communicate with stakeholders through regular updates, clear documentation, and inclusive decision-making processes. I map stakeholder influence and interests early, then tailor my communication style and frequency to each group's needs.",
  },
  {
    id: "continuous-discovery",
    icon: RefreshCw,
    title: "Continuous Discovery",
    summary: "Weekly customer touchpoints that inform every sprint",
    content: "I embed discovery into our weekly rhythm—not as a phase but as a habit. This means regular customer interviews, prototype testing, and feedback loops that keep us grounded in real user needs. I use tools like interview snapshots and assumption tests to systematically reduce risk.",
  },
  {
    id: "metrics",
    icon: BarChart3,
    title: "Metrics & Evaluation",
    summary: "Defining success criteria that drive meaningful outcomes",
    content: "I craft metrics that balance business outcomes with user value. This includes defining North Star metrics, building input/output metric trees, and establishing guardrails. I'm rigorous about distinguishing vanity metrics from actionable ones, and I design experiments to validate our hypotheses.",
  },
  {
    id: "roadmapping",
    icon: Map,
    title: "Roadmapping",
    summary: "Outcome-focused planning with room for adaptation",
    content: "My roadmaps communicate strategy, not just features. I favor now/next/later frameworks that provide direction without false precision. Roadmaps are living documents that evolve with learning, and I use them to facilitate conversations about tradeoffs and priorities.",
  },
  {
    id: "strategy",
    icon: Target,
    title: "Product Strategy",
    summary: "Connecting vision to execution through focused bets",
    content: "Strategy is about focus—saying no to good ideas so we can execute great ones. I work backwards from company objectives to define product vision, then break that into strategic themes and specific bets. I regularly revisit strategy to ensure it reflects new learnings and market shifts.",
  },
  {
    id: "difficult-stakeholders",
    icon: MessageSquare,
    title: "Difficult Stakeholders",
    summary: "Turning resistance into collaboration",
    content: "Behind every difficult stakeholder is an unmet need. I approach these situations with curiosity—seeking to understand their constraints, fears, and goals. Often, resistance signals a gap in communication or alignment. I use active listening, find common ground, and propose solutions that address underlying concerns.",
  },
  {
    id: "conflict",
    icon: Handshake,
    title: "Conflict Resolution",
    summary: "Navigating disagreements to stronger outcomes",
    content: "Healthy conflict leads to better products. I create space for diverse perspectives, facilitate structured debates, and ensure decisions are made transparently. When conflicts arise, I focus on shared goals, separate positions from interests, and work toward solutions that respect everyone's expertise.",
  },
  {
    id: "cross-functional",
    icon: Code2,
    title: "Engineering & Design",
    summary: "True partnership from discovery to delivery",
    content: "The best work happens when PM, engineering, and design are true partners. I involve engineers early in discovery to leverage their technical insights and ensure feasibility. With designers, I collaborate closely on user research and iterate rapidly. I respect each discipline's expertise while fostering shared ownership.",
  },
  {
    id: "product-sense",
    icon: Lightbulb,
    title: "Product Sense",
    summary: "Intuition built on empathy, data, and experience",
    content: "Product sense is pattern recognition honed through deep customer empathy and diverse experiences. I cultivate it by staying close to users, studying successful products, and reflecting on my own decisions. It's the ability to imagine what users need before they can articulate it—and validate those hunches quickly.",
  },
  {
    id: "execution",
    icon: Zap,
    title: "Product Execution",
    summary: "Shipping with speed, quality, and learning",
    content: "Execution is where strategy meets reality. I break work into thin vertical slices for rapid iteration, maintain a bias for shipping, and create clear acceptance criteria. I balance speed with quality through incremental delivery and celebrate learning as much as launching.",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "My Take on AI",
    summary: "AI as a force multiplier for product work",
    content: "AI is transforming how we build products. I use AI tools for research synthesis, prototype generation, and writing acceleration. More importantly, I think strategically about AI opportunities—where it can genuinely solve user problems versus where it's hype. I believe PMs must understand AI capabilities to make informed product decisions.",
  },
];

const ApproachCard = ({ approach, isOpen, onClick }: {
  approach: typeof approaches[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`card-gradient rounded-xl border transition-all duration-300 cursor-pointer ${
        isOpen ? "border-primary/40" : "border-border hover:border-primary/20"
      }`}
      onClick={onClick}
      style={{ boxShadow: isOpen ? "var(--shadow-glow)" : "var(--shadow-card)" }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? "bg-primary text-primary-foreground" : "bg-secondary"
          }`}>
            <approach.icon className="w-6 h-6" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-semibold">
                {approach.title}
              </h3>
              <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`} />
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              {approach.summary}
            </p>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-foreground/80 mt-4 pt-4 border-t border-border leading-relaxed">
            {approach.content}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ApproachSection = () => {
  const [openId, setOpenId] = useState<string | null>("discovery");

  return (
    <section id="approach" className="py-24 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My Approach
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            How I think about product development—from discovery to delivery, 
            and everything in between.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {approaches.map((approach) => (
            <ApproachCard
              key={approach.id}
              approach={approach}
              isOpen={openId === approach.id}
              onClick={() => setOpenId(openId === approach.id ? null : approach.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
