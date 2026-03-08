"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  clientName: string
  businessType: string
  rating: number
  result?: string
}

export function TestimonialCard({
  quote,
  clientName,
  businessType,
  rating,
  result,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-0 shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed">"{quote}"</p>

          {/* Result */}
          {result && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{result}</p>
          )}

          {/* Client Info */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">{clientName}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{businessType}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
