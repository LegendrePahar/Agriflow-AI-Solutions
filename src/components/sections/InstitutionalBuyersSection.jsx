import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const InstitutionalBuyersSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="text-primary uppercase tracking-[0.25em] font-semibold text-sm mb-4">
              For Institutional Buyers
            </p>
            

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B132B] leading-tight mb-6">
              Reliable,
              <br />
              quality produce
              <br />
              delivered to you
            </h2>

            <div className="space-y-4 mb-8">
              {[
                "Subscription-based supply you can count on",
                "Sourced from trusted farmers, quality assured",
                "Delivered on your schedule, every week",
                "Reduce procurement stress and save time",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 bg-primary hover:bg-green-800 text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-md">
              Shop Smart. Eat Better.
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* RIGHT IMAGE — stays inside the grid as col-span-8 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 min-h-[300px] bg-gray-50 rounded-[32px] flex items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="/institutional-buyers.png"
              alt="Institutional Buyers"
              className="w-full rounded-[32px] object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InstitutionalBuyersSection;