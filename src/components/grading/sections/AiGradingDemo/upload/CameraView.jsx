import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  CameraOff,
  Check,
  X,
} from "lucide-react";

const CameraView = ({
  onCapture,
  onClose,
}) => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const streamRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //------------------------------------------------
  // Open Camera
  //------------------------------------------------

  useEffect(() => {

    const startCamera = async () => {

      try {

        const stream =
          await navigator.mediaDevices.getUserMedia({

            video: {

              facingMode: "environment",

            },

            audio: false,

          });

        streamRef.current = stream;

        if (videoRef.current) {

          videoRef.current.srcObject = stream;

        }

        setLoading(false);

      }

      catch {

        setError(
          "Unable to access your camera. Please grant permission."
        );

      }

    };

    startCamera();

    return () => {

      stopCamera();

    };

  }, []);

  //------------------------------------------------
  // Stop Camera
  //------------------------------------------------

  const stopCamera = () => {

    if (streamRef.current) {

      streamRef.current
        .getTracks()
        .forEach(track => track.stop());

    }

  };

  //------------------------------------------------
  // Capture Photo
  //------------------------------------------------

  const capturePhoto = () => {

    const video = videoRef.current;

    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image =
      canvas.toDataURL("image/png");

    stopCamera();

    if (onCapture) {

      onCapture(image);

    }

  };

  return (

    <motion.div

      initial={{
        opacity:0,
        scale:0.95
      }}

      animate={{
        opacity:1,
        scale:1
      }}

      className="
        rounded-3xl
        overflow-hidden
        border
        border-gray-200
        bg-white
        shadow-xl
      "

    >

      {/* Header */}

      <div className="flex justify-between items-center p-5 border-b">

        <div>

          <h3 className="font-bold text-lg">

            Live Camera

          </h3>

          <p className="text-sm text-gray-500">

            Position produce inside the frame.

          </p>

        </div>

        <button

          onClick={() => {

            stopCamera();

            onClose?.();

          }}

          className="
            w-10
            h-10
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
            hover:bg-gray-200
          "

        >

          <X size={18} />

        </button>

      </div>

      {/* Camera Area */}

      <div className="relative">

        {

          loading && (

            <div
              className="
                h-[420px]
                flex
                items-center
                justify-center
              "
            >

              <Camera
                size={40}
                className="
                  text-primary
                  animate-pulse
                "
              />

            </div>

          )

        }

        {

          error && (

            <div
              className="
                h-[420px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-10
              "
            >

              <CameraOff
                size={42}
                className="text-red-500 mb-4"
              />

              <p className="text-red-500">

                {error}

              </p>

            </div>

          )

        }

        <video

          ref={videoRef}

          autoPlay

          playsInline

          muted

          className={`
            w-full
            h-[420px]
            object-cover

            ${
              loading || error
                ? "hidden"
                : "block"
            }

          `}

        />

        <canvas
          ref={canvasRef}
          className="hidden"
        />

      </div>

      {/* Footer */}

      <div className="p-6 flex justify-center gap-5">

        <motion.button

          whileHover={{
            scale:1.03
          }}

          whileTap={{
            scale:0.95
          }}

          onClick={capturePhoto}

          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-primary
            px-8
            py-4
            text-white
            font-semibold
            shadow-lg
          "

        >

          <Check size={20} />

          Capture Image

        </motion.button>

      </div>

    </motion.div>

  );

};

export default CameraView;