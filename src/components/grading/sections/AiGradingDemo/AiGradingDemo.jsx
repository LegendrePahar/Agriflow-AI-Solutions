// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import calculateRecommendedPrice from "../../pricing/PricingEngine";
// import { getMarketData } from "../../pricing/MarketData";
// import {
//   Camera,
//   RotateCcw,
//   ScanSearch,
// } from "lucide-react";

// import UploadBox from "./upload/UploadBox";
// import CameraView from "./upload/CameraView";
// import AnalysisLoader from "./upload/AnalysisLoader";
// import ResultCard from "./results/ResultCard";

// const AiGradingDemo = () => {
//   /*
//    * -------------------------------------------------------
//    * DEMO STATES
//    * -------------------------------------------------------
//    *
//    * idle      → user has not selected an image
//    * camera    → camera is currently open
//    * preview   → image has been captured/uploaded
//    * analyzing → simulated AI analysis
//    * results   → grading result displayed
//    */

//   const [stage, setStage] = useState("idle");

//   const [selectedImage, setSelectedImage] = useState(null);

//   /*
//    * -------------------------------------------------------
//    * IMAGE SELECTION
//    * -------------------------------------------------------
//    */

//   const handleImageSelected = (image) => {
//     setSelectedImage(image);
//     setStage("preview");
//   };

//   /*
//    * -------------------------------------------------------
//    * CAMERA
//    * -------------------------------------------------------
//    */

//   const openCamera = () => {
//     setStage("camera");
//   };

//   const closeCamera = () => {
//     setStage("idle");
//   };

//   const handleCameraCapture = (image) => {
//     setSelectedImage(image);
//     setStage("preview");
//   };

//   /*
//    * -------------------------------------------------------
//    * START ANALYSIS
//    * -------------------------------------------------------
//    */

//   const startAnalysis = () => {
//     if (!selectedImage) return;

//     setStage("analyzing");
//   };

//   /*
//    * -------------------------------------------------------
//    * ANALYSIS COMPLETE
//    * -------------------------------------------------------
//    */

//   const handleAnalysisComplete = () => {
//     setStage("results");
//   };

//   /*
//    * -------------------------------------------------------
//    * RESET
//    * -------------------------------------------------------
//    */

//   const resetDemo = () => {
//     setSelectedImage(null);
//     setStage("idle");
//   };

//   return (
//     <section
//       id="ai-grading-demo"
//       className="
//         relative
//         py-12
//         lg:py-16
//         bg-[url('/cta-farmer.png')]
//         overflow-hidden
//       "
//     >
//        {/* Subtle Green Gradient */}
//       <div
//           className="
//           absolute
//           inset-0
//           bg-gradient-to-r
//           from-[#0B3512]/70
//           via-[#174F1C]/60
//           to-[#0B3512]/65
//           "
//         />

//       {/* =====================================================
//           BACKGROUND DECORATION
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           top-20
//           left-[-120px]
//           w-72
//           h-72
//           rounded-full
//           bg-green-100/50
//           blur-3xl
//           pointer-events-none
//         "
//       />

//       <div
//         className="
//           absolute
//           bottom-20
//           right-[-120px]
//           w-80
//           h-80
//           rounded-full
//           bg-green-100/40
//           blur-3xl
//           pointer-events-none
//         "
//       />

//       {/* =====================================================
//           CONTAINER
//       ====================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           max-w-6xl
//           mx-auto
//           px-5
//           sm:px-6
//           lg:px-8
//         "
//       >

//         {/* ===================================================
//             SECTION HEADER
//         ==================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="text-center max-w-3xl mx-auto"
//         >

//           <div
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               bg-green-100
//               px-4
//               py-2
//               text-primary
//               text-sm
//               font-semibold
//             "
//           >

//             <ScanSearch size={17} />

//             AI Produce Grading Demo

//           </div>

//           <h2
//             className="
//               mt-6
//               text-4xl
//               md:text-5xl
//               font-black
//               tracking-tight
//               text-white
//             "
//           >
//             See How AgriFlow AI
//             <span className="text-secondary">
//               {" "}Grades Produce
//             </span>
//           </h2>

//           <p
//             className="
//               mt-5
//               text-lg
//               leading-8
//               text-white
//             "
//           >
//             Upload a produce image or use your camera.
//             Our AI workflow will analyze the produce,
//             determine its quality grade and generate a
//             standardized farm-gate price recommendation.
//           </p>

