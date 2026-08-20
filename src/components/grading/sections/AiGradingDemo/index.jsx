import React from "react";
import { motion } from "framer-motion";

import AIWorkflow from "./workflow/AIWorkflow";
import UploadBox from "./upload/UploadBox";
import ResultCard from "./results/ResultCard";

const AiGradingDemo = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/5 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100 rounded-full blur-[120px] opacity-50" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Grid */}

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AIWorkflow />
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <UploadBox />

            <ResultCard />
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AiGradingDemo;