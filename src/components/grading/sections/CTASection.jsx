import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Camera,
} from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#123D18]">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">

        <img
          src="/cta-farmer.png"
          alt="Farmer using AgriFlow-AI"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Subtle Green Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0B3512]/95
            via-[#174F1C]/80
            to-[#0B3512]/90
          "
        />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-6
          py-8
          md:py-10
        "
      >

        <div
          className="
            flex
            flex-col
            items-center
            gap-7
            lg:flex-row
            lg:justify-between
          "
        >

          {/* =================================================
              FARMER IMAGE SPACE
          ================================================== */}

          <div
            className="
              hidden
              lg:block
              lg:w-[17%]
              self-stretch
            "
          />


          {/* =================================================
              CTA CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              w-full
              lg:w-[34%]
              text-center
              lg:text-left
            "
          >

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                leading-tight
                text-white
              "
            >
              Ready to Experience
              <br />
              AI Produce Grading?
            </h2>

            <p
              className="
                mt-3
                max-w-md
                text-xs
                md:text-sm
                leading-relaxed
                text-white/80
              "
            >
              Join thousands of farmers and buyers already using
              AI to create a fairer agricultural ecosystem.
            </p>

          </motion.div>


          {/* =================================================
              ACTIONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              flex
              w-full
              flex-col
              items-center
              lg:w-[43%]
              lg:items-start
            "
          >

            {/* Buttons */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                lg:justify-start
              "
            >

              {/* Primary CTA */}

              <Link
                to="/ai-produce-grading#ai-grading-demo"
                className="
                  bg-[#66BB6A]
                  hover:-translate-y-0.5
                  hover:bg-[#7BCB7F]
                  text-xs
                  font-semibold
                  text-white
                  px-5
                  py-3
                  rounded-md
                  flex
                  items-center
                  gap-2
                  transition-all
                  duration-300
                "
              >
                <Camera size={22} />

                Try Live Demo
              </Link>

              {/* Secondary CTA */}

              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-white/70
                  bg-white/5
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/10
                "
              >
                Partner With Us

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </div>


            {/* Trust Indicators */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-2
                lg:justify-start
              "
            >

              <TrustItem
                icon={CheckCircle2}
                text="Easy to use"
              />

              <TrustItem
                icon={Zap}
                text="Accurate & Fast"
              />

              <TrustItem
                icon={Users}
                text="Trusted by All"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};


/* =========================================================
   TRUST ITEM
========================================================= */

const TrustItem = ({ icon: Icon, text }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-1.5
        text-[10px]
        font-medium
        text-white/90
      "
    >
      <Icon
        size={11}
        strokeWidth={2}
      />

      <span>
        {text}
      </span>
    </div>
  );
};

export default CTASection;