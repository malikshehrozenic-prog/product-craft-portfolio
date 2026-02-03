import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import ApproachSection from "@/components/ApproachSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CaseStudies />
      <ApproachSection />
      <Footer />
    </main>
  );
};

export default Index;
