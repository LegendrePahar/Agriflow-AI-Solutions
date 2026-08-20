import React, { useRef } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

import UploadControls from "./UploadControls";

const UploadBox = ({
  onImageSelected,
  onCamera,
}) => {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    // Only accept image files
    if (!file.type.startsWith("image/")) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    // Parent becomes the single source of truth
    if (onImageSelected) {
      onImageSelected(imageUrl);
    }
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];

    handleFile(file);

    // Allows the same file to be selected again
    event.target.value = "";
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      }}
      className="
        max-w-2xl
        mx-auto
      "
    >

      {/* Hidden File Input */}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
      />

      {/* Upload Area */}

      <div
        className="
          rounded-3xl
          border-2
          border-dashed
          border-green-200
          bg-white
          px-6
          py-12
          sm:px-10
          text-center
          shadow-sm
          transition-all
          duration-300
          hover:border-primary
          hover:shadow-lg
        "
      >

        {/* Icon */}

        <div
          className="
            mx-auto
            w-16
            h-16
            rounded-2xl
            bg-green-50
            flex
            items-center
            justify-center
          "
        >
          <UploadCloud
            size={30}
            className="text-primary"
          />
        </div>

        {/* Heading */}

        <h3
          className="
            mt-6
            text-xl
            font-bold
            text-slate-900
          "
        >
          Upload a Produce Image
        </h3>

        {/* Description */}

        <p
          className="
            mt-2
            max-w-md
            mx-auto
            text-sm
            leading-6
            text-gray-500
          "
        >
          Upload a clear image of your produce and
          AgriFlow AI will analyze its quality,
          characteristics and market potential.
        </p>

        {/* Controls */}

        <div className="mt-7">

          <UploadControls
            onUpload={() => inputRef.current?.click()}
            onCamera={onCamera}
          />

        </div>

        {/* Supported Formats */}

        <p
          className="
            mt-5
            text-xs
            text-gray-400
          "
        >
          JPG, JPEG or PNG • Maximum 10MB
        </p>

      </div>

    </motion.div>
  );
};

export default UploadBox;