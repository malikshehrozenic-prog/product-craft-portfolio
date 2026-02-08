import { motion } from "framer-motion";
import malikCaricature from "@/assets/malik-caricature.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg flex-shrink-0"
          >
            <img 
              src={malikCaricature} 
              alt="Malik - Product Manager" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
                About
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium">Malik Sheheryar Awan</h2>
          </div>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: The Arc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card/50 rounded-xl p-6 border border-border/50"
          >
            <h3 className="font-display text-xl font-medium text-primary mb-4">The Arc</h3>
            <p className="text-muted-foreground leading-relaxed font-body text-sm mb-4">
              From microfinance in emerging markets to global employment infrastructure. My career follows one thread: taking financial complexity that everyone assumes can't be productized, and proving it can.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-sm mb-4">
              I've spent 12 years in product management across microfinance (FINCA International — 20 countries, 2M+ users), insurance (Legal & General), federal consulting (ICF — $1.2B procurement), and global EOR (Oyster HR — 160+ countries).
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-sm">
              I hold an MS in Data Analytics from Northeastern University and an MBA in Finance & Marketing. ML Specialization from DeepLearning.AI. Reforge (Product Management, Data for PMs, PLG).
            </p>
          </motion.div>

          {/* Column 2: The Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 rounded-xl p-6 border border-border/50"
          >
            <h3 className="font-display text-xl font-medium text-primary mb-4">The Builder</h3>
            <p className="text-muted-foreground leading-relaxed font-body text-sm mb-4">
              I'm the PM who prototypes before speccing. Python for financial modeling and data pipelines. SQL for analysis. Google Apps Script and n8n for automation. JavaScript/React when I need a UI. LangChain and OpenAI when AI is the right tool.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-sm mb-4">
              I don't build to ship production code — I build to de-risk. A working prototype collapses months of "is this feasible?" conversations into one demo.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-sm">
              Most PMs at my level stopped coding years ago. I consider it my sharpest competitive edge.
            </p>
          </motion.div>

          {/* Column 3: What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 rounded-xl p-6 border border-border/50"
          >
            <h3 className="font-display text-xl font-medium text-primary mb-4">What's Next</h3>
            <p className="text-muted-foreground leading-relaxed font-body text-sm mb-4">
              I'm looking for a Lead or Principal PM role at a company where product complexity is the differentiator, not a liability.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-sm mb-4">
              I thrive where the easy problems are already solved and what remains requires navigating ambiguity, building trust across functions, and shipping despite uncertainty.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-sm">
              If your product handles real money, real compliance, or real cross-border complexity — let's talk.
            </p>
          </motion.div>
        </div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <h3 className="font-display text-2xl font-medium mb-6">Career Timeline</h3>
          <table className="w-full text-sm font-body">
            <tbody className="divide-y divide-border/30">
              {[
                { company: "IFS Group (Dubai)", role: "Product Owner", description: "Enterprise ERP across MENA" },
                { company: "FINCA International (Global)", role: "Product Manager", description: "Mobile wallet platform, 2M+ users, 20 countries" },
                { company: "Legal & General (US)", role: "Product Manager", description: "Digital insurance quoting, 30% faster agent onboarding" },
                { company: "ICF International (US)", role: "Principal PM", description: "$1.2B procurement automation, zero audit findings" },
                { company: "Oyster HR (Remote)", role: "Lead PM", description: "5 product areas, $50M+ exposure, 160+ countries" },
              ].map((row, i) => (
                <tr key={i} className="group">
                  <td className="py-4 pr-4 text-foreground font-medium whitespace-nowrap">{row.company}</td>
                  <td className="py-4 pr-4 text-primary whitespace-nowrap">{row.role}</td>
                  <td className="py-4 text-muted-foreground">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