//         </motion.div>


//         {/* ===================================================
//             DEMO AREA
//         ==================================================== */}

//         <div className="mt-14">

//           <AnimatePresence mode="wait">

//             {/* =================================================
//                 IDLE
//             ================================================== */}

//             {stage === "idle" && (

//               <motion.div
//                 key="idle"
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//               >

//                 <UploadBox
//                   onImageSelected={handleImageSelected}
//                   onCamera={openCamera}
//                 />

//               </motion.div>

//             )}


//             {/* =================================================
//                 CAMERA
//             ================================================== */}

//             {stage === "camera" && (

//               <motion.div
//                 key="camera"
//                 initial={{
//                   opacity: 0,
//                   scale: 0.97,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 0.97,
//                 }}
//               >

//                 <CameraView
//                   onCapture={handleCameraCapture}
//                   onClose={closeCamera}
//                 />

//               </motion.div>

//             )}


//             {/* =================================================
//                 PREVIEW
//             ================================================== */}

//             {stage === "preview" && (

//               <motion.div
//                 key="preview"
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//                 className="
//                   max-w-2xl
//                   mx-auto
//                 "
//               >

//                 <div
//                   className="
//                     bg-white
//                     rounded-3xl
//                     border
//                     border-gray-200
//                     shadow-xl
//                     overflow-hidden
//                   "
//                 >

//                   {/* Image */}

//                   <div className="relative">

//                     <img
//                       src={selectedImage}
//                       alt="Selected produce"
//                       className="
//                         w-full
//                         h-[420px]
//                         object-cover
//                       "
//                     />

//                     <div
//                       className="
//                         absolute
//                         top-5
//                         left-5
//                         inline-flex
//                         items-center
//                         gap-2
//                         rounded-full
//                         bg-white/95
//                         backdrop-blur
//                         px-4
//                         py-2
//                         text-sm
//                         font-semibold
//                         text-primary
//                         shadow-lg
//                       "
//                     >

//                       <span
//                         className="
//                           w-2
//                           h-2
//                           rounded-full
//                           bg-primary
//                         "
//                       />

//                       Image Ready

//                     </div>

//                   </div>


//                   {/* Actions */}

//                   <div className="p-6">

//                     <h3
//                       className="
//                         text-xl
//                         font-bold
//                         text-slate-900
//                       "
//                     >
//                       Ready for AI Analysis
//                     </h3>

//                     <p
//                       className="
//                         mt-2
//                         text-gray-500
//                       "
//                     >
//                       Your produce image is ready.
//                       Start the grading process to
//                       generate a standardized assessment.
//                     </p>


//                     <div
//                       className="
//                         mt-6
//                         grid
//                         grid-cols-1
//                         sm:grid-cols-2
//                         gap-3
//                       "
//                     >

//                       <button
//                         onClick={startAnalysis}
//                         className="
//                           flex
//                           items-center
//                           justify-center
//                           gap-2
//                           rounded-2xl
//                           bg-primary
//                           px-6
//                           py-4
//                           text-white
//                           font-semibold
//                           shadow-lg
//                           hover:bg-green-700
//                           transition-all
//                         "
//                       >

//                         <ScanSearch size={20} />

//                         Analyze Produce

//                       </button>


//                       <button
//                         onClick={resetDemo}
//                         className="
//                           flex
//                           items-center
//                           justify-center
//                           gap-2
//                           rounded-2xl
//                           border
//                           border-gray-300
//                           bg-white
//                           px-6
//                           py-4
//                           text-slate-700
//                           font-semibold
//                           hover:border-primary
//                           hover:text-primary
//                           transition-all
//                         "
//                       >

//                         <RotateCcw size={18} />

//                         Choose Another

//                       </button>

//                     </div>

//                   </div>

//                 </div>

//               </motion.div>

//             )}


//             {/* =================================================
//                 ANALYZING
//             ================================================== */}

//             {stage === "analyzing" && (

//               <motion.div
//                 key="analyzing"
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//                 className="
//                   max-w-2xl
//                   mx-auto
//                 "
//               >

//                 <AnalysisLoader
//                   active={true}
//                   onComplete={handleAnalysisComplete}
//                 />

