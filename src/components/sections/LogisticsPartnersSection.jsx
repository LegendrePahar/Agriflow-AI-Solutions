import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const LogisticsPartnersSection = () => {
  return (
    <section
      id="logistics-partners"
      className="py-8 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 items-center gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >

            <p className="uppercase tracking-[0.2em] text-primary font-semibold text-sm mb-5">
              For Logistics Partners
            </p>
            

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0B132B] leading-tight mb-4 sm:mb-6">
  Optimize routes.
  <br />
  Maximize value.
</h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our AI-powered logistics platform ensures every trip is
              profitable by eliminating empty return journeys,
              optimizing delivery routes, and giving drivers real-time
              visibility across the supply chain.
            </p>

            <div className="space-y-5 mb-10">

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-700">
                  AI-powered route optimization
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-700">
                  Full truckloads, fewer empty return trips
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-700">
                  Real-time fleet tracking and delivery updates
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-700">
                  Increase driver earnings and fleet efficiency
                </p>
              </div>

            </div>

            <button
              className="
                inline-flex
                items-center
                gap-2
                bg-primary
                hover:bg-primary/90
                text-white
                px-7
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                shadow-lg
              "
            >
              Drive More. Earn More.
              <ArrowRight className="w-5 h-5" />
            </button>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >

            <motion.img
              src="/logistics-solution.png"
              alt="AgriFlow AI Logistics Platform"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                w-full
                rounded-[28px]
                object-cover
                drop-shadow-2xl
              "
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LogisticsPartnersSection;