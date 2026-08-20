import HeroSection from "../components/grading/HeroSection";
import ComparisonSection from "../components/grading/sections/ComparisonSection";
import AiGradingDemo from "../components/grading/sections/AiGradingDemo/AiGradingDemo";
import FutureRoadmap from "../components/grading/sections/FutureRoadmap";
import CTASection from "../components/grading/sections/CTASection";


const ProduceGradingPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <ComparisonSection />
      <AiGradingDemo />
      <FutureRoadmap />
      <CTASection />
    </div>
  );
};

export default ProduceGradingPage;

