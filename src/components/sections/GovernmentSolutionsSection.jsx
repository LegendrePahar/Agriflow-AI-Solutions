import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const GovernmentSolutionsSection = () => {
  return (
    <section
      id="government"
      className="py-14 bg-[#FAFCFA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/government-solution.png"
              alt="Government Dashboard"
              className="
                w-full
                rounded-3xl
                shadow-xl
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[0.22em] text-primary font-semibold text-sm mb-4">
              FOR GOVERNMENT & NGOs
            </p>

           <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0B132B] leading-tight mb-4 sm:mb-6">
  Data and partnerships
  <br />
  for a food secure Nigeria
</h2>

            <div className="space-y-4 mb-10">

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1" size={20}/>
                <span className="text-gray-700 text-lg">
                  Real-time data on supply and demand
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1" size={20}/>
                <span className="text-gray-700 text-lg">
                  Monitor food security and reduce waste
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1" size={20}/>
                <span className="text-gray-700 text-lg">
                  Design better policies and interventions
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1" size={20}/>
                <span className="text-gray-700 text-lg">
                  Partnerships that create measurable impact
                </span>
              </div>

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                inline-flex
                items-center
                gap-3
                bg-primary
                hover:bg-primary/90
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-lg
                transition-all
              "
            >
              Partner For Impact

              <div className="bg-white rounded-full p-1">
                <ArrowRight
                  size={16}
                  className="text-primary"
                />
              </div>

            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GovernmentSolutionsSection;