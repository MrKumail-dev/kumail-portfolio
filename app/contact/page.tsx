"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@devops.dev",
    href: "mailto:hello@devops.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    username: "@devops-engineer",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    username: "/in/devops-engineer",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    username: "@devops_engineer",
  },
]

export default function ContactPage() {
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
              <Link href="/experience" className="text-slate-300 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/contact" className="text-white">
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
            <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Ready to discuss your next project? Let's talk about how we can build scalable, reliable infrastructure
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-slate-400">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-300 text-sm font-medium">First Name</label>
                      <Input
                        placeholder="John"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-300 text-sm font-medium">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-medium">Subject</label>
                    <Input
                      placeholder="Project Discussion"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Tell me about your project requirements..."
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
              {/* Contact Details */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Contact Information</CardTitle>
                    <CardDescription className="text-slate-400">
                      Reach out through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors group"
                      >
                        <info.icon className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300" />
                        <div>
                          <p className="text-slate-300 text-sm">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Follow Me</CardTitle>
                    <CardDescription className="text-slate-400">Connect with me on social platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors group"
                      >
                        <social.icon className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300" />
                        <div>
                          <p className="text-slate-300 text-sm">{social.label}</p>
                          <p className="text-white font-medium">{social.username}</p>
                        </div>
                      </motion.a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Availability */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                      <span className="text-white font-semibold">Available for Projects</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Currently accepting new DevOps consulting and infrastructure projects. Let's discuss your
                      requirements!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
