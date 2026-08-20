import React from "react";
import { motion } from "framer-motion";

import WorkflowStep from "./WorkflowStep";
import { workflowSteps } from "./workflowData";

const AIWorkflow = () => {
  return (
    <div className="max-w-2xl">

      {/* Section Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-green-50
          border
          border-green-100
          px-4
          py-2
          mb-6
        "
      >
        <div className="w-2 h-2 rounded-full bg-primary" />

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-primary
          "
        >
          AI Workflow
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl
          lg:text-5xl
          font-black
          leading-tight
          text-slate-900
        "
      >
        How Our AI
        <span className="text-primary">
          {" "}Works
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="
          mt-6
          text-lg
          leading-8
          text-slate-600
          max-w-xl
        "
      >
        Every uploaded produce image passes through a
        standardized computer vision pipeline before a
        quality grade and recommended farm-gate price
        are generated.
      </motion.p>

      {/* Workflow */}

      <div className="relative mt-12">

        {/* Vertical Timeline */}

        <div
          className="
            absolute
            left-8
            top-10
            bottom-10
            w-[3px]
            rounded-full
            bg-gradient-to-b
            from-primary
            via-green-300
            to-primary
          "
        />

        {/* Workflow Cards */}

        <div className="space-y-8">

          {workflowSteps.map((step, index) => (

            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              className="relative pl-16"
            >
              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  left-[22px]
                  top-7
                  w-5
                  h-5
                  rounded-full
                  bg-primary
                  border-4
                  border-white
                  shadow-md
                "
              />

              <WorkflowStep {...step} />

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default AIWorkflow;