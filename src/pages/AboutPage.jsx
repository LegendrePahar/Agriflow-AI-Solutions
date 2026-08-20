import AboutHero from "../components/about/AboutHero";
import ProblemSection from "../components/about/ProblemSection";
import MissionVision from "../components/about/MissionVision";
import ImpactSection from "../components/about/ImpactSection";
import ValuesSection from "../components/about/ValuesSection";
import AboutCTA from "../components/about/AboutCTA";

const AboutPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <AboutHero />
      <ProblemSection />
      <MissionVision />
      <ImpactSection />
      <ValuesSection />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
