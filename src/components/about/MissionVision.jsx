import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-50/40 backdrop-blur-sm border border-emerald-900/5 rounded-2xl p-10"
          >
            <img src="/mission-card.png" alt="Our mission" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-bold text-[#0B132B] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To transform Nigeria’s food supply chain by using AI to 
              bring transparency and standardization to agricultural produce—fairly 
              procuring from farmers, reducing post-harvest waste, and delivering consistent,
              quality food to institutions where demand is highest.

            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-emerald-50/40 backdrop-blur-sm border border-emerald-900/5 rounded-2xl p-10"
          >
            <img src="/vision-card.png" alt="Our vision" className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-bold text-[#0B132B] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A Nigeria where every farmer has access to fair markets, every
              buyer has visibility into their supply chain, and food security
              is powered by technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;