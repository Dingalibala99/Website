"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  duration?: string
}

export function ProcessStep({ number, title, description, duration }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: number * 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.15 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 relative"
            style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
          >
            {number}
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/30 animate-pulse-glow" />
          </motion.div>
          {/* Gradient connector line */}
          <div className="w-0.5 h-24 bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-200/30 dark:to-emerald-900/20 mt-3 rounded-full" />
        </div>

        {/* Step Content */}
        <div className="pb-8 pt-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{description}</p>
          {duration && (
            <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              {duration}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
