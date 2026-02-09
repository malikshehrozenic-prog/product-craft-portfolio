import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="noise">
      <CustomCursor />
      <ScrollProgress />
      <motion.main 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Navigation />
        <Hero />

        {/* Section divider */}
        <div className="relative h-px mx-auto max-w-6xl px-6">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          />
        </div>

        <CaseStudyGrid />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
