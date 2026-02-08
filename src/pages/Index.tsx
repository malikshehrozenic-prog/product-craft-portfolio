import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="noise">
      <ScrollProgress />
      <motion.main 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Navigation />
        <Hero />
        <CaseStudyGrid />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
