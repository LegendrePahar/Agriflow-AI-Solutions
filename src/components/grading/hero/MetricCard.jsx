import React from "react";
import { motion } from "framer-motion";

const MetricCard = ({
  icon: Icon,
  label,
  value,
  color = "text-primary",
  bg = "bg-green-50",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        p-4
      "
    >
      {/* Top */}

      <div className="flex items-center justify-between mb-4">

        <div
          className={`
            w-11
            h-11
            rounded-xl
            ${bg}
            flex
            items-center
            justify-center
          `}
        >
          {Icon && (
            <Icon
              size={22}
              className={color}
            />
          )}
        </div>

      </div>

      {/* Value */}

      <h3
        className="
          text-2xl
          font-black
          text-slate-900
          leading-none
        "
      >
        {value}
      </h3>

      {/* Label */}

      <p
        className="
          text-sm
          text-slate-500
          mt-2
        "
      >
        {label}
      </p>

    </motion.div>
  );
};

export default MetricCard;