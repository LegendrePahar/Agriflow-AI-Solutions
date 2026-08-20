import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  BrainCircuit,
  Leaf,
} from "lucide-react";

const values = [
  {
    title: "Farmer First",
    description:
      "Everything we build starts with improving farmer outcomes.",
    icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    title: "Transparency",
    description:
      "Fair pricing and clear transactions across the value chain.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    title: "Innovation",
    description:
      "Using AI and data to solve real-world agricultural challenges.",
    icon: <BrainCircuit className="w-8 h-8 text-white" />,
  },
  {
    title: "Sustainability",
    description:
      "Reducing waste while strengthening food systems.",
    icon: <Leaf className="w-8 h-8 text-white" />,
  },
];

const ValueItem = ({ value, divider }) => (
  <div
    className={`flex items-center gap-6 px-8 py-8 ${
      divider ? "border-r border-gray-200" : ""
    }`}
  >
    {/* Icon */}

    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-sm">
      {value.icon}
    </div>

    {/* Text */}

    <div>
      <h3 className="text-2xl font-bold text-[#0B132B] mb-2">
        {value.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {value.description}
      </p>
    </div>
  </div>
);

const CoreValuesSection = () => {
  return (
    <section className="py-10 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-widest font-semibold text-sm mb-3">
            OUR CORE VALUES
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B132B]">
            What Drives Us
          </h2>
        </motion.div>

        {/* Card One */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-2">

            <ValueItem
              value={values[0]}
              divider={true}
            />

            <ValueItem
              value={values[1]}
            />

          </div>
        </motion.div>

        {/* Card Two */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          whileHover={{
            y: -6,
            scale: 1.01,
          }}
          className="
          bg-white
          rounded-[30px]
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-all
          duration-300
          overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2">

            <ValueItem
              value={values[2]}
              divider={true}
            />

            <ValueItem
              value={values[3]}
            />

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default CoreValuesSection;