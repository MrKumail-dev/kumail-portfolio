"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

const projects = [
  {
    title: "Kubernetes Multi-Cluster Management",
    description:
      "Built a comprehensive multi-cluster Kubernetes management platform with automated failover, monitoring, and resource optimization across AWS, Azure, and GCP.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana", "ArgoCD"],
    github: "#",
    demo: "#",
    category: "Infrastructure",
  },
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Designed and implemented a fully automated CI/CD pipeline reducing deployment time by 80% and eliminating manual errors through comprehensive testing and validation.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Jenkins", "Docker", "Terraform", "AWS", "SonarQube"],
    github: "#",
    demo: "#",
    category: "Automation",
  },
  {
    title: "Infrastructure as Code Framework",
    description:
      "Developed a reusable IaC framework using Terraform modules, enabling rapid environment provisioning and consistent infrastructure across multiple projects.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Terraform", "AWS", "Ansible", "Python", "GitLab CI"],
    github: "#",
    demo: "#",
    category: "IaC",
  },
  {
    title: "Microservices Monitoring Stack",
    description:
      "Implemented comprehensive observability solution for microservices architecture with distributed tracing, metrics collection, and intelligent alerting.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Prometheus", "Grafana", "Jaeger", "ELK Stack", "Kubernetes"],
    github: "#",
    demo: "#",
    category: "Monitoring",
  },
  {
    title: "Cloud Migration Strategy",
    description:
      "Led the migration of legacy monolithic applications to cloud-native microservices, resulting in 60% cost reduction and improved scalability.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["AWS", "Docker", "Kubernetes", "RDS", "CloudFormation"],
    github: "#",
    demo: "#",
    category: "Migration",
  },
  {
    title: "Security Compliance Automation",
    description:
      "Built automated security scanning and compliance checking system integrated into CI/CD pipeline, ensuring continuous security validation.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vault", "SAST", "DAST", "Kubernetes", "Policy as Code"],
    github: "#",
    demo: "#",
    category: "Security",
  },
]

const categories = ["All", "Infrastructure", "Automation", "IaC", "Monitoring", "Migration", "Security"]

export default function ProjectsPage() {
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
              <Link href="/projects" className="text-white">
                Projects
              </Link>
              <Link href="/experience" className="text-slate-300 hover:text-white transition-colors">
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
            <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              A collection of DevOps projects showcasing infrastructure automation, cloud architecture, and system
              reliability engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp} whileHover={{ y: -5 }} className="group">
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-slate-900/80 text-slate-300">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 flex-1 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
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
