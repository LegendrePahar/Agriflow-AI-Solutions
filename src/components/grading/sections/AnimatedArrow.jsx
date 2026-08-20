import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnimatedArrow = ({ theme = "green" }) => {

  const color =
    theme === "green"
      ? "text-primary"
      : "text-red-500";

  return (

    <motion.div

      animate={{
        x: [0, 6, 0],
      }}

      transition={{
        repeat: Infinity,
        duration: 1.4,
      }}

      className={`${color} mx-1`}

    >

      <ArrowRight size={20} />

    </motion.div>

  );
};

export default AnimatedArrow;