import React from "react";
import { motion } from "framer-motion";
import {
  Tractor,
  Building2,
  Truck,
 Landmark,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Tractor,
    title: "Farmers",
    description:
      "Grow more. Earn more.\nWe buy your produce directly, graded fairly by AI, at guaranteed prices.",
  },
  {
    icon: Building2,
    title: "Institutional Buyers",
    description:
      "Reliable supply.\nQuality assured.\nDelivered on schedule.",
  },
  {
    icon: Truck,
    title: "Logistics Partners",
    description:
      "Smarter routes.\nFill empty trucks.\nCreate more value in every trip.",
  },
  {
    icon: Landmark,
    title: "Government & NGOs",
    description:
      "Data-driven insights and partnerships for a stronger food-secure Nigeria.",
  },
];

const SolutionsGridSection = () => {
  return (
    <section
      id="solutions-grid"
      className="py-8 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Solutions For Everyone
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-6"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B132B]">
            Built for every link in the food chain
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're growing food, transporting it, purchasing it,
            or shaping national food policy, AgriFlow AI provides
            purpose-built tools for every stakeholder.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  border
                  border-gray-100
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    mb-7
                    shadow-lg
                  "
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-[#0B132B] mb-5">
                  {solution.title}
                </h3>

                {/* Description */}

                <p className="text-gray-600 leading-8 whitespace-pre-line mb-8">
                  {solution.description}
                </p>

                {/* Learn More */}

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-primary
                    group-hover:gap-3
                    transition-all
                    duration-300
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGridSection;