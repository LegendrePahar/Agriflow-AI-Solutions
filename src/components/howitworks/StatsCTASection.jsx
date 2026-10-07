import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Sprout, Building2, TrendingUp } from "lucide-react";

const stats = [
  { icon: <Sprout className="w-5 h-5 sm:w-7 sm:h-7" />, value: "45+", label: "Farmers Empowered" },
  { icon: <Building2 className="w-5 h-5 sm:w-7 sm:h-7" />, value: "12+", label: "Institutions Served" },
  { icon: <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7" />, value: "200+", label: "Tons of Produce Bought" },
  { icon: <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7" />, value: "₦5.2M+", label: "Paid to Farmers" },
];

const StatsCTASection = () => {
  return (
    <section className="bg-[#0B3D1F] py-6 sm:py-8 relative overflow-hidden">

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/stats-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Reduced mobile heading size and margin bottom */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
              Empowering Farmers.
              <br />
              Feeding Institutions.
              <br />
              <span className="text-green-500">Transforming Nigeria.</span>
            </h2>
            
            {/* Reduced text size and margin bottom for small screens */}
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
              Join thousands of farmers and institutions building a smarter,
              fairer and food-secure Nigeria.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-5 sm:px-7 py-3 sm:py-4 rounded-full text-xs sm:text-base font-semibold transition-all duration-300">
                Become a Farmer
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* Fixed missing opening <a> tag syntax error */}
              <a
                href="https://wa.me/2348081873265?text=Hello%20AgriFlow%20AI%20sales%20team,%20I%20would%20like%20to%20request%20a%20food%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-5 sm:px-7 py-3 sm:py-4 rounded-full text-xs sm:text-base font-semibold transition-all duration-300"
              >
                Request Supply
                <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3"
              >
                <div className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsCTASection;