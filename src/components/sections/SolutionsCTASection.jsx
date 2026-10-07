import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

const SolutionsCTASection = () => {
  return (
    <section
      id="solutions-cta"
      className="relative overflow-hidden"
    >
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta-farm-bg.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D20]/90 via-[#14532D]/85 to-[#166534]/80" />

      {/* Decorative Blur */}

      <div className="absolute -top-32 right-20 w-96 h-96 bg-primary/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[0.3em] text-green-200 text-sm font-semibold mb-5">
              Let's Work Together
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
  Ready to transform
  <br />
  Nigeria's food supply chain?
</h2>

            <p className="text-green-100 text-lg leading-relaxed max-w-xl">
              Whether you're a farmer, institution, logistics partner,
              processor, or government agency, AgriFlow AI provides the
              technology and supply network to help you grow, save costs,
              reduce waste and move food smarter.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex flex-row flex-nowrap gap-3 sm:gap-5 lg:justify-end"
          >

            {/* Primary */}

            <button
              className="
              flex
              items-center
              justify-center
              gap-2
              sm:gap-3
              bg-primary
              hover:bg-green-700
              text-white
              px-4
              sm:px-8
              py-3
              sm:py-4
              rounded-full
              font-semibold
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              flex-1
              sm:flex-none
              text-sm
              sm:text-base
              whitespace-nowrap
            "
            >
              Partner With Us

              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Secondary */}

            <a
              href="tel:+2348081873265"
              className="
                flex
                items-center
                justify-center
                gap-2
                sm:gap-3
                border
                border-white
                text-white
                hover:bg-white
                hover:text-primary
                px-4
                sm:px-8
                py-3
                sm:py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                flex-1
                sm:flex-none
                text-sm
                sm:text-base
                whitespace-nowrap
              "
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Sales
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsCTASection;