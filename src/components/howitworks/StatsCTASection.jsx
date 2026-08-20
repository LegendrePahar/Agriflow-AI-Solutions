import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Sprout, Building2, TrendingUp } from "lucide-react";

const stats = [
  { icon: <Sprout size={28} />, value: "12,500+", label: "Farmers Empowered" },
  { icon: <Building2 size={28} />, value: "850+", label: "Institutions Served" },
  { icon: <ShoppingCart size={28} />, value: "45,000+", label: "Tons of Produce Bought" },
  { icon: <TrendingUp size={28} />, value: "₦5.2B+", label: "Paid to Farmers" },
];

const StatsCTASection = () => {
  return (
    <section className="bg-[#0B3D1F] py-8 relative overflow-hidden">

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Empowering Farmers.
              <br />
              Feeding Institutions.
              <br />
              <span className="text-green-600">Transforming Nigeria.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Join thousands of farmers and institutions building a smarter,
              fairer and food-secure Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-7 py-4 rounded-full font-semibold transition-all duration-300">
                Become a Farmer
                <ArrowRight size={18} />
              </button>
              <a
                  href="https://wa.me/2348081873265?text=Hello%20AgriFlow%20AI%20sales%20team,%20I%20would%20like%20to%20request%20a%20food%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Request Supply
                  <ShoppingCart size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="text-green-500 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsCTASection;