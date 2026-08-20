import React from 'react';
import { motion } from 'framer-motion';

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Core Infrastructure</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Powered by Deep Tech
          </h3>
          <p className="text-lg text-gray-600">
            We don't just move food; we digitize the entire supply chain from farm gate to city plate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* AI Grading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 bg-gray-900 rounded-3xl p-8 overflow-hidden relative group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-2">AI Produce Grading</h4>
                <p className="text-gray-400 mb-8 text-sm">Computer vision ensures only quality produce enters the network.</p>
                
                {/* Dashboard Placeholder */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-2xl">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Scan Line Animation */}
                    <div className="absolute top-0 w-full h-1 bg-emerald-400 shadow-[0_0_10px_#34d399] animate-[scan_2s_ease-in-out_infinite_alternate]"></div>
                    <div className="text-gray-500 text-xs">Camera Feed Active</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* ML Forecasting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-gray-900 rounded-3xl p-8 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-2">ML Forecasting Dashboard</h4>
                <p className="text-gray-400 text-sm">Predictive models map institutional demand against farm supply.</p>
              </div>

              {/* Chart Placeholder */}
              <div className="flex-grow bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-2xl flex flex-col justify-end">
                 <div className="flex items-end justify-between space-x-2 h-32 mb-4">
                    {/* Bars */}
                    {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                      <div key={i} className="w-full bg-gray-700 rounded-t-sm relative group/bar">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute bottom-0 w-full bg-secondary rounded-t-sm"
                        ></motion.div>
                      </div>
                    ))}
                 </div>
                 <div className="flex justify-between text-xs text-gray-500 border-t border-gray-700 pt-2">
                   <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
