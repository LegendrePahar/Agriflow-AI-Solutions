import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Before AgriFlow AI, I could harvest good yams and still lose money because buyers would decide the price by simply looking at them. Sometimes I waited so long that part of my harvest spoiled. With AgriFlow, my yams are graded using AI, so their quality has a clear standard and I receive a transparent farm-gate price. They buy my produce directly, so I can sell faster, reduce waste, and have more confidence in the income from my farm.",
      author: "Mrs. Ngukuran Iorbee.",
      role: "Farmer, Benue State",
      image: "/testimonial-farmer.jpg",
    },

    {
      quote:
        "Our food budget used to fluctuate whenever market prices changed, and maintaining consistent quality was another challenge. With AgriFlow AI, our monthly supply contracts give us predictable pricing and reliable quality. The AI acts as our digital eye, grading and standardizing the produce before it reaches us, so we know what we are receiving meets the quality we agreed on. It gives us confidence, consistency, and better control over our food supply.",

      author: "Mrs. Ovoke",
      role: "School Administrator, Warri Delta State",
      image: "/testimonial-school-admin.jpg",
    },

    {
      quote:
        "The reliability is unmatched. As a restaurant owner, knowing exactly when my fresh produce will arrive allows me to plan menus perfectly.",
      author: "Chef Abidemi",
      role: "Restaurant Owner, Lagos",
      image: "/testimonial-chef.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            TRUSTED BY THOSE WE SERVE
          </p>

          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-6"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B132B] mb-5">
            Real Stories. <span className="text-primary">Real Impact.</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            From farmers in Northern Nigeria to institutions and businesses in
            major cities, AgriFlow AI is creating measurable impact across the
            food supply chain.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="group"
            >
              <div
                className="
                  bg-white
                  border
                  border-gray-100
                  rounded-[32px]
                  p-8
                  h-full
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-6" />

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4">

                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border
                      border-green-100
                    "
                  />

                  <div>
                    <h4 className="font-bold text-[#0B132B]">
                      {testimonial.author}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;