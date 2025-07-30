"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-xl">Kumail</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="hover:text-gray-600 transition-colors">
              ABOUT
            </a>
            <a href="#work" className="hover:text-gray-600 transition-colors">
              WORK
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="initial" animate="animate" className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-8">
              <motion.div variants={fadeIn}>
                <h1 className="text-6xl lg:text-8xl font-light leading-none tracking-tight">
                  INFRASTRUCTURE
                  <br />
                  <span className="text-gray-500">ENGINEER</span>
                </h1>
              </motion.div>

              <motion.div variants={fadeIn} className="max-w-2xl">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  I build and scale cloud infrastructure. Currently focused on Kubernetes orchestration, CI/CD
                  automation, and infrastructure as code. Based in San Francisco.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center space-x-6">
                <button className="bg-black text-white px-6 py-3 text-sm font-mono hover:bg-gray-800 transition-colors">
                  <a href="#contact">GET IN TOUCH</a>
                </button>
                <button className="border border-gray-300 px-6 py-3 text-sm font-mono hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>RESUME</span>
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-2 flex justify-end">
                <motion.div variants={fadeIn} className="space-y-6 relative">
                  
                  {/* Image */}
                  <div className="w-64 h-64 bg-gray-100 overflow-hidden rounded-full ml-auto">
                    <img
                      src="/pic-01.png"
                      alt="DevOps Engineer"
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* CONNECT Section - Outside bottom-left of image */}
                  <div className="absolute left-0 top-[270px]">  {/* Adjust top as needed */}
                    <h3 className="text-sm font-mono text-gray-500 mb-2">CONNECT</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-12 tracking-tight">About</h2>
            <div className="grid md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
              <div className="space-y-6">
                <p>
                  With over 5 years of experience in DevOps and cloud infrastructure, I specialize in building scalable,
                  reliable systems that power modern applications.
                </p>
                <p>
                  I've worked with startups and enterprise companies, helping them migrate to cloud-native
                  architectures, implement Infrastructure as Code, and establish monitoring practices.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  My approach focuses on automation, reliability, and developer experience. I believe in building
                  systems that are not just functional, but maintainable and scalable.
                </p>
                <p>
                  When I'm not optimizing deployments, you'll find me contributing to open-source projects or exploring
                  the latest in cloud technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-12 tracking-tight">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4">CLOUD PLATFORMS</h3>
                <div className="space-y-2 text-gray-800">
                  <div>Amazon Web Services</div>
                  <div>Microsoft Azure</div>
                  <div>Google Cloud Platform</div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4">ORCHESTRATION</h3>
                <div className="space-y-2 text-gray-800">
                  <div>Kubernetes</div>
                  <div>Docker</div>
                  <div>Helm</div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4">AUTOMATION</h3>
                <div className="space-y-2 text-gray-800">
                  <div>Terraform</div>
                  <div>Ansible</div>
                  <div>Jenkins</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-12 tracking-tight">Experience</h2>
            <div className="space-y-16">
              {/* Job 1 */}
              <div className="grid md:grid-cols-12 gap-8 border-b border-gray-200 pb-16">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-gray-500">2022 — PRESENT</div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-light mb-2">Senior DevOps Engineer</h3>
                  <div className="text-gray-600 mb-4">TechCorp Solutions, San Francisco</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Leading infrastructure automation and cloud migration initiatives for enterprise clients.
                    Architected and implemented scalable Kubernetes clusters serving 10M+ daily users.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Reduced deployment time by 85% through automated CI/CD pipelines</div>
                    <div>• Implemented multi-cloud strategy saving $2M annually</div>
                    <div>• Led team of 6 engineers in migrating 50+ microservices</div>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="grid md:grid-cols-12 gap-8 border-b border-gray-200 pb-16">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-gray-500">2020 — 2022</div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-light mb-2">DevOps Engineer</h3>
                  <div className="text-gray-600 mb-4">CloudNative Inc, Austin</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Focused on container orchestration and infrastructure as code. Built and maintained CI/CD pipelines
                    for multiple product teams in a fast-paced startup environment.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Designed and implemented Docker containerization strategy</div>
                    <div>• Created reusable Terraform modules reducing provisioning time by 70%</div>
                    <div>• Established security best practices and compliance automation</div>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <div className="text-sm font-mono text-gray-500">2019 — 2020</div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-light mb-2">Systems Administrator</h3>
                  <div className="text-gray-600 mb-4">DataFlow Systems, Denver</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Managed on-premises infrastructure and began transition to cloud services. Responsible for system
                    monitoring, backup strategies, and performance optimization.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Migrated legacy systems to AWS reducing costs by 40%</div>
                    <div>• Implemented automated backup and disaster recovery</div>
                    <div>• Optimized database performance improving response time by 60%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-12 tracking-tight">Let's Work Together</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  I'm currently available for consulting projects and full-time opportunities. Let's discuss how we can
                  build reliable, scalable infrastructure together.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-mono text-gray-500 mb-1">EMAIL</div>
                    <a href="mailto:hello@devops.engineer" className="text-gray-800 hover:text-black transition-colors">
                      hello@devops.engineer
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-gray-500 mb-1">PHONE</div>
                    <a href="tel:+15551234567" className="text-gray-800 hover:text-black transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border-b border-gray-300 pb-2 bg-transparent focus:border-black outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full border-b border-gray-300 pb-2 bg-transparent focus:border-black outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell me about your project"
                      rows={4}
                      className="w-full border-b border-gray-300 pb-2 bg-transparent focus:border-black outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 text-sm font-mono hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-500">© 2024 DevOps Engineer</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
