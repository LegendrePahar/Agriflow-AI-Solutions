import React from "react";
import { motion } from "framer-motion";
import {
  Sprout, Brain, BadgeDollarSign, ShoppingCart,
  ClipboardList, Truck, BarChart3
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <Sprout size={22} />,
    title: "Harvest & Upload",
    image: "/process-harvest.png",
    points: [
      "Farmer harvests produce.",
      "Uploads photos via the AgriFlow AI app.",
      "Or requests pickup from our team.",
    ],
  },
  {
    number: 2,
    icon: <Brain size={22} />,
    title: "AI Produce Grading",
    image: "/process-grading.png",
    points: [
      "Our AI model analyzes each item.",
      "Evaluates weight, size, shape, color, defects, freshness & uniformity.",
      "Gets market trend and price data for the produce.",
    ],
  },
  {
    number: 3,
    icon: <BadgeDollarSign size={22} />,
    title: "Instant Fair Pricing",
    image: "/process-pricing.png",
    points: [
      "AI determines the true market value.",
      "Farmer accepts and gets paid instantly.",
    ],
  },
  {
    number: 4,
    icon: <ShoppingCart size={22} />,
    title: "AgriFlow AI Purchases",
    image: "/process-purchase.png",
    points: [
      "We purchase and physically verify.",
      "Produce is added to our AI-certified inventory.",
    ],
  },
  {
    number: 5,
    icon: <ClipboardList size={22} />,
    title: "Institutions Order",
    image: "/process-order.png",
    points: [
      "Schools, hospitals, hotels, restaurants & govt. browse certified produce.",
      "Know exactly what they are buying.",
    ],
  },
  {
    number: 6,
    icon: <Truck size={22} />,
    title: "Smart Logistics (Milk Run)",
    image: "/process-logistics.png",
    points: [
      "Optimized routes reduce cost & time.",
      "North → South: Fresh produce",
      "South → North: Farm inputs",
    ],
  },
  {
    number: 7,
    icon: <BarChart3 size={22} />,
    title: "Delivery & Analytics",
    image: "/process-delivery.png",
    points: [
      "Timely delivery to institutions.",
      "Digital confirmation & feedback.",
      "Data insights improve yield, pricing & planning.",
    ],
  },
];

const ProcessSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] mb-3">
            The <span className="text-primary">AgriFlow AI</span> Process
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-2 mb-2" />
          <p className="text-gray-500 text-lg">
            A transparent, technology-driven process that benefits everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center"
            >
              {/* Number + arrow row */}
              <div className="flex items-center w-full mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px border-t-2 border-dashed border-primary/30 mx-1" />
                )}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 w-full flex flex-col gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#0B132B] leading-tight">
                  {step.title}
                </h3>

                {/* Image placeholder */}
                <div className="w-full h-24 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Bullet points */}
                <ul className="space-y-1.5">
                  {step.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-1.5">
                      <span className="text-primary font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-600 text-xs leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;