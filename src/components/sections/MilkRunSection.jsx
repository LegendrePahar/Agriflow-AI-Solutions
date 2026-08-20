import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const MilkRunSection = () => {
  return (
    <section
      id="milk-run-model"
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div className="lg:col-span-4">

            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              OUR SIGNATURE ADVANTAGE
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B132B] mb-5 leading-tight">
              The Milk Run Model
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Moving more.
              <br />
              Wasting less.
              <br />
              Earning more.
            </p>

            <div className="space-y-5">

              {/* Bullet 1 */}

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>

                <span className="text-gray-700">
                  <span className="font-semibold text-green-600">
                    North → South:
                  </span>{" "}
                  Fresh Produce
                </span>
              </div>

              {/* Bullet 2 */}

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>

                <span className="text-gray-700">
                  <span className="font-semibold text-orange-500">
                    South → North:
                  </span>{" "}
                  Inputs (fertilizer, seeds)
                </span>
              </div>

              {/* Bullet 3 */}

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>

                <span className="text-gray-700">
                  No empty trucks. No wasted trips.
                </span>
              </div>

              {/* Bullet 4 */}

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>

                <span className="text-gray-700">
                  Lower cost. Higher efficiency.
                </span>
              </div>

              {/* Bullet 5 */}

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>

                <span className="text-gray-700">
                  Stronger supply chain.
                </span>
              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* INFOGRAPHIC IMAGE */}
          {/* ========================= */}

          <div className="lg:col-span-8 h-full flex">

            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="/Milk-run-model.png"
              alt="AgriFlow AI Milk Run Model"
              className="
                w-full
                h-full
                object-cover
                rounded-3xl
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default MilkRunSection;