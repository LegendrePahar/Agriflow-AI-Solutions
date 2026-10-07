import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-6 sm:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-0 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              ABOUT AGRIFLOW AI
            </p>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#0B132B] mb-4 sm:mb-6">
              Standardizing Agricultural
              <br />
              <span className="text-primary">Produce.</span> Building Nigeria's
              <br />
              Smart Food Flow.
            </h1>



            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              AgriFlow-AI uses AI to standardize produce quality and establish a data-driven basis 
              for valuation at the farm gate. We purchase directly from farmers, aggregate 
              standardized produce, and build a smarter flow of food from farms to institutions 
              across Nigeria.
            </p>
            
            <div className="flex flex-row flex-nowrap gap-3 sm:gap-4">
              {/* Wired to How It Works page */}
              <Link
                to="/how-it-works"
                className="
                  bg-primary
                  text-white
                  px-4
                  sm:px-8
                  py-3
                  sm:py-4
                  rounded-xl
                  font-medium
                  hover:opacity-90
                  transition-opacity
                  inline-block
                  text-center
                  flex-1
                  sm:flex-none
                  text-xs
                  sm:text-base
                  whitespace-nowrap
                "
              >
                Learn How It Works
              </Link>

              {/* Wired to Contact section */}
              <a
                href="/home#contact"
                className="
                  border
                  border-primary
                  text-primary
                  px-4
                  sm:px-8
                  py-3
                  sm:py-4
                  rounded-xl
                  font-medium
                  hover:bg-primary/5
                  transition-colors
                  inline-block
                  text-center
                  flex-1
                  sm:flex-none
                  text-xs
                  sm:text-base
                  whitespace-nowrap
                "
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/about-hero3.png"
              alt="About AgriFlow AI"
              className="
                w-full
                max-w-md
                lg:max-w-full
                h-auto
                object-contain
                drop-shadow-2xl
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;