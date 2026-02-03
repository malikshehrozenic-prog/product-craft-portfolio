import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, Smartphone } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "n8n Workflow Automation",
    description: "Designed and implemented workflow automation solutions to streamline complex business processes and reduce manual overhead.",
    tags: ["Automation", "Integration", "Process Design"],
    icon: Workflow,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 2,
    title: "Mobile App Experience",
    description: "Led product development for a mobile application, from discovery through launch, focusing on user-centric design and rapid iteration.",
    tags: ["Mobile", "UX Research", "Agile"],
    icon: Smartphone,
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real-world examples of products I've shaped, from discovery to delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative card-gradient rounded-2xl border border-border p-8 hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center border border-border">
                    <study.icon className="w-7 h-7 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-semibold mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
