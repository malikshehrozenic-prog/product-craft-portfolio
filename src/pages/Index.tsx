import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import ApproachSection from "@/components/ApproachSection";
import Footer from "@/components/Footer";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      staggerChildren: 0.1 
    }
  },
  exit: { opacity: 0 }
};

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.main 
        className="min-h-screen bg-background"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
        <CaseStudies />
        <ApproachSection />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};

export default Index;
