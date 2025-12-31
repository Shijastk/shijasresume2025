
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FeatureSteps({
  features,
  title = "My Development Workflow",
  autoPlayInterval = 3000,
  className = "",
}) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + (100 / (autoPlayInterval / 100)))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, autoPlayInterval, features.length])

  return (
    <div className={`p-8 md:p-12 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-16 text-center text-white tracking-tight">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* LEFT STEPS */}
          <div className="order-2 md:order-1 space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 cursor-pointer"
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative">
                   <motion.div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center border transition-all ${
                      index === currentFeature
                        ? "bg-indigo-600 border-indigo-400 text-white scale-110 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                        : "bg-gray-900 border-white/5 text-gray-500"
                    }`}
                  >
                    <span className="font-bold text-lg">{index + 1}</span>
                  </motion.div>
                  {index === currentFeature && (
                    <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 pointer-events-none">
                       <circle
                        cx="50%" cy="50%" r="48%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-indigo-500/30"
                      />
                      <circle
                        cx="50%" cy="50%" r="48%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset={100 - progress}
                        className="text-indigo-400"
                      />
                    </svg>
                  )}
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                className="absolute inset-0"
                initial={{ y: 80, opacity: 0, scale: 1.1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -80, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={features[currentFeature].image}
                  alt={features[currentFeature].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
