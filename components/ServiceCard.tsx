"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  onCTA?: () => void
  index?: number
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  onCTA,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-gray-200/60 dark:border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm group gradient-border">
        <CardHeader className="pb-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-500"
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>

          <ul className="space-y-2.5">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <Button
            onClick={onCTA}
            className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            Request a Quote
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
