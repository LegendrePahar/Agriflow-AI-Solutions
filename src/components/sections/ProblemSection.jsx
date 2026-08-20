import React from "react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative bg-[#07120A] overflow-hidden my-0">

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[250px] lg:min-h-[320px] overflow-hidden"
        >
          <img
            src="/north-farm.png"
            alt="Northern Produce Waste"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-orange-800/75 to-black/75"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16 py-8">
            <p className="text-orange-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              THE PROBLEM
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-4 max-w-xl">
              Abundance in the North,
              <br />
              Scarcity in the South.
            </h2>
            <p className="text-base text-orange-100/90 leading-relaxed max-w-lg">
              40% of produce is wasted due to poor logistics,
              fragmented transportation, and market inefficiencies.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[250px] lg:min-h-[320px] overflow-hidden"
        >
          <img
            src="/south-market.png"
            alt="Southern Market Scarcity"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/90 via-red-900/80 to-black/80"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16 py-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-4 max-w-xl">
              While cities face
              <br />
              high prices and
              <br />
              inconsistent supply.
            </h2>
            <p className="text-base text-red-100/90 leading-relaxed max-w-lg">
              Urban food prices remain unstable while millions
              struggle with delayed deliveries and inconsistent access to food.
            </p>
          </div>
        </motion.div>

      </div>

      {/* CENTER DIVIDER */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-12 h-12 rounded-full bg-orange-400 border-4 border-white flex items-center justify-center shadow-2xl">
          <span className="text-white text-2xl font-bold">!</span>
        </div>
      </div>

    </section>
  );
};

export default ProblemSection;