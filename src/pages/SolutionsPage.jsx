import SolutionsHero from "../components/sections/SolutionsHero";
import SolutionsGridSection from "../components/sections/SolutionsGridSection";
import FarmerSolutionSection from "../components/sections/FarmerSolutionSection";
import InstitutionalBuyersSection from "../components/sections/InstitutionalBuyersSection";
import LogisticsPartnersSection from "../components/sections/LogisticsPartnersSection";
import GovernmentSolutionsSection from "../components/sections/GovernmentSolutionsSection";
import SolutionsCTASection from "../components/sections/SolutionsCTASection";

const SolutionsPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <SolutionsHero />
      <SolutionsGridSection />
      <FarmerSolutionSection />
      <InstitutionalBuyersSection />
      <LogisticsPartnersSection />
      <GovernmentSolutionsSection />
      <SolutionsCTASection />
    </div>
  );
};

export default SolutionsPage;
