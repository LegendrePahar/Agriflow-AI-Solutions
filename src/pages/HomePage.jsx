import React from "react";

import HeroSection from "../components/sections/HeroSection";
import ProblemSection from "../components/sections/ProblemSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import MilkRunSection from "../components/sections/MilkRunSection";
import PricingSection from "../components/sections/PricingSection";
import ImpactMetricsSection from "../components/sections/ImpactMetricsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

const HomePage = () => {

  return (

    <>

      <HeroSection />

      <ProblemSection />

      <HowItWorksSection />

      <SolutionsSection />

      <MilkRunSection />

      <PricingSection />

      {/* Impact destination */}
      <ImpactMetricsSection />

      <TestimonialsSection />

      {/* Contact / conversion destination */}
      <CTASection />

    </>

  );

};

export default HomePage;