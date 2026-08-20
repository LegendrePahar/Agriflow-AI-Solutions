import React from "react";
import { motion } from "framer-motion";

const MetricCard = ({
  icon: Icon,
  title,
  value,
  unit = "",
  color = "green",
}) => {

  const colors = {
    green: {
      bg: "bg-green-50",
      icon: "bg-primary/10 text-primary",
      value: "text-primary",
    },

    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      value: "text-blue-600",
    },

    orange: {
      bg: "bg-orange-50",
      icon: "bg-orange-100 text-orange-600",
      value: "text-orange-600",
    },

    purple: {
      bg: "bg-purple-50",
      icon: "bg-purple-100 text-purple-600",
      value: "text-purple-600",
    },
  };

  const theme = colors[color] || colors.green;

  return (

    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        ${theme.bg}
        rounded-2xl
        p-5
        border
        border-gray-100
        shadow-sm
        hover:shadow-lg
        transition-all
      `}
    >

      {/* Top */}

      <div className="flex items-center justify-between">

        <div
          className={`
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center

            ${theme.icon}
          `}
        >
          <Icon size={22} />
        </div>

      </div>

      {/* Value */}

      <h2
        className={`
          mt-6
          text-3xl
          font-black

          ${theme.value}
        `}
      >
        {value}

        <span className="text-lg ml-1">

          {unit}

        </span>

      </h2>

      {/* Label */}

      <p
        className="
          mt-2
          text-gray-600
          font-medium
        "
      >
        {title}
      </p>

    </motion.div>

  );

};

export default MetricCard;