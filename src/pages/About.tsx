import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import OperatingSystem from "@/components/OperatingSystem";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleCaseSelect = (id: string) => {
    navigate(`/case-study/${id}`);
  };

  return (
    <div className="noise">
      <ScrollProgress />
      <motion.main
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation />
        
        {/* Hero for About page */}
        <section className="pt-32 pb-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs font-body">
                  About Me
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                The person behind the products.
              </h1>
            </motion.div>
          </div>
        </section>

        <AboutSection />
        <OperatingSystem onCaseSelect={handleCaseSelect} />
        <Footer />
      </motion.main>
    </div>
  );
};

export default About;
