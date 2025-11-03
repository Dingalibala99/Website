"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Linkedin, Github, User, Download, Menu, X, ChevronDown, Star, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
              {["home", "about", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-emerald-600 ${activeSection === item ? "text-emerald-600 font-medium" : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {item}
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
                {["home", "about", "experience", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  >
                    {item}
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
                Makadunyiswe
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Dingalibala</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Software Engineer crafting robust, user-centered digital products with passion and precision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
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

      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">About Me</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <User className="text-emerald-600 mr-3" size={28} />
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Professional Summary</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      Motivated and detail-oriented software developer with hands-on experience in maintaining and enhancing internal systems. Skilled in both front-end and back-end development, with a strong foundation in TypeScript, JavaScript, SQL, and frameworks like Lit-HTML and Express.js. Proven ability to contribute to feature development, bug fixing, and system optimization within cross-functional teams. Passionate about creating user-friendly, scalable solutions and improving the overall user experience through thoughtful design and gamification strategies. Adept at working in collaborative environments and committed to writing clean, maintainable code.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
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

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
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

      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Intern</CardTitle>
                      <CardDescription className="text-emerald-100">BBD Software</CardDescription>
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
                      <strong>Reference:</strong> Naomi@bbdsoftware.com | 073 158 2450
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Junior Tech Lead</CardTitle>
                      <CardDescription className="text-teal-100">Umuzi</CardDescription>
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
                      <strong>Reference:</strong> muzi.mkhonto@umuzi.org | 084 411 8584
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Learnership</CardTitle>
                      <CardDescription className="text-cyan-100">Umuzi</CardDescription>
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
                      <strong>Reference:</strong> lisa.mabe@umuzi.org | 067 696 2462
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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

      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing
              teams.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <a
                href="tel:+27719683272"
                className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone size={20} />
                <span>+27 71 968 3272</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=makadunyiswed@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/makadunyiswe-dingalibala-686a56299/"
                target="_blank"
                className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                rel="noreferrer"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Dingalibala99"
                target="_blank"
                className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                rel="noreferrer"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3" asChild>
              <a
                href="https://drive.google.com/file/d/19p-JCFxCi0Hr0Vy_YgfUXxeOF_v1LHRo/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2" size={20} />
                Download Full CV
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Makadunyiswe Dingalibala. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
