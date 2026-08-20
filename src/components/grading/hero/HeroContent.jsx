// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, ChevronDown } from "lucide-react";

// import TrustedUsers from "./TrustedUsers";

// const HeroContent = () => {
//   return (
//     <div className="max-w-xl">

//       {/* AI Badge */}

//       <motion.div
//         initial={{ opacity: 0, y: -15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="
//           inline-flex
//           items-center
//           gap-2
//           rounded-full
//           bg-white
//           border
//           border-green-100
//           px-4
//           py-2
//           shadow-sm
//           mb-8
//         "
//       >
//         <div className="w-2 h-2 rounded-full bg-primary"></div>

//         <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
//           AI Powered
//         </span>
//       </motion.div>

//       {/* Heading */}

//       <motion.h1
//         initial={{ opacity: 0, x: -30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.15,
//         }}
//         className="
//           text-[3.6rem]
//           md:text-[4.6rem]
//           leading-[0.9]
//           font-black
//           tracking-tight
//           text-slate-900
//         "
//       >
//         <span className="text-primary">
//           AI
//         </span>{" "}
//         Produce

//         <br />

//         Grading
//       </motion.h1>

//       {/* Subtitle */}

//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 0.35,
//         }}
//         className="
//           mt-8
//           text-2xl
//           font-bold
//           text-primary
//         "
//       >
//         Fair Pricing Begins With Standardized Quality.
//       </motion.h3>

//       {/* Description */}

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 0.5,
//         }}
//         className="
//           mt-6
//           text-lg
//           text-slate-600
//           leading-8
//           max-w-lg
//         "
//       >
//         Our computer vision model analyzes every produce item before
//         purchase, assigning a consistent quality grade and recommended
//         market value—eliminating guesswork and ensuring transparency
//         for farmers and buyers alike.
//       </motion.p>

//       {/* Buttons */}

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           delay: 0.65,
//         }}
//         className="flex flex-wrap gap-5 mt-10"
//       >

//         {/* Primary */}

//         <button
//           className="
//             group
//             flex
//             items-center
//             gap-3
//             rounded-xl
//             bg-primary
//             px-8
//             py-4
//             font-semibold
//             text-white
//             shadow-lg
//             transition-all
//             duration-300
//             hover:-translate-y-1
//             hover:bg-green-700
//           "
//         >
//           Try Live Demo

//           <ArrowRight
//             size={18}
//             className="
//               transition-transform
//               group-hover:translate-x-1
//             "
//           />
//         </button>

//         {/* Secondary */}

//         <button
//           className="
//             group
//             flex
//             items-center
//             gap-2
//             rounded-xl
//             border
//             border-slate-300
//             bg-white
//             px-8
//             py-4
//             font-semibold
//             text-slate-800
//             shadow-sm
//             transition-all
//             duration-300
//             hover:border-primary
//             hover:text-primary
//             hover:-translate-y-1
//           "
//         >
//           Learn More

//           <ChevronDown
//             size={18}
//             className="
//               transition-transform
//               group-hover:translate-y-1
//             "
//           />
//         </button>

//       </motion.div>

//       {/* Trusted Users */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 25,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           delay: 0.9,
//         }}
//         className="mt-12"
//       >
//         <TrustedUsers />
//       </motion.div>

//     </div>
//   );
// };

// export default HeroContent;