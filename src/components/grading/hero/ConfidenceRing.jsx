import React from "react";
import { motion } from "framer-motion";

const ConfidenceRing = ({ percentage = 98 }) => {
  const radius = 46;
  const stroke = 8;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">

      <svg
        className="absolute inset-0 -rotate-90"
        width="112"
        height="112"
      >
        {/* Background */}

        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="56"
          cy="56"
        />

        {/* Progress */}

        <motion.circle
          stroke="#16A34A"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="56"
          cy="56"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
        />

      </svg>

      {/* Center */}

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.5,
        }}
        className="text-center"
      >
        <h3 className="text-2xl font-black text-slate-900">
          {percentage}%
        </h3>

        <p className="text-xs text-slate-500 mt-1">
          Confidence
        </p>
      </motion.div>

    </div>
  );
};

export default ConfidenceRing;