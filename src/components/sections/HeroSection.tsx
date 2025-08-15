'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getPersonalInfo, getContactInfo } from '@/lib/portfolio-data';

const HeroSection = () => {
  const personalInfo = getPersonalInfo();
  const contactInfo = getContactInfo();

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-accent/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent/25 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-60 right-1/3 w-10 h-10 bg-accent/15 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg">Hello there! I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Tagline */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl text-primary font-medium sparkle"
            >
{personalInfo.tagline}
            </motion.p> */}

            {/* Bio
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {personalInfo.bio}
            </motion.p> */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-all duration-200 cute-shadow"
              >
                Let&apos;s Connect!
              </Link>
              
              {contactInfo.resume && (
                <Link
                  href={contactInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Link>
              )}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="hidden lg:flex items-center space-x-2 text-muted-foreground pt-8"
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Avatar/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
            >
              {/* Main avatar container */}
              <div className="w-full h-full gradient-pink rounded-full flex items-center justify-center relative overflow-hidden cute-shadow">
                {/* Geometric avatar design */}
                <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                  {/* Center circle */}
                  <div className="absolute inset-0 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/40 rounded-full flex items-center justify-center">
                      <Sparkles className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/60 rounded-full"></div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/50 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/60 rounded-full"></div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/50 rounded-full"></div>
                  </motion.div>
                </div>
                
                {/* Floating sparkles */}
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-4 left-8 w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-8 left-6 w-1 h-1 bg-white/60 rounded-full"></div>
                  <div className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                </motion.div>
              </div>

              {/* Decorative elements around avatar */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/30 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent/40 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/30 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent/40 rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;