import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import StrategicThesis from "@/components/StrategicThesis";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import OperatingSystem from "@/components/OperatingSystem";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import { CASE_STUDIES } from "@/data/caseStudies";

const Index = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  
  const studyIndex = selectedCaseStudy 
    ? CASE_STUDIES.findIndex(s => s.id === selectedCaseStudy) 
    : -1;
  const study = studyIndex >= 0 ? CASE_STUDIES[studyIndex] : null;
  const nextStudy = studyIndex >= 0 && studyIndex < CASE_STUDIES.length - 1 
    ? CASE_STUDIES[studyIndex + 1] 
    : null;

  const handleSelect = (id: string) => {
    setSelectedCaseStudy(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (nextStudy) {
      setSelectedCaseStudy(nextStudy.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="noise">
      <ScrollProgress />
      
      <AnimatePresence mode="wait">
        {study ? (
          <CaseStudyDetail 
            key={study.id}
            study={study} 
            onBack={handleBack}
            onNext={nextStudy ? handleNext : undefined}
            nextStudy={nextStudy}
          />
        ) : (
          <motion.main 
            key="home"
            className="min-h-screen bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navigation />
            <Hero />
            <StrategicThesis />
            <CaseStudyGrid onSelect={handleSelect} />
            <OperatingSystem onCaseSelect={handleSelect} />
            <AboutSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
