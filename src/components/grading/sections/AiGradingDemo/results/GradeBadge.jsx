import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const gradeColors = {
  A: {
    bg: "bg-green-100",
    text: "text-green-700",
    ring: "ring-green-300",
  },

  B: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    ring: "ring-yellow-300",
  },

  C: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    ring: "ring-orange-300",
  },

  D: {
    bg: "bg-red-100",
    text: "text-red-700",
    ring: "ring-red-300",
  },
};

const GradeBadge = ({
  grade = "A",
  confidence = 98,
}) => {

  const color =
    gradeColors[grade] || gradeColors.A;

  return (

    <motion.div

      initial={{
        scale:0.8,
        opacity:0
      }}

      animate={{
        scale:1,
        opacity:1
      }}

      transition={{
        type:"spring",
        stiffness:120
      }}

      className="
        flex
        flex-col
        items-center
        justify-center
      "

    >

      {/* Grade Circle */}

      <motion.div

        animate={{
          scale:[1,1.05,1]
        }}

        transition={{
          repeat:Infinity,
          duration:2
        }}

        className={`
          w-36
          h-36
          rounded-full

          ${color.bg}

          ${color.ring}

          ring-8

          flex
          items-center
          justify-center

          shadow-lg
        `}
      >

        <span
          className={`
            text-6xl
            font-black

            ${color.text}
          `}
        >

          {grade}

        </span>

      </motion.div>

      {/* Label */}

      <div className="mt-6 flex items-center gap-2">

        <BadgeCheck
          size={20}
          className={color.text}
        />

        <span
          className={`
            font-semibold

            ${color.text}
          `}
        >

          Premium Quality

        </span>

      </div>

      {/* Confidence */}

      <p className="mt-2 text-gray-500">

        AI Confidence

        <span className="font-bold text-slate-800">

          {" "}
          {confidence}%

        </span>

      </p>

    </motion.div>

  );

};

export default GradeBadge;