import React from "react";
import { motion } from "framer-motion";
import { Camera, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-[#F8FCF7]
      via-white
      to-[#F6FBF5]
      py-20
      lg:py-28
    "
    >
      {/* Background Glow */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-primary/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              bg-primary/10
              text-primary
              rounded-full
              px-4
              py-2
              font-medium
              mb-7
            "
            >
              <Sparkles size={18} />

              AI Powered Produce Grading
            </div>

            {/* Heading */}

            <h1
              className="
              text-5xl
              lg:text-[4.1rem]
              leading-[1.05]
              font-bold
              text-slate-900
              mb-6
            "
            >
              Fair Pricing Begins With
              <br />

              <span className="text-primary">
                Standardized Quality
              </span>
            </h1>

            {/* Description */}

            <p
              className="
              text-lg
              text-slate-600
              leading-relaxed
              max-w-xl
              mb-10
            "
            >
              AgriFlow AI uses advanced Computer Vision and Machine Learning
              to analyze produce quality, assign standardized grades,
              estimate market value, and provide farmers with transparent,
              data-driven pricing in seconds.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5">

              {/* <button
                className="
                bg-primary
                hover:bg-primary/90
                text-white
                px-7
                py-4
                rounded-xl
                flex
                items-center
                gap-3
                font-semibold
                transition-all
              "
              >
                <Camera size={22} />

                Try Live Demo
              </button> */}
              <Link
                to="/ai-produce-grading#ai-grading-demo"
                className="
                  bg-primary
                  hover:bg-primary/90
                  text-white
                  px-7
                  py-4
                  rounded-xl
                  flex
                  items-center
                  gap-3
                  font-semibold
                  transition-all
                "
              >
                <Camera size={22} />

                Try Live Demo
              </Link>

              <button
                className="
                border
                border-primary
                text-primary
                hover:bg-primary
                hover:text-white
                px-7
                py-4
                rounded-xl
                flex
                items-center
                gap-3
                font-semibold
                transition-all
              "
              >
                <PlayCircle size={22} />

                Watch Demo
              </button>

            </div>


          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <img
              src="/hero-ai-grading.png"
              alt="AI Produce Grading"
              className="
                w-full
                object-contain
                drop-shadow-2xl
              "
            />

            {/* Floating AI Card */}

            {/* <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                top-12
                left-0
                bg-white
                rounded-2xl
                shadow-xl
                p-5
                border
              "
            >

              <p className="text-xs text-slate-500">
                AI Prediction
              </p>

              <h3 className="font-bold text-primary text-xl mt-1">
                Grade A
              </h3>

              <p className="text-sm text-slate-600">
                Confidence: 98.6%
              </p>

            </motion.div> */}

            {/* Price Card */}

            {/* <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-10
                right-0
                bg-white
                rounded-2xl
                shadow-xl
                p-5
                border
              "
            >

              <p className="text-xs text-slate-500">
                Estimated Price
              </p>

              <h3 className="font-bold text-primary text-2xl">
                ₦12,500
              </h3>

              <p className="text-sm text-slate-600">
                White Yam • Grade A
              </p>

            </motion.div> */}

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;