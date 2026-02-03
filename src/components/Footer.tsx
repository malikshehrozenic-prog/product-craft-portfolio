import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Let's Connect
            </h3>
            <p className="text-muted-foreground">
              Open to opportunities and conversations about product.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Product Portfolio. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
