'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Globe, Download, Send, Heart } from 'lucide-react';
import Link from 'next/link';
import { getContactInfo } from '@/lib/portfolio-data';

const ContactSection = () => {
  const contactInfo = getContactInfo();

  const socialLinks = [
    {
      icon: Github,
      href: contactInfo.github,
      label: 'GitHub',
      color: 'hover:text-gray-700 hover:bg-gray-100',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      href: contactInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-600 hover:bg-blue-50',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Twitter,
      href: contactInfo.twitter,
      label: 'Twitter',
      color: 'hover:text-sky-500 hover:bg-sky-50',
      description: 'Follow my thoughts'
    },
    {
      icon: Globe,
      href: contactInfo.website,
      label: 'Website',
      color: 'hover:text-primary hover:bg-primary/10',
      description: 'Visit my website'
    }
  ].filter(link => link.href);

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary/8 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 gradient-pink rounded-full flex items-center justify-center">
                <Send className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Get In Touch</h2>
            </div>
            <div className="w-24 h-1 gradient-pink mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I&apos;m always excited to collaborate on interesting projects or discuss new opportunities. 
              Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Primary contact */}
              <div className="bg-card rounded-2xl p-8 cute-shadow border border-border/50">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  Let&apos;s Connect
                </h3>
                
                <div className="space-y-4">
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 gradient-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        Email Me
                      </p>
                      <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </Link>

                  {contactInfo.resume && (
                    <Link
                      href={contactInfo.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Download className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          Download Resume
                        </p>
                        <p className="text-sm text-muted-foreground">View my full experience</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>

              {/* Fun fact */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="h-5 w-5 text-primary animate-pulse" />
                  <span className="font-medium text-foreground">Fun Fact</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I love creating cute and functional designs that bring joy to users. 
                  Every project is an opportunity to add a little magic to the digital world!
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - Social links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-8 cute-shadow border border-border/50">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Find Me Online
                </h3>
                
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={social.href!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center space-x-4 p-4 rounded-xl border border-border/50 bg-background/50 transition-all duration-300 hover:scale-105 ${social.color}`}
                        >
                          <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{social.label}</p>
                            <p className="text-sm text-muted-foreground">{social.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Availability status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for new opportunities</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative inline-flex items-center justify-center">
              <div className="w-20 h-20 gradient-pink rounded-full flex items-center justify-center cute-shadow">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent/30 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent/30 rounded-full"></div>
              </motion.div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Thank you for visiting my portfolio!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;