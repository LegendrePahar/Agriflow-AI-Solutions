import React from "react";
import { motion } from "framer-motion";

const ProcessStep = ({
  icon: Icon,
  title,
  subtitle,
  theme = "green",
}) => {
  const isGreen = theme === "green";

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        w-full
        max-w-[84px]
        mx-auto
        flex
        flex-col
        items-center
        text-center
        select-none
      "
    >
      {/* Icon Circle */}

      <div
        className={`
          w-16
          h-16
          rounded-full
          bg-white
          border
          shadow-sm
          flex
          items-center
          justify-center
          transition-all
          duration-300

          ${
            isGreen
              ? "border-green-200 hover:border-primary"
              : "border-red-200 hover:border-red-400"
          }
        `}
      >
        {Icon && (
          <Icon
            size={24}
            strokeWidth={2}
            className={
              isGreen
                ? "text-primary"
                : "text-red-500"
            }
          />
        )}
      </div>

      {/* Title */}

      <h4
        className="
          mt-4
          text-[15px]
          font-bold
          leading-tight
          text-slate-900
          min-h-[42px]
          flex
          items-center
          justify-center
        "
      >
        {title}
      </h4>

      {/* Subtitle */}

      {subtitle && (
        <p
          className="
            mt-1
            text-[12px]
            leading-snug
            text-slate-500
            min-h-[32px]
            flex
            items-start
            justify-center
          "
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default ProcessStep;