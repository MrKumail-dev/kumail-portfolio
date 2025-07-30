"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Building } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading infrastructure automation and cloud migration initiatives for enterprise clients. Architected and implemented scalable Kubernetes clusters serving 10M+ daily users.",
    achievements: [
      "Reduced deployment time by 85% through automated CI/CD pipelines",
      "Implemented multi-cloud strategy saving $2M annually in infrastructure costs",
      "Led team of 6 engineers in migrating 50+ microservices to Kubernetes",
      "Established monitoring and alerting systems achieving 99.9% uptime",
    ],
    technologies: ["Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus", "Grafana"],
  },
  {
    title: "DevOps Engineer",
    company: "CloudNative Inc",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Focused on container orchestration and infrastructure as code. Built and maintained CI/CD pipelines for multiple product teams in a fast-paced startup environment.",
    achievements: [
      "Designed and implemented Docker containerization strategy",
      "Created reusable Terraform modules reducing provisioning time by 70%",
      "Established security best practices and compliance automation",
      "Mentored junior engineers and conducted technical interviews",
    ],
    technologies: ["Docker", "Terraform", "GitLab CI", "AWS", "Ansible", "ELK Stack"],
  },
  {
    title: "Systems Administrator",
    company: "DataFlow Systems",
    location: "Denver, CO",
    period: "2019 - 2020",
    description:
      "Managed on-premises infrastructure and began transition to cloud services. Responsible for system monitoring, backup strategies, and performance optimization.",
    achievements: [
      "Migrated legacy systems to AWS reducing operational costs by 40%",
      "Implemented automated backup and disaster recovery procedures",
      "Optimized database performance improving query response time by 60%",
      "Established configuration management using Ansible",
    ],
    technologies: ["Linux", "AWS", "MySQL", "Ansible", "Nagios", "Bash"],
  },
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "AWS",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    badge: "K8s",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    badge: "TF",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc",
    date: "2021",
    badge: "Docker",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-white">
              <Link href="/">DevOps.dev</Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-white">
                Experience
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Experience</h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              My professional journey in DevOps, infrastructure engineering, and cloud technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={exp.title} variants={fadeInUp} className="relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent" />
                )}

                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 ml-12">
                  <div className="absolute -left-6 top-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                    <Building className="w-5 h-5 text-white" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-blue-400 font-medium text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-slate-300 leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-slate-300 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
            <p className="text-slate-400 text-lg">
              Professional certifications validating my expertise in cloud and DevOps technologies
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div key={cert.name} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="group">
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                      <span className="text-white font-bold text-sm">{cert.badge}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm leading-tight">{cert.name}</h3>
                    <p className="text-slate-400 text-xs mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                      {cert.date}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
