import React from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-8 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-widest mb-3">
            WHY AI MATTERS
          </p>

          <h2 className="text-2xl sm:text-2xl lg:text-5xl text-slate-900 mb-4 sm:mb-4">
            Stop Guessing.
            <span className="text-primary"> Start Measuring.</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Traditional produce pricing depends on visual judgment and
            negotiation. AgriFlow AI replaces subjective opinions with
            measurable quality standards powered by Artificial Intelligence.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="space-y-8">

            {/* Traditional */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg border border-red-100 p-8"
            >

              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-500" size={34} />

                <h3 className="text-2xl font-bold text-slate-900">
                  Traditional Buying
                </h3>
              </div>

              <ul className="space-y-4 text-slate-600">

                <li className="flex items-start gap-3">
                  <ArrowRight className="text-red-500 mt-1" size={18} />
                  Middlemen determine prices by visual inspection.
                </li>

                <li className="flex items-start gap-3">
                  <ArrowRight className="text-red-500 mt-1" size={18} />
                  Two identical yams may receive different prices.
                </li>

                <li className="flex items-start gap-3">
                  <ArrowRight className="text-red-500 mt-1" size={18} />
                  Farmers often lose value through negotiation.
                </li>

                <li className="flex items-start gap-3">
                  <ArrowRight className="text-red-500 mt-1" size={18} />
                  Buyers cannot verify produce quality before delivery.
                </li>

              </ul>

            </motion.div>

            {/* AI */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary rounded-3xl shadow-xl p-8 text-white"
            >

              <div className="flex items-center gap-3 mb-6">

                <CheckCircle size={34} />

                <h3 className="text-2xl font-bold">
                  AgriFlow AI
                </h3>

              </div>

              <ul className="space-y-4 text-white/90">

                <li className="flex items-start gap-3">
                  <ArrowRight size={18} className="mt-1" />
                  AI evaluates every produce using measurable features.
                </li>

                <li className="flex items-start gap-3">
                  <ArrowRight size={18} className="mt-1" />
                  Grade A, B and C become the pricing standard.
                </li>

                <li className="flex items-start gap-3">
                  <ArrowRight size={18} className="mt-1" />
                  Farmers receive transparent and consistent offers.
                </li>

                <li className="flex items-start gap-3">
                  <ArrowRight size={18} className="mt-1" />
                  Buyers know exactly what quality they are purchasing.
                </li>

              </ul>

            </motion.div>

          </div>

          {/* Right Illustration */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <img
              src="/traditional-vs-ai.png"
              alt="Traditional Pricing vs AI Pricing"
              className="w-full object-contain drop-shadow-2xl"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProblemSection;