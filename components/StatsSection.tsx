"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatProps {
  icon: LucideIcon
  value: number | string
  label: string
  suffix?: string
}

export function StatCard({ icon: Icon, value, label, suffix = "" }: StatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isInView])

  useEffect(() => {
    if (!isInView || typeof value !== "number") return

    let animationFrame: number
    let currentValue = 0
    const target = value
    const duration = 2000 // 2 seconds animation
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      currentValue = Math.floor(target * progress)
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(target)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>
      <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {displayValue}
        {suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-medium">{label}</p>
    </motion.div>
  )
}

interface StatsGridProps {
  stats: StatProps[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
