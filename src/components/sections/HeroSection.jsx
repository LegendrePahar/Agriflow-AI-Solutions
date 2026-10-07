// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import Button from "../ui/Button";

// const HeroSection = () => {

//   return (

//     <section
//     id="home"
//     className="
//       relative
//       pt-24
//       pb-4
//       sm:pt-20
//       sm:pb-7
//       lg:pt-28
//       lg:pb-24
//       overflow-hidden
//       scroll-mt-20
//     "
//     >

//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           top-0
//           left-0
//           w-full
//           h-full
//           overflow-hidden
//           -z-10
//           bg-primary/5
//           blur-3xl
//         "
//       />

//       <div className="w-full pl-4 lg:pl-8">

//         <div
//           className="
//             grid
//             grid-cols-1
//             lg:grid-cols-[40%_60%]
//             gap-4
//             lg:gap-0
//             items-center
//           "
//         >

//           {/* =================================================
//               LEFT CONTENT
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//             className="max-w-xl"
//           >

//             <h1
//               className="
//                 text-4xl
//                 sm:text-5xl
//                 lg:text-6xl
//                 font-bold
//                 leading-tight
//                 text-[#0B132B]
//                 mb-4
//                 sm:mb-8
//               "
//             >
//               End Food Waste.
//               <br />

//               <span className="text-primary">
//                 Feed Cities.
//               </span>

//               <br />

//               Power Farmers.
//             </h1>


//             <p
//               className="
//                 text-gray-600
//                 text-lg
//                 leading-8
//                 max-w-xl
//                 mb-6
//                 sm:mb-10
//               "
//             >
//               AgriFlow AI connects farms to cities using
//               Computer Vision, Machine Learning, and smart
//               logistics to reduce food waste and stabilize
//               food supply.
//             </p>


//             {/* =================================================
//                 HERO ACTIONS
//             ================================================== */}

//             <div
//               className="
//                 flex
//                 flex-row
//                 flex-nowrap
//                 gap-1.5
//                 sm:gap-4
//               "
//             >

//               {/* Request Supply */}

//               {/* <Link to="/home#contact" className="flex-1 sm:flex-none min-w-0">

//                 <Button
//                   variant="primary"
//                   className="
//                     text-[10px]
//                     sm:text-lg
//                     px-2
//                     sm:px-8
//                     py-2
//                     sm:py-4
//                     w-full
//                     sm:w-auto
//                     whitespace-nowrap
//                   "
//                 >
//                   Request Supply
//                 </Button>

//               </Link> */}

//               {/* How AgriFlow-AI Works */}

//               <Link to="/how-it-works#ProcessSection" className="inline-block">

//                 <Button
//                   variant="primary"
//                   className="
//                     text-xs
//                     sm:text-sm
//                     md:text-base
//                     px-4
//                     py-2.5
//                     w-auto
//                     h-auto
//                     whitespace-nowrap
//                   "
//                 >
//                   How AgriFlow-AI Works
//                 </Button>

//               </Link>


//               {/* Join as Farmer */}

//               <Link to="/home#contact" className="inline-block">
//                 <Button
//                   variant="outline"
//                   className="
//                     text-xs
//                     sm:text-sm
//                     md:text-base
//                     px-4
//                     py-2.5
//                     w-auto
//                     h-auto
//                     whitespace-nowrap
//                   "
//                 >
//                   Join as Farmer
//                 </Button>
//               </Link>

//             </div>

//           </motion.div>


//           {/* =================================================
//               RIGHT CONTENT
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.95,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//             }}
//             className="
//               relative
//               h-[220px]
//               sm:h-[320px]
//               lg:h-[520px]
//               w-full
//               flex
//               items-center
//               justify-center
//               overflow-hidden
//             "
//           >

//             <img
//               src="/hero-visual.png"
//               alt="AgriFlow AI Logistics Network"
//               className="
//                 w-[108%]
//                 lg:w-[112%]
//                 h-auto
//                 object-contain
//                 translate-x-2
//                 lg:translate-x-4
//               "
//             />

//           </motion.div>

//         </div>

//       </div>

//     </section>

//   );

// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

const heroImages = [
  "/hero-visual.png",
  "/hero-visual-2.png",
  "/hero-visual-3.png",
];

const HeroSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (

    <section
    id="home"
    className="
      relative
      pt-24
      pb-4
      sm:pt-20
      sm:pb-7
      lg:pt-28
      lg:pb-24
      overflow-hidden
      scroll-mt-20
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
            gap-4
            lg:gap-0
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
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                text-[#0B132B]
                mb-4
                sm:mb-8
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
                mb-6
                sm:mb-10
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
                flex-row
                flex-nowrap
                gap-1.5
                sm:gap-4
              "
            >

              {/* Request Supply */}

              {/* <Link to="/home#contact" className="flex-1 sm:flex-none min-w-0">

                <Button
                  variant="primary"
                  className="
                    text-[10px]
                    sm:text-lg
                    px-2
                    sm:px-8
                    py-2
                    sm:py-4
                    w-full
                    sm:w-auto
                    whitespace-nowrap
                  "
                >
                  Request Supply
                </Button>

              </Link> */}

              {/* How AgriFlow-AI Works */}

              <Link to="/how-it-works#ProcessSection" className="inline-block">

                <Button
                  variant="primary"
                  className="
                    text-xs
                    sm:text-sm
                    md:text-base
                    px-4
                    py-2.5
                    w-auto
                    h-auto
                    whitespace-nowrap
                  "
                >
                  How AgriFlow-AI Works
                </Button>

              </Link>


              {/* Join as Farmer */}

              <Link to="/home#contact" className="inline-block">
                <Button
                  variant="outline"
                  className="
                    text-xs
                    sm:text-sm
                    md:text-base
                    px-4
                    py-2.5
                    w-auto
                    h-auto
                    whitespace-nowrap
                  "
                >
                  Join as Farmer
                </Button>
              </Link>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT CONTENT — CAROUSEL
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
              h-[220px]
              sm:h-[320px]
              lg:h-[520px]
              w-full
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={heroImages[activeIndex]}
                alt="AgriFlow AI Logistics Network"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  absolute
                  w-[108%]
                  lg:w-[112%]
                  h-auto
                  object-contain
                  translate-x-2
                  lg:translate-x-4
                "
              />
            </AnimatePresence>

            {/* Dots */}

            <div
              className="
                absolute
                bottom-2
                sm:bottom-4
                left-1/2
                -translate-x-1/2
                flex
                gap-2
                z-10
              "
            >
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`
                    w-2
                    h-2
                    sm:w-2.5
                    sm:h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === activeIndex
                        ? "bg-primary w-5 sm:w-6"
                        : "bg-primary/30"
                    }
                  `}
                />
              ))}
            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default HeroSection;