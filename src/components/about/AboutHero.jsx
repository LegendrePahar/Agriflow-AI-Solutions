import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Updated grid to items-center & added flex alignment on image wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-0 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">
              ABOUT AGRIFLOW AI
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0B132B] mb-8">
              Building Nigeria's
              <br />
              Smart Food Supply
              <span className="text-primary"> Network</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              AgriFlow AI is transforming how food moves across Nigeria by
              connecting farmers, logistics providers and institutional
              buyers through intelligent technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Wired to How It Works page */}
              <Link
                to="/how-it-works"
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity inline-block text-center"
              >
                Learn How It Works
              </Link>

              {/* Wired to Contact section in the Navbar / Home page */}
              <a
                href="/home#contact"
                className="border border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary/5 transition-colors inline-block text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="relative"
                    >
          
                      <img
                        src="/about-hero3.png"
                        alt="About AgriFlow AI"
                        className="
                          w-full
                          object-contain
                          drop-shadow-2xl
                        "
                      />
          
            {/* <img
              src="/about-hero3.png"
              alt="About AgriFlow AI"
              className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
            /> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;