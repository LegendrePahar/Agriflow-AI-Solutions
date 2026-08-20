import React from "react";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center">

      {/* Background Glow */}

      <div
        className="
          absolute
          w-[480px]
          h-[480px]
          rounded-full
          bg-primary/10
          blur-[80px]
          -z-20
        "
      />

      {/* Secondary Glow */}

      <div
        className="
          absolute
          w-[360px]
          h-[360px]
          rounded-full
          bg-green-200/40
          blur-[60px]
          -z-10
        "
      />

      {/* Decorative Circle */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-8
          right-8
          w-7
          h-7
          rounded-full
          bg-primary
          opacity-70
        "
      />

      {/* Decorative Circle */}

      <motion.div
        animate={{
          y: [0, 18, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-16
          left-2
          w-12
          h-12
          rounded-full
          border
          border-primary/30
          bg-white
          shadow-md
        "
      />

      {/* Farmer Image */}

      <motion.img
        src="/hero-ai-grading.png"
        alt="AI Produce Grading"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        animate={{
          y: [0, -12, 0],
        }}
        className="
          relative
          z-20
          w-full
          max-w-[430px]
          xl:max-w-[470px]
          object-contain
          drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]
          select-none
          pointer-events-none
        "
      />

      {/* Floating AI Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-20
          bg-white
          rounded-2xl
          shadow-xl
          px-4
          py-3
          border
          border-gray-100
          z-30
        "
      >
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          AI Status
        </p>

        <h4 className="font-bold text-primary mt-1">
          Ready to Scan
        </h4>
      </motion.div>

      {/* Floating Quality Card */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          bottom-16
          bg-white
          rounded-2xl
          shadow-xl
          px-5
          py-4
          border
          border-gray-100
          z-30
        "
      >
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Standard
        </p>

        <h3 className="text-primary text-lg font-bold mt-1">
          Grade A
        </h3>
      </motion.div>

    </div>
  );
};

export default HeroImage;