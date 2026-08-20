import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sprout, Brain, ShoppingCart, Truck, Building2 } from "lucide-react";

const flowSteps = [
  { icon: <Sprout size={20} />, label: "Farmer" },
  { icon: <Brain size={20} />, label: "AI Grading & Fair Pricing" },
  { icon: <ShoppingCart size={20} />, label: "AgriFlow AI Purchases" },
  { icon: <Truck size={20} />, label: "Smart Logistics" },
  { icon: <Building2 size={20} />, label: "Institution Delivery" },
];

const HowItWorksHero = () => {
  return (
    <section className="relative bg-white pt-32 pb-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              How It Works
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0B132B] leading-tight mb-6">
              From Farm Gate to
              <br />
              Certified Delivery.
              <br />
              <span className="text-primary">Powered by AI.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              AgriFlow AI combines computer vision, market intelligence and
              smart logistics to standardize produce quality, ensure fair
              pricing for farmers and deliver trusted food to institutions.
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 inline-flex flex-col gap-3 w-fit">
              {[
                "Every produce is AI-graded.",
                "Every price is fair.",
                "Every delivery is trusted.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-[#0B132B] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Flow steps */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              {flowSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2 text-center max-w-[80px]">
                    <div className="w-14 h-14 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#0B132B] leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex-1 h-px border-t-2 border-dashed border-primary/30 min-w-[12px]" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Hero image */}
            <div className="rounded-[32px] overflow-hidden bg-gray-50 min-h-[320px] flex items-center justify-center">
              <img
                src="/hero-how-it-works.png"
                alt="Farmer with AgriFlow truck"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;