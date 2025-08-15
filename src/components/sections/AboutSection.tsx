'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Code, Heart, Sparkles, User } from 'lucide-react';
import { getPersonalInfo } from '@/lib/portfolio-data';

const AboutSection = () => {
  const personalInfo = getPersonalInfo();
  // Slideshow images
  const images = [
    { src: '/do.png', caption: 'Department Officer of the Year' },
    { src: '/MVP.png', caption: 'MVP Meetup @ Microsoft' },
    { src: '/mvpmeet.png', caption: 'MVP Meetup @ Microsoft' },
    { src: '/doaward.png', caption: 'Department Officer of the Year Award' },
    { src: '/rta.png', caption: 'RTA Hackathon' },
    { src: '/AAAI.jpg', caption: 'AAAI Conference Presentation' },
    { src: '/mlsa.jpg', caption: 'Microsoft Student Ambassador Event' },
    { src: '/Academic Legend Award.png', caption: 'Academic Legend Award' },
    { src: '/womensday.png', caption: 'Womens in Tech Presentation' },
  ];
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
    useEffect(() => {
    const timer = setInterval(() => {
        setDirection(1);
        setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/10 rounded-full"></div>
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
                <User className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
            </div>
            <div className="w-24 h-1 gradient-pink mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Main bio */}
              <div className="bg-card rounded-2xl p-8 cute-shadow border border-border/50">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  Who I Am
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20"
                >
                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Role</p>
                      <p className="font-medium text-foreground">{personalInfo.title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Visual element */}
              {/* Picture Slideshow */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center justify-center"
                >
                  <div className="w-80 h-80 lg:w-96 lg:h-96 flex flex-col items-center justify-center overflow-hidden">
                    {/* Slide animation - fix jitter by using flexbox for centering */}
                    <div className="flex items-center justify-center w-full h-full relative">
                      <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                          key={images[index].src}
                          src={images[index].src}
                          alt={images[index].caption}
                          className="object-contain w-full h-full rounded-2xl border border-border cute-shadow absolute top-0 left-0"
                          custom={direction}
                          initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                          transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                        />
                      </AnimatePresence>
                    </div>
                    {/* Caption below image */}
                    <div className="w-full flex justify-center mt-2">
                      <span className="px-4 py-2 rounded-lg bg-background/70 text-sm text-foreground/80 backdrop-blur-sm border border-border/40">
                        {images[index].caption}
                      </span>
                    </div>
                    <div className="flex space-x-2 mt-4 z-10">
                      <button
                        className="px-3 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20"
                        onClick={() => {
                          setDirection(-1);
                          setIndex((i) => (i - 1 + images.length) % images.length);
                        }}
                        type="button"
                      >
                        Prev
                      </button>
                      <button
                        className="px-3 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20"
                        onClick={() => {
                          setDirection(1);
                          setIndex((i) => (i + 1) % images.length);
                        }}
                        type="button"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;