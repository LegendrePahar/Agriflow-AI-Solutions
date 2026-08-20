import React from 'react';
import { motion } from 'framer-motion';
import {
  ScanSearch,
  BarChart3,
  Truck,
  Repeat2,
} from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Farm Gate Intelligence",
      description:
        "Computer Vision grades produce instantly — size, health, and market standard.",
      tag: "Fair pricing for farmers",
      icon: <ScanSearch className="h-9 w-9 text-primary" />,
    },
    {
      id: 2,
      title: "Demand Prediction",
      description:
        "Machine Learning predicts what cities need — before shortages happen.",
      tag: "Data-driven decisions",
      icon: <BarChart3 className="h-9 w-9 text-primary" />,
    },
    {
      id: 3,
      title: "Smart Logistics (Milk Runs)",
      description:
        "We bundle orders and optimize delivery routes, reducing transport costs.",
      tag: "Every. Single. Time.",
      icon: <Truck className="h-9 w-9 text-primary" />,
    },
    {
      id: 4,
      title: "Backhaul Optimization",
      description:
        "Trucks return with fertilizer and seeds, solving the last-mile input problem.",
      tag: "No empty trips",
      icon: <Repeat2 className="h-9 w-9 text-primary" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-green-50/40 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            HOW AGRIFLOW AI WORKS
          </p>

          {/* Small green underline */}
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-5"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Intelligent Food Flow Infrastructure
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            AgriFlow AI combines Computer Vision, Machine Learning,
            and smart logistics orchestration to eliminate waste,
            stabilize supply, and increase farmer profitability.
          </p>
        </div>

        {/* Flow Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Desktop Dotted Connector */}
          <div className="hidden lg:block absolute top-24 left-0 w-full z-0">
            <div className="border-t-2 border-dashed border-green-200 relative">

              {/* Animated moving dots */}
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-[6px] left-0 w-3 h-3 rounded-full bg-primary"
              />

              <motion.div
                animate={{ x: ["100%", "0%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-[6px] right-0 w-3 h-3 rounded-full bg-green-400"
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="relative z-10"
            >
              <div className="relative bg-white rounded-2xl border border-green-100 p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300">

                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.id}
                </div>

                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full border border-green-100 bg-green-50 flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 text-base">
                    {step.description}
                  </p>

                  {/* Tag */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-green-50 border border-green-100 text-primary text-sm font-semibold">
                    {step.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;