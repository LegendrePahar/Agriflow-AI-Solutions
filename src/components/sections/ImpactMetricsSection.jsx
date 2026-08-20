import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  RefreshCw,
  Wheat,
  Users,
  Building2,
} from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      value: "30%",
      label: "Reduction in transport costs",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      value: "0%",
      label: "Empty return trips",
    },
    {
      icon: <Wheat className="w-8 h-8 text-primary" />,
      value: "1,200+",
      label: "Tons of food moved monthly",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: "5,000+",
      label: "Farmers empowered",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      value: "100+",
      label: "Institutions served",
    },
  ];

  return (
    <section id="impact"
    className="relative overflow-hidden ">

      {/* Dark Green Background */}
      <div className="bg-gradient-to-r from-[#073B1A] via-[#0B4D23] to-[#073B1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-center gap-4"
              >
                {/* Icon Circle */}
                <div
                  className="
                    flex-shrink-0
                    w-16 h-16
                    rounded-full
                    bg-green-400
                    flex items-center justify-center
                  "
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white text-5xl font-bold leading-none">
                    {item.value}
                  </h3>

                  <p className="text-green-100 text-sm leading-snug mt-2 max-w-[140px]">
                    {item.label}
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

export default ImpactSection;