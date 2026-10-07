import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/problem-section.png"
              alt="Food waste and logistics challenges in Nigeria"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">
              THE PROBLEM WE SAW
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0B132B] mb-4 sm:mb-4">
              Nigeria loses up to 40% of its food before it reaches the market
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Poor logistics, fragmented supply chains and lack of real-time
              visibility mean farmers lose income, prices stay unstable, and
              fresh produce spoils before it ever reaches a buyer.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                Farmers struggle to find reliable buyers
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                Produce spoils in transit due to poor coordination
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                Institutional buyers lack visibility into supply
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
