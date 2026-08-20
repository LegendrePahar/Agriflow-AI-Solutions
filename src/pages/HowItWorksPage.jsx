import HowItWorksHero from "../components/howitworks/HowItWorksHero";
import ProcessSection from "../components/howitworks/ProcessSection";
import QualityPassportSection from "../components/howitworks/QualityPassportSection";
import StatsCTASection from "../components/howitworks/StatsCTASection";

const HowItWorksPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <HowItWorksHero />
      <ProcessSection />
      <QualityPassportSection />
      <StatsCTASection />
    </div>
  );
};

export default HowItWorksPage;