// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Sprout,
//   Building2,
//   Truck,
//   CheckCircle2,
// } from 'lucide-react';

// const ValuePropositionSection = () => {
//   const stakeholders = [
//     {
//       title: "Farmers",
//       description:
//         "Helping farmers reduce waste and access better pricing through AI powered grading and Pricing.",
//       icon: <Sprout className="h-8 w-8 text-green-700" />,
//       image: "/Farmer_card.png",
//       bg: "bg-[#EAF7EE]",
//       border: "border-green-100",
//       badge: "bg-green-100",
//       points: [
//         "Standardizing Farm produce",
//         "Reduced post-harvest losses",
//         "Fair AI-powered pricing",
//         "Reliable market access",
//       ],
//     },

//     {
//       title: "Cities & Buyers",
//       description:
//         "Ensuring stable food supply and affordable produce delivery to urban markets.",
//       icon: <Building2 className="h-8 w-8 text-blue-700" />,
//       image: "/Institutional-buyer.png",
//       bg: "bg-[#EDF5FF]",
//       border: "border-blue-100",
//       badge: "bg-blue-100",
//       points: [
//         "Stable food supply",
//         "Lower market prices",
//         "Fresh produce delivery",
//       ],
//     },

//     {
//       title: "Logistics Partners",
//       description:
//         "Maximizing truck utilization through intelligent routing and backhaul optimization.",
//       icon: <Truck className="h-8 w-8 text-orange-700" />,
//       image: "/logistics-card.png",
//       bg: "bg-[#FFF5E8]",
//       border: "border-orange-100",
//       badge: "bg-orange-100",
//       points: [
//         "Fewer empty return trips",
//         "Higher fleet utilization",
//         "Optimized delivery routes",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="value-proposition"
//       className="relative py-10 bg-white overflow-hidden"
//     >
//       {/* Top Divider */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
//             VALUE FOR EVERYONE IN THE CHAIN
//           </p>

//           <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-6"></div>

//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0B132B] mb-5">
//             A Win-Win Ecosystem
//           </h2>

//           <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
//             AgriFlow AI creates measurable value across the agricultural supply chain —
//             from farmers in Northern Nigeria to urban consumers and logistics operators.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {stakeholders.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.15,
//               }}
//               whileHover={{
//                 y: -6,
//               }}
//               className="group"
//             >
//               <div
//                 className={`
//                   relative overflow-hidden
//                   rounded-[32px]
//                   border
//                   ${item.border}
//                   ${item.bg}
//                   p-8
//                   h-[420px]
//                   shadow-sm
//                   hover:shadow-xl
//                   transition-all
//                   duration-300
//                 `}
//               >

//                 {/* Icon */}
//                 <div
//                   className={`
//                     w-20 h-20
//                     rounded-3xl
//                     ${item.badge}
//                     flex items-center justify-center
//                     mb-5
//                   `}
//                 >
//                   {item.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 max-w-[62%]">

//                   <h3 className="text-2xl font-bold text-[#0B132B] mb-4">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 text-base leading-relaxed mb-5">
//                     {item.description}
//                   </p>

//                   <ul className="space-y-2">
//                     {item.points.map((point, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-center gap-3 text-gray-700"
//                       >
//                         <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />

//                         <span className="text-base">
//                           {point}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                 </div>

//                 {/* Character Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="
//                     absolute
//                     bottom-[-8px]
//                     right-2
//                     w-[34%]
//                     max-h-[220px]
//                     object-contain
//                     pointer-events-none
//                     transition-transform
//                     duration-300
//                     group-hover:scale-105
//                   "
//                 />

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValuePropositionSection;

import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Building2,
  Truck,
} from 'lucide-react';

const ValuePropositionSection = () => {
  const stakeholders = [
    {
      title: "Farmers",
      subtitle: null,
      icon: <User className="h-7 w-7 text-white" />,
      image: "/Farmer_card.png",
      bg: "bg-[#f2f7ed]",
      border: "border-emerald-100/60",
      badgeBg: "bg-[#1e5d2b]",
      bulletColor: "text-[#1e5d2b]",
      points: [
        "Fair pricing via AI grading",
        "Access to quality inputs",
        "Reduced exploitation",
        "More income, more growth",
      ],
    },
    {
      title: "Institutions",
      subtitle: "(Schools, Hospitals, Restaurants)",
      icon: <Building2 className="h-7 w-7 text-white" />,
      image: "/Institutional-buyer.png",
      bg: "bg-[#f0f5fa]",
      border: "border-blue-100/60",
      badgeBg: "bg-[#1d4ed8]",
      bulletColor: "text-[#1d4ed8]",
      points: [
        "Stable pricing",
        "Guaranteed quality",
        "Reliable delivery",
        "Supply-as-a-Service (Subscription model)",
      ],
    },
    {
      title: "Logistics Partners",
      subtitle: null,
      icon: <Truck className="h-7 w-7 text-white" />,
      image: "/logistics-card.png",
      bg: "bg-[#fdf8f0]",
      border: "border-amber-100/60",
      badgeBg: "bg-[#78350f]",
      bulletColor: "text-[#78350f]",
      points: [
        "Higher truck utilization",
        "Predictable routes",
        "Backhaul revenue",
        "Increased profitability",
      ],
    },
  ];

  return (
    <section
      id="value-proposition"
      className="relative py-5 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Value For Everyone in The Chain
          </h2>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-6"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B132B] mb-3 sm:mb-5">
            A Win-Win Ecosystem
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            AgriFlow AI creates measurable value across the agricultural supply chain —
            from farmers in Northern Nigeria to urban consumers and logistics operators.
          </p>
          {/* Accent Line */}
          {/*<div className="w-12 h-1 bg-emerald-600 mt-2.5 rounded-full" />*/}
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {stakeholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="group h-full"
            >
              <div
                className={`
                  relative overflow-hidden
                  rounded-[32px]
                  border
                  ${item.border}
                  ${item.bg}
                  p-6 sm:p-8
                  min-h-[380px]
                  flex flex-col justify-between
                  shadow-xs
                  hover:shadow-xl
                  transition-all
                  duration-300
                `}
              >

                {/* Left Side Content Area */}
                <div className="relative z-10 w-[58%] sm:w-[56%]">
                  
                  {/* Solid Circular Icon Badge */}
                  <div
                    className={`
                      w-14 h-14
                      rounded-full
                      ${item.badgeBg}
                      flex items-center justify-center
                      mb-6
                      shadow-md
                    `}
                  >
                    {item.icon}
                  </div>

                  {/* Title & Optional Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs font-bold text-slate-600 mt-1 leading-tight">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Bullet Points */}
                  <ul className="mt-6 space-y-2.5">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 leading-snug"
                      >
                        <span
                          className={`${item.bulletColor} text-base leading-none select-none`}
                        >
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Cutout Image Anchored Right & Bottom */}
                <div className="absolute right-0 bottom-0 h-[88%] w-[48%] flex items-end justify-end pointer-events-none z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full w-auto
                      object-contain
                      object-bottom
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionSection;