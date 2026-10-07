import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const CTASection = () => {

  return (

    <section
      id="contact"
      className="
        relative
        overflow-hidden
        scroll-mt-24
      "
    >

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('/cta-farm-bg.png')",
        }}
      />


      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

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


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-16
        "
      >

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

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
              Build a Smarter Food System With Us
            </h2>


            <p
              className="
                text-green-50/90
                text-lg
                leading-relaxed
              "
            >
              Together, we can end waste, stabilize food
              prices, empower farmers, and create a more
              efficient food supply chain across Nigeria.
            </p>

          </motion.div>


          {/* =================================================
              BUTTONS
          ================================================== */}

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

            {/* Partner With Us */}

            <a
              href="mailto:hello@agrifloai.com"
              className="
                bg-primary
                hover:bg-primary/90
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                shadow-lg
                text-center
              "
            >
              Partner With Us
            </a>


            {/* Request Supply */}

            <a
                href="https://wa.me/2348081873265?text=Hello%20AgriFlow%20AI%20sales%20team,%20I%20would%20like%20to%20request%20a%20food%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-5 sm:px-7 py-3 sm:py-4 rounded-xl text-xs sm:text-base font-semibold transition-all duration-300"
              >
                Request Supply
                <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>

            {/* <Link
              to="/home#contact"
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
                text-center
              "
            >
              Request Supply
            </Link> */}

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default CTASection;