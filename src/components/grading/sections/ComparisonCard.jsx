import React from "react";
import { motion } from "framer-motion";

import ProcessStep from "./ProcessStep";
import AnimatedArrow from "./AnimatedArrow";

const ComparisonCard = ({
  title,
  theme = "green",
  steps = [],
  badges = [],
}) => {
  const isGreen = theme === "green";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        h-full
        min-h-[380px]
        rounded-3xl
        border
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        overflow-hidden

        ${
          isGreen
            ? "bg-green-50/60 border-green-200"
            : "bg-red-50/60 border-red-200"
        }
      `}
    >
      {/* Title */}

      <h3
        className={`
          text-center
          font-bold
          text-2xl
          mb-8

          ${
            isGreen
              ? "text-primary"
              : "text-red-600"
          }
        `}
      >
        {title}
      </h3>

      {/* Process Flow */}

      <div className="flex items-start justify-between gap-2">

        {steps.map((step, index) => (
          <React.Fragment key={index}>

            <div className="flex-1 flex justify-center">
              <ProcessStep
                {...step}
                theme={theme}
              />
            </div>

            {index !== steps.length - 1 && (
              <div className="flex items-center pt-8">
                <AnimatedArrow theme={theme} />
              </div>
            )}

          </React.Fragment>
        ))}

      </div>

      {/* Badges */}

      <div className="flex flex-wrap justify-center gap-2 mt-10">

        {badges.map((badge, index) => (

          <span
            key={index}
            className={`
              px-3
              py-1.5
              rounded-full
              text-[11px]
              font-semibold

              ${
                isGreen
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }
            `}
          >
            ✓ {badge}
          </span>

        ))}

      </div>
    </motion.div>
  );
};

export default ComparisonCard;