//               </motion.div>

//             )}


//             {/* =================================================
//                 RESULTS
//             ================================================== */}

//             {stage === "results" && (

//               <motion.div
//                 key="results"
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//               >

//                 <ResultCard />

//                 {/* Try Again */}

//                 <div className="flex justify-center mt-8">

//                   <button
//                     onClick={resetDemo}
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                       rounded-xl
//                       border
//                       border-gray-300
//                       bg-white
//                       px-6
//                       py-3
//                       text-sm
//                       font-semibold
//                       text-slate-700
//                       hover:border-primary
//                       hover:text-primary
//                       transition-all
//                     "
//                   >

//                     <RotateCcw size={17} />

//                     Grade Another Produce

//                   </button>

//                 </div>

//               </motion.div>

//             )}

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AiGradingDemo;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import calculateRecommendedPrice from "../../pricing/PricingEngine";
import { getMarketData } from "../../pricing/MarketData";
import {
  RotateCcw,
  ScanSearch,
} from "lucide-react";

import UploadBox from "./upload/UploadBox";
import CameraView from "./upload/CameraView";
import AnalysisLoader from "./upload/AnalysisLoader";
import ResultCard from "./results/ResultCard";

const AiGradingDemo = () => {
  /*
   * -------------------------------------------------------
   * DEMO STATES
   * -------------------------------------------------------
   *
   * idle      → user has not selected an image
   * camera    → camera is currently open
   * preview   → image has been captured/uploaded
   * analyzing → simulated AI analysis
   * results   → grading result displayed
   */

  const [stage, setStage] = useState("idle");

  const [selectedImage, setSelectedImage] = useState(null);

  /*
   * -------------------------------------------------------
   * DEMO AI RESULT
   * -------------------------------------------------------
   *
   * For now these values simulate the output of our
   * computer-vision model.
   *
   * Later:
   *
   * image
   *   ↓
   * computer vision
   *   ↓
   * produce + grade
   */

  const detectedProduce = "yam";

  const aiGrade = "A";

  /*
   * -------------------------------------------------------
   * MARKET DATA
   * -------------------------------------------------------
   *
   * Retrieve current market intelligence for the
   * detected produce.
   *
   * MarketData.js currently contains prototype data.
   *
   * Later this will come from our backend/API.
   */

  const market = getMarketData(detectedProduce);

  /*
   * -------------------------------------------------------
   * PRICING ENGINE
   * -------------------------------------------------------
   *
   * Combine:
   *
   * 1. Base market price
   * 2. AI quality grade
   * 3. Market trend
   * 4. Seasonal demand
   * 5. Logistics
   *
   * to generate the recommended price.
   */

  const recommendedPrice = calculateRecommendedPrice({
    basePrice: market.basePrice,
    grade: aiGrade,
    marketTrend: market.marketTrend,
    seasonalDemand: market.seasonalDemand,
    logisticsCost: market.logisticsCost,
  });

  /*
   * -------------------------------------------------------
   * IMAGE SELECTION
   * -------------------------------------------------------
   */

  const handleImageSelected = (image) => {
    setSelectedImage(image);
    setStage("preview");
  };

  /*
   * -------------------------------------------------------
   * CAMERA
   * -------------------------------------------------------
   */

  const openCamera = () => {
    setStage("camera");
  };

  const closeCamera = () => {
    setStage("idle");
  };

  const handleCameraCapture = (image) => {
    setSelectedImage(image);
    setStage("preview");
  };

  /*
   * -------------------------------------------------------
   * START ANALYSIS
   * -------------------------------------------------------
   */

  const startAnalysis = () => {
    if (!selectedImage) return;

    setStage("analyzing");
  };

  /*
   * -------------------------------------------------------
   * ANALYSIS COMPLETE
   * -------------------------------------------------------
   */

  const handleAnalysisComplete = () => {
    setStage("results");
  };

  /*
   * -------------------------------------------------------
   * RESET
   * -------------------------------------------------------
   */

  const resetDemo = () => {
    setSelectedImage(null);
    setStage("idle");
  };

  return (
    <section
      id="ai-grading-demo"
      className="
        relative
        py-12
        lg:py-16
        bg-[url('/cta-farmer.png')]
        overflow-hidden
      "
    >
      {/* Subtle Green Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#0B3512]/70
          via-[#174F1C]/60
          to-[#0B3512]/65
        "
      />

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          absolute
          top-20
          left-[-120px]
          w-72
          h-72
          rounded-full
          bg-green-100/50
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-[-120px]
          w-80
          h-80
          rounded-full
          bg-green-100/40
          blur-3xl
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-green-100
              px-4
              py-2
              text-primary
              text-sm
              font-semibold
            "
          >
            <ScanSearch size={17} />

            AI Produce Grading Demo
          </div>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-white
            "
          >
            See How AgriFlow AI
            <span className="text-secondary">
              {" "}Grades Produce
            </span>
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-white
            "
          >
            Upload a produce image or use your camera.
            Our AI workflow will analyze the produce,
            determine its quality grade and generate a
            standardized farm-gate price recommendation.
          </p>
        </motion.div>

        {/* ===================================================
            DEMO AREA
        ==================================================== */}

        <div className="mt-14">

          <AnimatePresence mode="wait">

            {/* =================================================
                IDLE
            ================================================== */}

            {stage === "idle" && (
              <motion.div
                key="idle"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
              >
                <UploadBox
                  onImageSelected={handleImageSelected}
                  onCamera={openCamera}
                />
              </motion.div>
            )}

            {/* =================================================
                CAMERA
            ================================================== */}

            {stage === "camera" && (
              <motion.div
                key="camera"
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                }}
              >
                <CameraView
                  onCapture={handleCameraCapture}
                  onClose={closeCamera}
                />
              </motion.div>
            )}

            {/* =================================================
                PREVIEW
            ================================================== */}

            {stage === "preview" && (
              <motion.div
                key="preview"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                className="
                  max-w-2xl
                  mx-auto
                "
              >
                <div
                  className="
                    bg-white
                    rounded-3xl
                    border
                    border-gray-200
                    shadow-xl
                    overflow-hidden
                  "
                >
                  {/* Image */}

                  <div className="relative">

                    <img
                      src={selectedImage}
                      alt="Selected produce"
                      className="
                        w-full
                        h-[420px]
                        object-cover
                      "
                    />

                    <div
                      className="
                        absolute
                        top-5
                        left-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white/95
                        backdrop-blur
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-primary
                        shadow-lg
                      "
                    >
                      <span
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-primary
                        "
                      />

                      Image Ready
                    </div>

                  </div>

                  {/* Actions */}

                  <div className="p-6">

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      Ready for AI Analysis
                    </h3>

                    <p
                      className="
                        mt-2
                        text-gray-500
                      "
                    >
                      Your produce image is ready.
                      Start the grading process to
                      generate a standardized assessment.
                    </p>

                    <div
                      className="
                        mt-6
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-3
                      "
                    >
                      <button
                        onClick={startAnalysis}
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
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
                        <ScanSearch size={20} />

                        Analyze Produce
                      </button>

                      <button
                        onClick={resetDemo}
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-2xl
                          border
                          border-gray-300
                          bg-white
                          px-6
                          py-4
                          text-slate-700
                          font-semibold
                          hover:border-primary
                          hover:text-primary
                          transition-all
                        "
                      >
                        <RotateCcw size={18} />

                        Choose Another
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* =================================================
                ANALYZING
            ================================================== */}

            {stage === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                className="
                  max-w-2xl
                  mx-auto
                "
              >
                <AnalysisLoader
                  active={true}
                  onComplete={handleAnalysisComplete}
                />
              </motion.div>
            )}

            {/* =================================================
                RESULTS
            ================================================== */}

            {stage === "results" && (
              <motion.div
                key="results"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
              >
                <ResultCard
                  price={recommendedPrice}
                  grade={aiGrade}
                  produce={market.produce}
                  market={market.market}
                  location={market.location}
                  marketTrend={market.marketTrend}
                  seasonalDemand={market.seasonalDemand}
                  logisticsCost={market.logisticsCost}
                />

                {/* Try Again */}

                <div className="flex justify-center mt-8">

                  <button
                    onClick={resetDemo}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-gray-300
                      bg-white
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-slate-700
                      hover:border-primary
                      hover:text-primary
                      transition-all
                    "
                  >
                    <RotateCcw size={17} />

                    Grade Another Produce
                  </button>

                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};

export default AiGradingDemo;