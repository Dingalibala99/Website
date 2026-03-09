"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  User,
  Download,
  Menu,
  X,
  ChevronDown,
  Star,
  Calendar,
  Globe,
  Zap,
  Code,
  Briefcase,
  CheckCircle,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from "@/components/ContactForm"
import { ServiceCard } from "@/components/ServiceCard"
import { FloatingCTA } from "@/components/FloatingCTA"
import { ProcessStep } from "@/components/ProcessStep"
import { TechSlider } from "@/components/TechSlider"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const skills = [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "FastAPI",
    "Microsoft SQL Server",
    "SQLite",
    "Express.js",
    "Docker",
    "Python",
    "Solid.js",
    "lit-html",
    "Tailwind CSS",
    "Postman",
    "Swagger",
    "Redux",
    "HTML/CSS",
    "Git",
    "gitLab",
    "RESTful APIs",
  ]

  const softSkills = [
    "Knowledge Sharing",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Continuous Learning",
    "Emotional Intelligence",
  ]

  const heroWords = ["Web Solutions That", "Drive Real", "Business Growth"]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/10" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-extrabold gradient-text"
            >
              MD
            </motion.div>

            <div className="hidden md:flex space-x-1">
              {["home", "services", "about", "how-it-works", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${activeSection === item ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                >
                  {item === "how-it-works" ? "Process" : item}
                </button>
              ))}
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-white/10"
            >
              <div className="px-4 py-3 space-y-1">
                {["home", "services", "about", "how-it-works", "experience", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2.5 capitalize hover:bg-emerald-500/10 hover:text-emerald-600 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item === "how-it-works" ? "Process" : item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`block ${i === 0 ? 'gradient-text' : 'text-gray-900 dark:text-white'}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Professional websites and custom software built specifically for small businesses. Affordable. Reliable. Results-focused.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-6 text-base font-semibold shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-600 px-8 py-6 text-base font-semibold bg-transparent rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center space-x-4"
          >
            {[
              { href: "https://mail.google.com/mail/?view=cm&fs=1&to=makadunyiswed@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/makadunyiswe-dingalibala-686a56299/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Dingalibala99", icon: Github, label: "GitHub" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="text-gray-400" size={28} />
        </motion.div>
      </section>

      {/* Infinite Tech Slider */}
      <TechSlider />

      <section id="services" className="py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/50 dark:to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">What I Offer</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white tracking-tight">
              Solutions Built for
              <span className="gradient-text"> Small Business Success</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              Affordable, professional web development and software solutions tailored to help you grow your business.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={Globe}
                title="Website Design"
                description="Professional, modern websites that attract and convert visitors."
                features={[
                  "Mobile-responsive design",
                  "Fast loading speeds",
                  "SEO optimized",
                  "Easy to update",
                ]}
                index={0}
                onCTA={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
              <ServiceCard
                icon={TrendingUp}
                title="E-commerce Solutions"
                description="Sell online with secure, user-friendly shopping experiences."
                features={[
                  "Product management",
                  "Secure payments",
                  "Inventory tracking",
                  "Customer analytics",
                ]}
                index={1}
                onCTA={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
              <ServiceCard
                icon={Code}
                title="Custom Web Apps"
                description="Tailored software to streamline your business operations."
                features={[
                  "Task management",
                  "Data organization",
                  "User-friendly interface",
                  "Scalable design",
                ]}
                index={2}
                onCTA={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
              <ServiceCard
                icon={Zap}
                title="Website Optimization"
                description="Boost leads and sales from your existing website."
                features={[
                  "Performance tuning",
                  "Lead capture forms",
                  "Analytics setup",
                  "Conversion optimization",
                ]}
                index={3}
                onCTA={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white tracking-tight">
              Why Work <span className="gradient-text">With Me</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              I help small business owners build websites and software that actually work for their business.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {[
                  { title: "Affordable & Professional", desc: "High-quality websites and solutions at prices that make sense for small businesses." },
                  { title: "Fast Communication", desc: "I'm responsive and easy to reach. Most inquiries get a response within 24 hours." },
                  { title: "Results-Focused", desc: "I focus on solutions that generate leads, increase sales, and improve your bottom line." },
                  { title: "Ongoing Support", desc: "I don't disappear after launch. I'm here to help maintain and improve your investment." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-5 border border-gray-200/60 dark:border-white/10 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm group hover:-translate-y-0.5">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                            <CheckCircle className="text-white" size={20} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 gradient-border"
                >
                  <img
                    src="Mdu.jpg"
                    alt="Professional photo - Makadunyiswe Dingalibala"
                    className="w-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/50 dark:to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">My Process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white tracking-tight">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              A simple, transparent process from initial consultation to launch and beyond.
            </p>

            <div className="space-y-12 max-w-3xl mx-auto">
              <ProcessStep
                number={1}
                title="Discovery & Planning"
                description="We discuss your goals, challenges, and vision. I understand your business, target audience, and what success looks like for you."
                duration="1-2 weeks"
              />
              <ProcessStep
                number={2}
                title="Design & Proposal"
                description="I create a design mockup showing how your website or app will look and function, along with a clear proposal and timeline."
                duration="2-3 weeks"
              />
              <ProcessStep
                number={3}
                title="Development"
                description="I build your solution with clean, professional code. You'll see regular updates and can provide feedback throughout."
                duration="4-8 weeks"
              />
              <ProcessStep
                number={4}
                title="Testing & Refinement"
                description="We test everything thoroughly on all devices. I make any adjustments and ensure everything works perfectly."
                duration="1-2 weeks"
              />
              <ProcessStep
                number={5}
                title="Launch & Support"
                description="Your solution goes live. I provide training, documentation, and ongoing support to ensure your success."
                duration="Ongoing"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">Career Journey</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h2>

            <div className="space-y-8">
              <Card className="shadow-lg hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 border border-gray-200/60 dark:border-white/10 overflow-hidden group">
                <CardHeader className="bg-gradient-to-r from-rose-500 to-purple-600 text-white">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                        <img
                          src="logo.png"
                          alt="Onfon Mobile logo"
                          width="56"
                          height="56"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Software Engineer</CardTitle>
                        <CardDescription className="text-rose-100">Onfon Mobile</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-rose-100 mb-1">
                        <Calendar size={16} className="mr-2" />
                        November 2025 - Present
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Current Role</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <Star className="text-rose-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Maintain and optimize existing applications for performance and reliability
                    </li>
                    <li className="flex items-start">
                      <Star className="text-rose-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Create new features and functionalities to meet business requirements
                    </li>
                    <li className="flex items-start">
                      <Star className="text-rose-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Enhance applications with modern adaptations and cutting-edge technologies
                    </li>
                    <li className="flex items-start">
                      <Star className="text-rose-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Develop innovative solutions to increase company productivity and efficiency
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Supervisor:</strong> Shayur Misra | smisra@onfonmobile.co.za
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                        <img
                          src="bbd.png"
                          alt="BBD Software logo"
                          width="56"
                          height="56"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Intern</CardTitle>
                        <CardDescription className="text-emerald-100">BBD Software</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-emerald-100 mb-1">
                        <Calendar size={16} className="mr-2" />
                        February 2025 - July 2025
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">6 Months Of Work Experience</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <Star className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Completed intensive training building a productivity tool inspired by Trello and Monday.com
                    </li>
                    <li className="flex items-start">
                      <Star className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Developed full-stack applications using Solid.js, Python, and SQLite
                    </li>
                    <li className="flex items-start">
                      <Star className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Worked with Microsoft SQL Server, Flyway, Docker, and RESTful APIs
                    </li>
                    <li className="flex items-start">
                      <Star className="text-emerald-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Collaborated with development teams on Angular and Lit frameworks
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Reference:</strong> bongiwek@bbdsoftware.com | 061 471 2643
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                        <img
                          src="umuzi.webp"
                          alt="Umuzi logo"
                          width="56"
                          height="56"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Junior Tech Lead</CardTitle>
                        <CardDescription className="text-teal-100">Umuzi</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-teal-100 mb-1">
                        <Calendar size={16} className="mr-2" />
                        January 2024
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Second Year Experience</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <Star className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Facilitated stand-ups and managed daily team productivity
                    </li>
                    <li className="flex items-start">
                      <Star className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Developed applications using React, Redux, Sagas, and React Native
                    </li>
                    <li className="flex items-start">
                      <Star className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Led team collaboration through pod-sessions and help-sessions
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Reference:</strong> muzi.maphophe@umuzi.org | 084 411 8584
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                        <img
                          src="umuzi.webp"
                          alt="Umuzi logo"
                          width="56"
                          height="56"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Learnership</CardTitle>
                        <CardDescription className="text-cyan-100">Umuzi</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-cyan-100 mb-1">
                        <Calendar size={16} className="mr-2" />
                        January 2023
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">First Year Experience</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <Star className="text-cyan-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Developed web applications using JavaScript, HTML, CSS, and Node.js
                    </li>
                    <li className="flex items-start">
                      <Star className="text-cyan-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      Enhanced backend functionality with PostgreSQL, Express.js, and Docker
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Reference:</strong> lisamabe631@gmail.com | 067 696 2462
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/50 dark:to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <Carousel className="relative" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {/* School Management System */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a href="#" className="group block" aria-label="School Management System">
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">School Management System</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">MERN Stack</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>Full‑stack platform with role‑based dashboards for Admins, Teachers, and Students.</li>
                          <li>Admins manage users and announcements for school‑wide comms.</li>
                          <li>Teachers create/update/delete tasks, invite users, and grade with controls.</li>
                          <li>Students accept invites and track tasks on a Kanban board.</li>
                          <li>RESTful APIs, secure data models, and responsive UI across devices.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["MongoDB", "Express.js", "React", "Node.js", "REST APIs"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-emerald-50 text-emerald-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Visitor Management System */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a href="#" className="group block" aria-label="Visitor Management System">
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Visitor Management System</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">Express, Node.js, JS, PostgreSQL, CSS</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>SPA to capture and display visitor information in a streamlined flow.</li>
                          <li>Form captures Full Name, Age, Date of Visit, Comments with validation.</li>
                          <li>Stores securely in PostgreSQL with server‑side validation.</li>
                          <li>Smooth flow to Thank You and a Visitor Log of all entries.</li>
                          <li>REST endpoints and front‑end routes for efficient SPA behavior.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Express.js", "Node.js", "PostgreSQL", "JavaScript", "CSS"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-cyan-50 text-cyan-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Wriggle */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a href="#" className="group block" aria-label="Wriggle — Team Collaboration and Productivity Tool">
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Wriggle — Collaboration & Productivity</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">Solid.js, Python, Microsoft SQL Server</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>Built during BBD training; inspired by Trello and Monday.com.</li>
                          <li>Teams, task management, role assignment, and collaboration features.</li>
                          <li>Backend services and REST APIs with migrations and data modeling.</li>
                          <li>Persistence in MS SQL Server; Python backend and Solid.js front‑end.</li>
                          <li>Presented outcomes: functionality, UX, technical design, deployment.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Solid.js", "Python", "MS SQL Server", "REST APIs", "Migrations"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-blue-50 text-blue-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Tilde Mockup (React) */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://grand-unicorn-22ea03.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label="Tilde Mockup — React project with hooks and props"
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-fuchsia-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Tilde Mockup — React</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">Hooks, useState, props; Kanban-style UI</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>Single-page React app mocking Umuzi’s Tilde board interactions.</li>
                          <li>Implements stateful columns (Backlog, In Progress, Review, Done).</li>
                          <li>Uses props composition and lifting state for task cards.</li>
                          <li>Responsive layout and keyboard-friendly navigation.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["React", "Hooks", "useState", "Props", "SPA"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-fuchsia-50 text-fuchsia-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Semitone Difference (Music) */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://6908ea51398c70d184e5fa8e--incandescent-florentine-410570.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label="Semitone Difference — calculates distance between notes"
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-rose-500 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Semitone Difference</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">Calculates distance between musical notes (sharps & flats)</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>Helps musicians compute semitone intervals quickly.</li>
                          <li>Supports enharmonics: sharps (♯) and flats (♭).</li>
                          <li>Interactive UI with input, controls, and streak feedback.</li>
                          <li>Built as a lightweight web app for fast practice.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Music Theory", "Intervals", "Sharps", "Flats", "Web App"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-rose-50 text-rose-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Memory Game */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://resilient-tanuki-d4a01b.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label="Memory Game — timer, counter, and grid size options"
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-violet-500 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Memory Game</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">Timer, counter, and adjustable grid size</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>Flip cards to find pairs and track your streak.</li>
                          <li>Includes timer and move counter for challenge.</li>
                          <li>Selectable grid sizes to scale difficulty.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["React", "JSX", "CSS"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-violet-50 text-violet-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>

                {/* Recipe Search App */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://recipe-search-q800.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label="Recipe Search — add ingredients and search cuisines"
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="h-36 bg-gradient-to-r from-amber-500 to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Recipe Search</CardTitle>
                        <CardDescription className="mt-1 text-gray-600 dark:text-gray-400">Add ingredients and find favorite cuisines</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          <li>Enter one or more ingredients to refine results.</li>
                          <li>Search and filter recipes by keywords/cuisines.</li>
                          <li>Clean, focused UI for quick discovery.</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["JavaScript", "CSS","React", "Redux", "REST APIs", "Node.js", "Web App"].map((t) => (
                            <Badge key={t} variant="secondary" className="bg-amber-50 text-amber-700">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border" />
              <CarouselNext className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/50 dark:to-background" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white tracking-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12">
              Have questions? I've answered the most common ones below.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  How much does a website cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  I'm reasonable and flexible with pricing! I believe in starting small and offering discounts to build
                  great testimonials and long-term relationships. Let's discuss your project needs and budget—I'll work with you
                  to find a solution that makes sense.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  How long does a project take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Most projects take 6-12 weeks from start to launch. This includes discovery, design, development,
                  testing, and refinement. Simple websites might be faster, while complex custom apps take longer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  Do I own the website/application?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Yes, 100%. You own all the code, content, and design. I provide you with all files and can help
                  transfer hosting/domains to your preferred provider.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  What about maintenance and updates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  I'm reasonable with maintenance pricing too. After your project launches, we can discuss ongoing support
                  options that fit your budget. This might include updates, backups, security, bug fixes, and technical support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  How do you ensure the website generates results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  I focus on user experience, mobile optimization, fast loading speeds, and clear calls-to-action. I also
                  set up analytics so you can track performance and we can continuously improve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  Do you work with small budgets?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Yes! I understand small business budgets. We can customize your project scope to fit your budget or
                  break the work into phases. Let's talk about what's possible for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200/60 dark:border-white/10 rounded-xl px-6 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  What if I'm not happy with the result?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Your satisfaction is my priority. I include multiple rounds of revisions during development. If you're
                  not happy with the final result, we'll work together to make it right.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 8s ease infinite' }} />
        {/* Decorative floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl" style={{ animation: 'float 10s ease-in-out infinite' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">Ready to Start Your Project?</h2>
            <p className="text-xl mb-12 text-white/80 max-w-2xl">
              Let's discuss your project, goals, and how I can help your business grow. Fill out the form below or give
              me a call.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Quick Contact</h3>

                  <div className="space-y-4">
                    <a
                      href="tel:+27719683272"
                      className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group"
                    >
                      <Phone className="text-white group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="text-sm text-emerald-100">Phone</p>
                        <p className="text-white font-semibold">+27 71 968 3272</p>
                      </div>
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=makadunyiswed@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group"
                    >
                      <Mail className="text-white group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="text-sm text-emerald-100">Email</p>
                        <p className="text-white font-semibold">makadunyiswed@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/makadunyiswe-dingalibala-686a56299/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group"
                    >
                      <Linkedin className="text-white group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="text-sm text-emerald-100">LinkedIn</p>
                        <p className="text-white font-semibold">Connect with me</p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/Dingalibala99"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 group"
                    >
                      <Github className="text-white group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="text-sm text-emerald-100">GitHub</p>
                        <p className="text-white font-semibold">View my code</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Why Choose Me
                  </h4>
                  <ul className="space-y-2.5 text-white/80 text-sm">
                    <li>✓ 3+ years of development experience</li>
                    <li>✓ 7+ completed professional projects</li>
                    <li>✓ Fast, reliable communication</li>
                    <li>✓ Full-stack capabilities</li>
                    <li>✓ 24-hour response guarantee</li>
                    <li>✓ Available for immediate projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gray-950 text-white py-10">
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">© 2025 Makadunyiswe Dingalibala. Crafted with passion and precision.</p>
        </div>
      </footer>

      <FloatingCTA onCtaClick={() => scrollToSection("contact")} />
    </div>
  )
}
