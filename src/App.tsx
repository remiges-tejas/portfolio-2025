import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Building,
  GraduationCap,
  Code,
  Calendar,
} from "lucide-react";
import { AnimatedCard } from "./components/AnimatedCard";
import { AnimatedTitle } from "./components/AnimatedTitle";
import { motion } from "framer-motion";
import { GlowingBackground } from "./components/GlowingBackground";
import LiveProjectsSection from "./components/LiveProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <GlowingBackground>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2 text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100">
                Tejas W Bisen
              </h1>
              <p className="text-2xl mb-6 text-blue-200">Software Engineer</p>
              <div className="space-y-3 mb-8 text-blue-100">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Navi Mumbai, Maharashtra - India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>9834339517</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>bisentejas@gmail.com</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/tejasbisen/"
                  className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/Tejasbisen786"
                  className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:w-1/3 mt-8 md:mt-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
                <img
                  src="https://avatars.githubusercontent.com/u/74348222?v=4"
                  alt="Professional"
                  className="relative rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </GlowingBackground>

      {/* Live Projects Section */}

      <LiveProjectsSection />

      {/* Education Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedTitle>
          <GraduationCap className="w-8 h-8 mr-2" />
          Education
        </AnimatedTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedCard delay={0.1}>
            <h3 className="text-xl font-semibold">
              Bachelor of Engineering in Computer Science
            </h3>
            <p className="text-gray-600">Sant Gadge Baba Amravati University</p>
            <p className="text-blue-600 font-medium mt-2">Score - 9.1</p>
            <div className="mt-2 text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Aug 2020 – Jun 2024
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <h3 className="text-xl font-semibold">
              Diploma in Information Technology
            </h3>
            <p className="text-gray-600">Government Polytechnic Sadar Nagpur</p>
            <p className="text-blue-600 font-medium mt-2">Score - 87.35%</p>
            <div className="mt-2 text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Aug 2018 – Jun 2021
            </div>
          </AnimatedCard>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <AnimatedTitle>
            <Building className="w-8 h-8 mr-2" />
            Work Experience
          </AnimatedTitle>
          <div className="space-y-6">
            <AnimatedCard>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Trainee Engineer</h3>
                  <p className="text-gray-600">Remiges Technologies Pvt Ltd</p>
                  <p className="text-gray-500 italic">
                    (formerly known as Merce Technologies Pvt Ltd)
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-500">Present – July 2024</p>
                  <p className="text-gray-600">Navi Mumbai</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {[
                  "Underwent training in key technologies including Java, Spring Boot, Angular, and Linux fundamentals",
                  "Worked on Linux systems, utilizing fundamental commands and tools for system administration and deployment",
                  "Developed and maintained web applications with Angular, focusing on responsive UI design and enhancing user experience",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedCard>

            {/* Add other experience cards similarly */}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedTitle>
          <Code className="w-8 h-8 mr-2" />
          Technical Skills
        </AnimatedTitle>
        <AnimatedCard>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Java", "Spring Boot"].map(
                  (skill) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Angular",
                  "NodeJS",
                  "Express",
                  "Bootstrap",
                  "Git",
                  "GitHub",
                  "Docker",
                  "Linux",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "MySQL"].map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Tejas Bisen. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/tejasbisen/"
                className="hover:text-blue-400"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Tejasbisen786"
                className="hover:text-blue-400"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:bisentejas@gmail.com"
                className="hover:text-blue-400"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
