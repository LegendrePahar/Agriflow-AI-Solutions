import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, QrCode, Eye } from "lucide-react";

const trustFeatures = [
  { icon: <ShieldCheck size={24} />, label: "Trusted", desc: "AI verified quality you can rely on." },
  { icon: <BarChart3 size={24} />, label: "Standardized", desc: "Same grade means same quality." },
  { icon: <QrCode size={24} />, label: "Traceable", desc: "Every batch is traceable." },
  { icon: <Eye size={24} />, label: "Transparent", desc: "Clear data for fair transactions." },
];

const passportData = [
  { label: "Produce", value: "Yam" },
  { label: "Grade", value: "A" },
  { label: "Average Weight", value: "10.2 kg" },
  { label: "Freshness", value: "Excellent" },
  { label: "Uniformity", value: "98%" },
  { label: "Defect Rate", value: "0.4%" },
  { label: "Market Price", value: "₦3,850 / tuber" },
];

const QualityPassportSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B132B] leading-tight mb-4">
              Every Batch Comes With an{" "}
              <span className="text-primary">AI Quality Passport</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A digital certificate that builds trust and ensures transparency
              across every transaction in the supply chain.
            </p>
          </motion.div>

          {/* CENTER — Passport Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-primary uppercase tracking-widest">AgriFlow-AI</p>
                <p className="font-bold text-[#0B132B] text-sm">AI Quality Passport</p>
              </div>
            </div>

            {/* Produce image placeholder */}
            <div className="w-full h-32 rounded-2xl bg-gray-50 mb-5 overflow-hidden flex items-center justify-center">
              <img
                src="/passport-produce.png"
                alt="Yam produce"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Data rows */}
            <div className="space-y-2.5">
              {passportData.map((row) => (
                <div key={row.label} className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{row.label}</span>
                  <span className="text-[#0B132B] font-semibold text-sm">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Verified badge */}
            <div className="mt-5 flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl px-4 py-2.5">
              <ShieldCheck className="text-primary w-4 h-4" />
              <span className="text-primary text-sm font-semibold">Verified by AgriFlow AI</span>
            </div>
          </motion.div>

          {/* RIGHT — Trust features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-3"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-[#0B132B] text-sm">{feature.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QualityPassportSection;