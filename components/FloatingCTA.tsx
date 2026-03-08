"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FloatingCTAProps {
  onCtaClick: () => void
}

export function FloatingCTA({ onCtaClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        setIsVisible(rect.top > window.innerHeight * 0.5)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block"
        >
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <Button
              onClick={onCtaClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl px-6 py-6 rounded-full flex items-center gap-2 text-base font-semibold"
            >
              <Phone size={20} />
              Schedule Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
