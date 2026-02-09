import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 px-6 overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Main CTA */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="h-px bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
                Get in Touch
              </span>
              <motion.div
                className="h-px bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-normal tracking-tight mb-6">
              Complex problems.
              <br />
              <motion.span
                className="text-gradient italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Clear products.
              </motion.span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto font-body">
              If your product handles real money, real compliance, or real cross-border complexity — let's talk.
            </p>
          </div>

          {/* Email button + Social links */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <motion.a
              href="mailto:malikshehrozeali@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Get in Touch</span>
            </motion.a>
            
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
                  className="group relative w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
        <motion.div
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Malik Shehroz</p>
          <p className="flex items-center gap-2">
            Built with conviction and too much coffee.
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
