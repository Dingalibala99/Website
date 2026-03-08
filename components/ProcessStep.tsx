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
        {/* Step Number Circle */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: number * 0.1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
          >
            {number}
          </motion.div>
          {/* Vertical Line */}
          <div className="w-1 h-24 bg-gradient-to-b from-emerald-500 to-emerald-200 dark:to-emerald-900/30 mt-2" />
        </div>

        {/* Step Content */}
        <div className="pb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{description}</p>
          {duration && (
            <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
              {duration}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
