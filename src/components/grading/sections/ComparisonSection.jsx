import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Eye,
  Handshake,
  Banknote,
  Smartphone,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";

import ComparisonCard from "./ComparisonCard";

const traditionalSteps = [
  {
    icon: User,
    title: "Farmer",
    subtitle: "",
  },
  {
    icon: User,
    title: "Middleman",
    subtitle: "",
  },
  {
    icon: Eye,
    title: "Visual Guess",
    subtitle: '"Looks good"',
  },
  {
    icon: Handshake,
    title: "Negotiation",
    subtitle: "",
  },
  {
    icon: Banknote,
    title: "Unfair Price",
    subtitle: "₦7,000",
  },
];

const aiSteps = [
  {
    icon: User,
    title: "Farmer",
    subtitle: "",
  },
  {
    icon: Smartphone,
    title: "Upload Image",
    subtitle: "",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    subtitle: "",
  },
  {
    icon: BadgeCheck,
    title: "Grade A",
    subtitle: "",
  },
  {
    icon: Banknote,
    title: "Fair Price",
    subtitle: "₦12,500",
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Transparent Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/north-waste.png')` }}
      />
      {/* Subtle Red Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-red-950/70
          via-red-900/60
          to-red-950/65
        "
        />
      {/* Smooth Gradient Mask to blend seamlessly with white section background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
            Stop Guessing.
            <span className="text-primary"> Start Measuring.</span>
          </h2>
          <p className="text-white mt-4 text-base sm:text-lg">
            Traditional pricing depends on opinions. AgriFlow AI uses standardized computer vision.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-2 lg:gap-3 items-center justify-center">
          
          {/* Traditional Card */}
          <div className="w-full">
            <ComparisonCard
              title="Traditional Buying"
              theme="red"
              steps={traditionalSteps}
              badges={[
                "Subjective",
                "Inconsistent",
                "No Standard",
                "Farmer Disadvantaged",
              ]}
            />
          </div>

          {/* Compact VS Badge */}
          <div className="flex justify-center items-center my-2 lg:my-0 lg:-mx-4 z-10">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                w-12
                h-12
                lg:w-14
                lg:h-14
                rounded-full
                bg-primary
                flex
                items-center
                justify-center
                text-white
                text-base
                lg:text-lg
                font-black
                shadow-xl
                shrink-0
              "
            >
              VS
            </motion.div>
          </div>

          {/* AI Card */}
          <div className="w-full">
            <ComparisonCard
              title="AgriFlow AI"
              theme="green"
              steps={aiSteps}
              badges={[
                "Objective",
                "Consistent",
                "Standardized",
                "Farmer Empowered",
              ]}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;