import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

const HeroSection = () => {

  return (

    <section
      id="home"
      className="
        relative
        pt-20
        pb-7
        lg:pt-28
        lg:pb-24
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          overflow-hidden
          -z-10
          bg-primary/5
          blur-3xl
        "
      />

      <div className="w-full pl-4 lg:pl-8">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[40%_60%]
            gap-0
            items-center
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-xl"
          >

            <h1
              className="
                text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                text-[#0B132B]
                mb-8
              "
            >
              End Food Waste.
              <br />

              <span className="text-primary">
                Feed Cities.
              </span>

              <br />

              Power Farmers.
            </h1>


            <p
              className="
                text-gray-600
                text-lg
                leading-8
                max-w-xl
                mb-10
              "
            >
              AgriFlow AI connects farms to cities using
              Computer Vision, Machine Learning, and smart
              logistics to reduce food waste and stabilize
              food supply.
            </p>


            {/* =================================================
                HERO ACTIONS
            ================================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                space-y-4
                sm:space-y-0
                sm:space-x-4
              "
            >

              {/* Request Supply */}

              <Link to="/home#contact">

                <Button
                  variant="primary"
                  className="
                    text-lg
                    px-8
                    py-4
                    w-full
                    sm:w-auto
                  "
                >
                  Request Supply
                </Button>

              </Link>


              {/* Join as Farmer */}

              <Link to="/home#contact">

                <Button
                  variant="outline"
                  className="
                    text-lg
                    px-8
                    py-4
                    w-full
                    sm:w-auto
                  "
                >
                  Join as Farmer
                </Button>

              </Link>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              relative
              h-[420px]
              lg:h-[520px]
              w-full
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >

            <img
              src="/hero-visual.png"
              alt="AgriFlow AI Logistics Network"
              className="
                w-[108%]
                lg:w-[112%]
                h-auto
                object-contain
                translate-x-2
                lg:translate-x-4
              "
            />

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default HeroSection;