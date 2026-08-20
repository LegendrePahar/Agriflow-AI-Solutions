import React from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Camera,
} from "lucide-react";

const UploadControls = ({
  onUpload,
  onCamera,
  isCameraActive = false,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">

      {/* Upload Button */}

      <motion.button
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={onUpload}
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-primary
          px-6
          py-4
          text-white
          font-semibold
          shadow-lg
          hover:bg-green-700
          transition-all
        "
      >
        <Upload size={20} />

        Upload Image
      </motion.button>

      {/* Camera Button */}

      <motion.button
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={onCamera}
        className={`
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          px-6
          py-4
          font-semibold
          shadow-sm
          transition-all

          ${
            isCameraActive
              ? "bg-primary text-white border-primary"
              : "bg-white border-gray-300 text-slate-700 hover:border-primary hover:text-primary"
          }
        `}
      >
        <Camera size={20} />

        {isCameraActive
          ? "Camera Active"
          : "Open Camera"}
      </motion.button>

    </div>
  );
};

export default UploadControls;