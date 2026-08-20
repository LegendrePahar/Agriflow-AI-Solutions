import React from "react";
import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import AIResultCard from "./AIResultCard";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#F9FCF8]
        via-white
        to-[#F4FAF3]
        py-24
        lg:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          bg-primary/5
          rounded-full
          blur-[140px]
        "
      />

      {/* Decorative Circles */}
      <div className="absolute top-24 left-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-16 right-10 w-52 h-52 bg-green-100 rounded-full blur-3xl opacity-70"></div>

      {/* Grid Container */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div
          className="
            grid
            lg:grid-cols-12
            items-center
            gap-10
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
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
              lg:col-span-4
              relative
              z-20
            "
          >
            <HeroContent />
          </motion.div>

          {/* CENTER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              lg:col-span-3
              flex
              justify-center
              relative
              z-10
            "
          >
            <HeroImage />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
              delay: 0.4,
            }}
            className="
              lg:col-span-5
              relative
              z-20
            "
          >
            <AIResultCard />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#F7FBF7]
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

export default HeroSection;