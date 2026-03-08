"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select a business type"),
  projectDescription: z.string().min(20, "Please describe your project in at least 20 characters"),
  budget: z.string().min(1, "Please select a budget range"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("https://formspree.io/f/xkoqgvya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        setSubmitError("Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitError("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <p className="text-sm text-green-600 dark:text-green-400 mt-4">
          In the meantime, you can schedule a free consultation below:
        </p>
        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
          <a href="https://calendly.com/" target="_blank" rel="noreferrer">
            Schedule Free Consultation
          </a>
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 max-w-2xl"
    >
      {submitError && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 dark:text-red-300">{submitError}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name" className="text-white font-medium mb-2 block">
            Your Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/30"
          />
          {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-white font-medium mb-2 block">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/30"
          />
          {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="phone" className="text-white font-medium mb-2 block">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+27 71 968 3272"
            {...register("phone")}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/30"
          />
          {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label htmlFor="businessType" className="text-white font-medium mb-2 block">
            Business Type
          </Label>
          <select
            id="businessType"
            {...register("businessType")}
            className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:border-white/30 text-sm"
          >
            <option value="" className="text-gray-900">
              Select your business type
            </option>
            <option value="Startup" className="text-gray-900">
              Startup
            </option>
            <option value="Small Business" className="text-gray-900">
              Small Business
            </option>
            <option value="E-commerce" className="text-gray-900">
              E-commerce
            </option>
            <option value="Service Business" className="text-gray-900">
              Service Business
            </option>
            <option value="Non-profit" className="text-gray-900">
              Non-profit
            </option>
            <option value="Other" className="text-gray-900">
              Other
            </option>
          </select>
          {errors.businessType && <p className="text-red-300 text-sm mt-1">{errors.businessType.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="projectDescription" className="text-white font-medium mb-2 block">
          Project Description
        </Label>
        <Textarea
          id="projectDescription"
          placeholder="Tell me about your project, what you want to achieve, and any specific requirements..."
          {...register("projectDescription")}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/30 min-h-32 resize-none"
        />
        {errors.projectDescription && (
          <p className="text-red-300 text-sm mt-1">{errors.projectDescription.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="budget" className="text-white font-medium mb-2 block">
          Budget Range
        </Label>
        <select
          id="budget"
          {...register("budget")}
          className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:border-white/30 text-sm"
        >
          <option value="" className="text-gray-900">
            Select your budget preference
          </option>
          <option value="Flexible / Let's Discuss" className="text-gray-900">
            Flexible / Let's Discuss
          </option>
        </select>
        {errors.budget && <p className="text-red-300 text-sm mt-1">{errors.budget.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 transition-all duration-200"
      >
        {isSubmitting ? "Sending..." : "Send My Project Details"}
      </Button>

      <p className="text-center text-white/70 text-sm">
        We typically respond within 24 hours. You can also{" "}
        <a href="tel:+27719683272" className="underline hover:text-white">
          call us directly
        </a>
        .
      </p>
    </motion.form>
  )
}
