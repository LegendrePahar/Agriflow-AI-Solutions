import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const FeatureList = ({
  features = [],
  title = "Detected Features",
  subtitle = "Key characteristics identified by AgriFlow AI.",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      }}
      className="
        rounded-3xl
        bg-white
        border
        border-gray-200
        shadow-sm
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-start gap-4">

        {/* Icon */}

        <div
          className="
            w-12
            h-12
            shrink-0
            rounded-xl
            bg-primary/10
            flex
            items-center
            justify-center
          "
        >
          <Sparkles
            size={22}
            className="text-primary"
          />
        </div>

        {/* Heading */}

        <div>
          <h3
            className="
              text-lg
              font-bold
              text-slate-900
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
              leading-6
            "
          >
            {subtitle}
          </p>
        </div>

      </div>

      {/* Feature List */}

      <div className="mt-6 grid sm:grid-cols-2 gap-3">

        {features.length > 0 ? (
          features.map((feature, index) => (

            <motion.div
              key={`${feature}-${index}`}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.35,
              }}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-green-50
                border
                border-green-100
                px-4
                py-3
              "
            >
              <CheckCircle2
                size={19}
                className="
                  shrink-0
                  text-primary
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                {feature}
              </span>

            </motion.div>

          ))
        ) : (

          <div
            className="
              sm:col-span-2
              rounded-xl
              bg-gray-50
              px-4
              py-5
              text-center
              text-sm
              text-gray-500
            "
          >
            No features detected yet.
          </div>

        )}

      </div>

    </motion.div>
  );
};

export default FeatureList;