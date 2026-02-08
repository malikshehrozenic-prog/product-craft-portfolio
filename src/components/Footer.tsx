import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 px-6 overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main CTA */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
                Get in Touch
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-normal tracking-tight mb-6">
              Complex problems.
              <br />
              <span className="text-gradient italic">Clear products.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto font-body">
              If your product handles real money, real compliance, or real cross-border complexity — let's talk.
            </p>
          </div>

          {/* Email button + Social links */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <a
              href="mailto:malikshehrozeali@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/msanranb/" },
                { icon: Mail, label: "Email", href: "mailto:malikshehrozeali@gmail.com" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <ArrowUpRight className="absolute -top-1 -right-1 w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <p>© {new Date().getFullYear()} Malik Shehroz</p>
          <p className="flex items-center gap-2">
            Built with conviction and too much coffee.
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
