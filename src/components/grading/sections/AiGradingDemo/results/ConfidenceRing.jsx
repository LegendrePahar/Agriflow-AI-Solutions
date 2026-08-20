import React from "react";
import { motion } from "framer-motion";

const ConfidenceRing = ({
  percentage = 98,
}) => {

  const radius = 78;
  const stroke = 10;

  const normalizedRadius = radius - stroke / 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (percentage / 100) * circumference;

  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.6
      }}

      className="
        bg-white
        rounded-3xl
        shadow-lg
        border
        border-gray-200
        p-8
        flex
        flex-col
        items-center
      "

    >

      <h3
        className="
          text-xl
          font-bold
          text-slate-900
        "
      >

        AI Confidence

      </h3>

      <p
        className="
          mt-2
          text-gray-500
          text-center
        "
      >

        Model certainty based on
        extracted produce features.

      </p>

      {/* Ring */}

      <div className="relative mt-8">

        <svg
          width="180"
          height="180"
          className="-rotate-90"
        >

          {/* Background */}

          <circle
            stroke="#E5E7EB"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="90"
            cy="90"
          />

          {/* Progress */}

          <motion.circle

            stroke="#16A34A"

            fill="transparent"

            strokeWidth={stroke}

            strokeLinecap="round"

            r={normalizedRadius}

            cx="90"

            cy="90"

            strokeDasharray={circumference}

            initial={{
              strokeDashoffset:circumference
            }}

            animate={{
              strokeDashoffset
            }}

            transition={{
              duration:1.8,
              ease:"easeOut"
            }}

          />

        </svg>

        {/* Center */}

        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
          "
        >

          <motion.h2

            initial={{
              scale:0.8
            }}

            animate={{
              scale:1
            }}

            transition={{
              delay:0.8
            }}

            className="
              text-5xl
              font-black
              text-primary
            "

          >

            {percentage}

          </motion.h2>

          <p
            className="
              text-gray-500
              font-medium
            "
          >

            %

          </p>

        </div>

      </div>

      {/* Status */}

      <motion.div

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          delay:1
        }}

        className="
          mt-8
          px-5
          py-3
          rounded-full
          bg-green-100
          text-primary
          font-semibold
        "

      >

        Excellent Prediction Confidence

      </motion.div>

    </motion.div>

  );

};

export default ConfidenceRing;