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
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from "@/components/ContactForm"
import { ServiceCard } from "@/components/ServiceCard"
import { FloatingCTA } from "@/components/FloatingCTA"
import { ProcessStep } from "@/components/ProcessStep"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            >
              MD
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["home", "services", "about", "how-it-works", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-emerald-600 ${activeSection === item ? "text-emerald-600 font-medium" : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {item === "how-it-works" ? "How It Works" : item}
                </button>
              ))}
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="md:hidden bg-white dark:bg-gray-900 border-t"
            >
              <div className="px-4 py-2 space-y-2">
                {["home", "services", "about", "how-it-works", "experience", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  >
                    {item === "how-it-works" ? "How It Works" : item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Web Solutions That
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Drive Real Business Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Professional websites and custom software built specifically for small businesses. Affordable. Reliable. Results-focused.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 bg-transparent"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=makadunyiswed@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/makadunyiswe-dingalibala-686a56299/"
                target="_blank"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                rel="noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Dingalibala99"
                target="_blank"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                rel="noreferrer"
              >
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </section>

      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
              Solutions Built for Small Business Success
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
                onCTA={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Why Work With Me</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              I help small business owners build websites and software that actually work for their business.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Affordable & Professional
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          High-quality websites and solutions at prices that make sense for small businesses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Fast Communication
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          I'm responsive and easy to reach. Most inquiries get a response within 24 hours.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Results-Focused
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          I focus on solutions that generate leads, increase sales, and improve your bottom line.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Ongoing Support
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          I don't disappear after launch. I'm here to help maintain and improve your investment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="Mdu.jpg"
                    alt="Professional photo - Makadunyiswe Dingalibala"
                    className="w-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold">
                    Available for new projects
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">How It Works</h2>
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

      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
              Professional Experience
            </h2>

            <div className="space-y-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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

      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">Projects</h2>

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

      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12">
              Have questions? I've answered the most common ones below.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  How much does a website cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Website costs depend on complexity. Simple websites start around R45,000-R95,000, while more complex
                  solutions range from R180,000-R475,000+. I provide custom quotes after understanding your needs. We can
                  discuss flexible payment plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  How long does a project take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Most projects take 6-12 weeks from start to launch. This includes discovery, design, development,
                  testing, and refinement. Simple websites might be faster, while complex custom apps take longer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  Do I own the website/application?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Yes, 100%. You own all the code, content, and design. I provide you with all files and can help
                  transfer hosting/domains to your preferred provider.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  What about maintenance and updates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  I offer maintenance packages starting at R3,600-R9,500/month depending on your needs. This includes updates,
                  backups, security, and technical support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  How do you ensure the website generates results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  I focus on user experience, mobile optimization, fast loading speeds, and clear calls-to-action. I also
                  set up analytics so you can track performance and we can continuously improve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                  Do you work with small budgets?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  Yes! I understand small business budgets. We can customize your project scope to fit your budget or
                  break the work into phases. Let's talk about what's possible for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
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

      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl mb-12 text-emerald-50 max-w-2xl">
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
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
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
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
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
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
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
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                    >
                      <Github className="text-white group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="text-sm text-emerald-100">GitHub</p>
                        <p className="text-white font-semibold">View my code</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Why Choose Me
                  </h4>
                  <ul className="space-y-2 text-emerald-50 text-sm">
                    <li>✓ 3+ years of development experience</li>
                    <li>✓ 7+ completed professional projects</li>
                    <li>✓ Fast, reliable communication</li>
                    <li>✓ Full-stack capabilities</li>
                    <li>✓ 24-hour response guarantee</li>
                    <li>✓ Available for immediate projects</li>
                  </ul>
                </div>

                <Button size="lg" className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold" asChild>
                  <a
                    href="https://drive.google.com/file/d/19p-JCFxCi0Hr0Vy_YgfUXxeOF_v1LHRo/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="mr-2" size={20} />
                    Download My CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Makadunyiswe Dingalibala. Crafted with passion and precision.</p>
        </div>
      </footer>

      <FloatingCTA onCtaClick={() => scrollToSection("contact")} />
    </div>
  )
}
