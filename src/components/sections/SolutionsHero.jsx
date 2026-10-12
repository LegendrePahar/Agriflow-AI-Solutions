import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Truck, Building2, Landmark } from "lucide-react";

const floatingIcons = [
  { icon: <Sprout size={22} />, top: "8%", left: "62%", delay: 0 },
  { icon: <Truck size={22} />, top: "15%", right: "10%", delay: 0.8 },
  { icon: <Building2 size={22} />, top: "58%", right: "6%", delay: 1.5 },
  { icon: <Landmark size={22} />, bottom: "14%", left: "68%", delay: 2 },
];

const SolutionsHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-4 sm:pt-32 sm:pb-8">
      {/*<div className="max-w-7xl mx-auto px-6 lg:px-10">*/}
      <div className="w-full pl-4 lg:pl-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 lg:gap-0 items-center">
        {/*<div className="grid lg:grid-cols-2 gap-12 items-start">*/}

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center pt-4 sm:pt-8"
          >
            <p className="uppercase tracking-[0.2em] text-primary font-semibold text-sm mb-5">
              OUR SOLUTIONS
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0B132B] mb-4 sm:mb-6">
              Smart solutions for
              <br />
              every link in the
              <br />
              <span className="text-primary">food chain</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 max-w-xl mb-4">
              From farmers to institutional buyers, logistics partners and
              government agencies — AgriFlow AI provides the tools, data and
              network to move food better.
            </p>

            {/* CTA — links to the AI Produce Grading page */}
            <Link
              to="/ai-produce-grading#ai-grading-demo"
              className="w-fit"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-green-700 text-white px-8 py-2 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg transition w-fit"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full"
          >
            {/* Image wrapper — floating icons position relative to this */}
            <div className="relative h-[220px] sm:h-[320px] lg:h-[520px] w-full flex items-center justify-center overflow-hidden">
              <img
                src="/hero-solutions.png"
                alt="AgriFlow Solutions"
                className="w-[108%] lg:w-[112%] h-auto object-contain translate-x-2 lg:translate-x-4"
              />

              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: item.delay,
                  }}
                  className="absolute bg-white shadow-xl rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center text-primary"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;