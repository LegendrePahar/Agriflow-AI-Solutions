import React from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    title: "Farmer Empowerment",
    image: "/farmer-impact.png",
    description:
      "Direct access to reliable buyers, transparent pricing, and guaranteed demand puts more income back into farmers' hands.",
  },
  {
    title: "Food Security",
    image: "/food-security.png",
    description:
      "Reducing post-harvest losses means more nutritious food reaches homes, schools, hospitals and businesses.",
  },
  {
    title: "Supply Chain Efficiency",
    image: "/stats-bg.png",
    description:
      "AI-driven logistics eliminates empty return trips, lowers transport costs and strengthens Nigeria's food system.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-8 bg-[#FAFCFA]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="uppercase tracking-[0.25em] text-primary font-semibold text-sm mb-4">
            OUR IMPACT
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#0B132B] leading-tight">
            Real change,
            <br />
            <span className="text-primary">measured in outcomes</span>
          </h2>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10">

          {impacts.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-[30px]
                shadow-md
                hover:shadow-xl
                transition-all
                duration-500
                overflow-hidden
                border
                border-gray-100
              "
            >

              {/* Image */}

              <div className="h-64 flex items-center justify-center p-8">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    max-h-full
                    object-contain
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

              </div>

              {/* Content */}

              <div className="px-10 pb-10 text-center">

                <h3 className="text-2xl font-bold text-[#0B132B] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-lg">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ImpactSection;