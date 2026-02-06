import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import OperatingSystem from "@/components/OperatingSystem";
import Footer from "@/components/Footer";
import { CASE_STUDIES } from "@/data/caseStudies";

const Index = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  
  const study = selectedCaseStudy 
    ? CASE_STUDIES.find(s => s.id === selectedCaseStudy) 
    : null;

  const handleSelect = (id: string) => {
    setSelectedCaseStudy(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <AnimatePresence mode="wait">
      {study ? (
        <CaseStudyDetail 
          key={study.id}
          study={study} 
          onBack={handleBack} 
        />
      ) : (
        <motion.main 
          key="home"
          className="min-h-screen bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hero />
          <CaseStudyGrid onSelect={handleSelect} />
          <OperatingSystem onCaseSelect={handleSelect} />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Index;
