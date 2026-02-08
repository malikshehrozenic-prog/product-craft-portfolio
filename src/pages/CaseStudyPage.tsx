import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import ScrollProgress from "@/components/ScrollProgress";
import { CASE_STUDIES } from "@/data/caseStudies";

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const studyIndex = id ? CASE_STUDIES.findIndex(s => s.id === id) : -1;
  const study = studyIndex >= 0 ? CASE_STUDIES[studyIndex] : null;
  const nextStudy = studyIndex >= 0 && studyIndex < CASE_STUDIES.length - 1 
    ? CASE_STUDIES[studyIndex + 1] 
    : null;

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (nextStudy) {
      navigate(`/case-study/${nextStudy.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!study) {
    navigate("/");
    return null;
  }

  return (
    <div className="noise">
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <CaseStudyDetail
          key={study.id}
          study={study}
          onBack={handleBack}
          onNext={nextStudy ? handleNext : undefined}
          nextStudy={nextStudy}
        />
      </AnimatePresence>
    </div>
  );
};

export default CaseStudyPage;
