import React from "react";
import { motion } from "framer-motion";

const WorkflowStep = ({
  id,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        relative
        bg-white
        rounded-3xl
        border
        border-gray-200
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        p-6
        overflow-hidden
      "
    >

      {/* Green Accent Bar */}

      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

      {/* Step Number */}

      <div
        className="
          absolute
          top-5
          right-5
          w-8
          h-8
          rounded-full
          bg-primary/10
          flex
          items-center
          justify-center
          text-primary
          font-bold
          text-sm
        "
      >
        {String(id).padStart(2, "0")}
      </div>

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          w-16
          h-16
          rounded-2xl
          bg-primary/10
          flex
          items-center
          justify-center
          mb-6
        "
      >
        <Icon
          size={30}
          className="text-primary"
        />
      </motion.div>

      {/* Title */}

      <h3
        className="
          text-xl
          font-bold
          text-slate-900
          mb-3
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          text-slate-600
          leading-7
          text-[15px]
        "
      >
        {description}
      </p>

    </motion.div>
  );
};

export default WorkflowStep;