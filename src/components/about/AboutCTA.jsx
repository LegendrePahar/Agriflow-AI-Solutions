import React from "react";
import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section
      id="about-cta"
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta-farm-bg.png')",
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-green-950/90
          via-green-900/85
          to-green-800/80
        "
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
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
              duration: 0.6,
            }}
            className="max-w-2xl"
          >

            <h2
              className="
                text-white
                text-4xl
                lg:text-5xl
                font-bold
                mb-5
                leading-tight
              "
            >
              Join Us in Building Nigeria's
              <br />
              Smart Food Future
            </h2>

            <p
              className="
                text-green-50/90
                text-lg
                leading-relaxed
              "
            >
              Whether you're a farmer, logistics partner,
              institutional buyer, or an investor - There's a place for you in our mission to revolutionize Nigeria's food supply chain.
            </p>

          </motion.div>

          {/* Buttons */}
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >

            {/* Primary */}
            <button
              className="
                bg-primary
                hover:bg-primary/90
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                shadow-lg
                transition-all
                duration-300
              "
            >
              Partner With Us
            </button>

            {/* Secondary */}
            <button
              className="
                border
                border-white
                text-white
                hover:bg-white
                hover:text-green-900
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
              "
            >
              Contact Us
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;