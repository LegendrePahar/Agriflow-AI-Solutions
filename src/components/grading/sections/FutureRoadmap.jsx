import React from "react";
import { motion } from "framer-motion";

const roadmap = [
  {
    year: "2027",
    title: "Advanced",
    description: "Produce Grading",
    detail: "(Multi-Crop)",
    current: true,
  },
  {
    year: "2027",
    title: "Route Optimization",
    description: "& Location Tracking",
    detail: "System",
  },
  {
    year: "2028",
    title: "Shelf-life",
    description: "Prediction",
    detail: "Engine",
  },
  {
    year: "2029",
    title: "Yield Prediction",
    description: "& Farm",
    detail: "Analytics",
  },
  {
    year: "2030",
    title: "Drone & Satellite",
    description: "AI Farm",
    detail: "Inspection",
  },
];

const FutureRoadmap = () => {
  return (
    <section className="bg-white py-16 md:py-10">

      <div className="mx-auto max-w-6xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Future AI Capabilities Roadmap
          </h2>

          <p className="mt-2 text-sm text-primary text-slate-500">
            Building the future of intelligent agriculture
          </p>
        </motion.div>


        {/* =====================================================
            DESKTOP TIMELINE
        ====================================================== */}

        <div className="relative mt-12 hidden md:block">

          {/* Connecting Line */}

          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-6
              h-[2px]
              bg-gray-200
            "
          />

          {/* Progress Line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "10%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              absolute
              left-[10%]
              top-6
              h-[2px]
              bg-primary
            "
          />

          {/* Roadmap Items */}

          <div className="relative grid grid-cols-5 gap-4">

            {roadmap.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="flex flex-col items-center text-center"
              >

                {/* Year Circle */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className={`
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      item.current
                        ? `
                          bg-primary
                          text-white
                          shadow-lg
                          shadow-green-200
                        `
                        : `
                          bg-gray-100
                          text-slate-700
                          border
                          border-gray-200
                        `
                    }
                  `}
                >
                  {item.year}
                </motion.div>


                {/* Milestone Text */}

                <div className="mt-5 max-w-[150px]">

                  <h3 className="text-xs md:text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm font-medium text-slate-800 leading-snug">
                    {item.description}
                  </p>

                  <p className="text-xs md:text-sm font-medium text-slate-800 leading-snug">
                    {item.detail}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>


        {/* =====================================================
            MOBILE TIMELINE
        ====================================================== */}

        <div className="relative mt-10 md:hidden">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-6
              top-6
              bottom-6
              w-[2px]
              bg-gray-200
            "
          />

          <div className="space-y-8">

            {roadmap.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative flex items-start gap-5"
              >

                {/* Year */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-xs
                    font-semibold

                    ${
                      item.current
                        ? "bg-primary text-white shadow-lg"
                        : "bg-gray-100 text-slate-700 border border-gray-200"
                    }
                  `}
                >
                  {item.year}
                </div>


                {/* Content */}

                <div className="pt-1">

                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-800">
                    {item.description}
                  </p>

                  <p className="text-sm font-medium text-slate-800">
                    {item.detail}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default FutureRoadmap;