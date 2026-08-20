import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SupplySubscriptionSection = () => {
  const benefits = [
    "Weekly delivery plans",
    "Custom volume contracts",
    "Quality assurance guarantee",
    "Delivered on schedule",
  ];

  return (
    <section
      id="subscription"
      className="py-6 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-gray-100
            bg-white
            shadow-sm
            p-6
            lg:p-8
          "
        >

          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* ================================= */}
            {/* PHONE MOCKUP */}
            {/* ================================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center items-end"
            >
              <motion.img
                src="/subscription-app.png"
                alt="AgriFlow Subscription App"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  w-full
                  max-w-[380px]
                  lg:max-w-[420px]
                  object-contain
                  drop-shadow-2xl
                "
              />
            </motion.div>

            {/* ================================= */}
            {/* CONTENT */}
            {/* ================================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >

              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
                SUPPLY-AS-A-SERVICE
              </p>

              <h2 className="text-1xl lg:text-5xl font-bold text-[#0B132B] mb-6">
                Subscribe to
                <br />
                reliable food supply
              </h2>

              <div className="space-y-4 mb-8">

                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />

                    <span className="text-gray-700 text-lg">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <button
                className="
                  bg-primary
                  text-white
                  px-6
                  py-2
                  rounded-xl
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                Start Subscription
              </button>

            </motion.div>

            {/* ================================= */}
            {/* PRODUCE BASKET */}
            {/* ================================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center"
            >
              <motion.img
                src="/produce-basket.png"
                alt="Fresh Produce Basket"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  w-full
                  max-w-[450px]
                  mx-auto
                  object-contain
                  drop-shadow-xl
                "
              />
            </motion.div>

          </div>

          {/* Decorative Glow */}

          <div
            className="
              absolute
              -top-24
              -right-24
              w-80
              h-80
              bg-green-100
              rounded-full
              blur-3xl
              opacity-30
              pointer-events-none
            "
          />

        </div>

      </div>
    </section>
  );
};

export default SupplySubscriptionSection;