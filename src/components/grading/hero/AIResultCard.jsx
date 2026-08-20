import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Leaf,
  CircleCheckBig,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import ConfidenceRing from "./ConfidenceRing";
import MetricCard from "./MetricCard";

const AIResultCard = () => {

  // Future:
  // camera
  // loading
  // result

  const state = "result";

  if (state !== "result") return null;

  return (

    <motion.div

      initial={{
        opacity: 0,
        x: 40,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.8,
      }}

      className="
        bg-white
        rounded-[32px]
        shadow-2xl
        border
        border-green-100
        overflow-hidden
        w-full
        max-w-md
        mx-auto
      "
    >

      {/* Header */}

      <div className="px-7 py-6 border-b">

        <div className="flex justify-between items-center">

          <div>

            <h3 className="font-bold text-2xl text-slate-900">
              AI Grading Result
            </h3>

            <p className="text-slate-500 mt-1">
              Standardized Produce Assessment
            </p>

          </div>

          <div
            className="
              bg-green-100
              text-primary
              rounded-full
              p-3
            "
          >
            <Sparkles size={22}/>
          </div>

        </div>

      </div>

      {/* Produce */}

      <div className="p-7">

        <div
          className="
            rounded-3xl
            overflow-hidden
            bg-[#F7FBF6]
            mb-8
          "
        >

          <img
            src="/sample-yam.jpg"
            alt=""
            className="
              w-full
              h-56
              object-cover
            "
          />

        </div>

        {/* Grade */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-slate-500 text-sm">
              Assigned Grade
            </p>

            <h2 className="text-5xl font-black text-primary mt-2">
              Grade A
            </h2>

          </div>

          <ConfidenceRing
            percentage={98}
          />

        </div>

        {/* Metrics */}

      <div className="grid grid-cols-3 gap-4">

        <MetricCard
          icon={Scale}
          label="Weight"
          value="10 kg"
          color="text-blue-600"
          bg="bg-blue-50"
        />

        <MetricCard
          icon={Leaf}
          label="Freshness"
          value="98%"
          color="text-green-600"
          bg="bg-green-50"
        />

        <MetricCard
          icon={CircleCheckBig}
          label="Defects"
          value="None"
          color="text-emerald-600"
          bg="bg-emerald-50"
        />

      </div>

        {/* Price */}

        <motion.div

          whileHover={{
            scale: 1.02,
          }}

          className="
            mt-8
            bg-primary
            rounded-2xl
            p-6
            text-white
          "
        >

          <p className="text-white/80">
            Estimated Market Value
          </p>

          <div className="flex justify-between items-center mt-2">

            <h2 className="text-4xl font-black">

              ₦12,500

            </h2>

            <CheckCircle2 />

          </div>

        </motion.div>

        {/* Button */}

        <button

          className="
            w-full
            mt-8
            bg-slate-900
            hover:bg-black
            transition
            rounded-xl
            py-4
            text-white
            font-semibold
            flex
            justify-center
            items-center
            gap-3
          "

        >

          View Full Report

          <ArrowRight
            size={18}
          />

        </button>

      </div>

    </motion.div>

  );

};

export default AIResultCard;