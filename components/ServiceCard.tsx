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
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  onCTA,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-900">
        <CardHeader className="pb-3">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{description}</p>

          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={onCTA}
            className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Request a Quote
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
