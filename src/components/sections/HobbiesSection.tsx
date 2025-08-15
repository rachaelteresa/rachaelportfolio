"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon, Sparkles } from "lucide-react";
import { getAwards } from "@/lib/portfolio-data";
import type { Award } from "@/types/portfolio";

const AwardsSection = () => {
  const awards = getAwards();


  return (
    <section id="awards" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 right-16 w-20 h-20 bg-pink-100 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 left-16 w-16 h-16 bg-purple-100 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-rose-100 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-pink-100 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
                <AwardIcon className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Awards & Achievements</h2>
            </div>
            <div className="w-24 h-1 gradient-pink mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Recognizing excellence and milestones in my academic and professional journey
            </p>
          </motion.div>

          {/* Awards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award: Award, index: number) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 cute-shadow border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 gradient-pink rounded-xl flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {award.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">{award.organization}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary">
                    {award.year}
                  </span>
                  {award.description && (
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Central element */}
              <div className="w-24 h-24 gradient-pink rounded-full flex items-center justify-center cute-shadow">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-muted-foreground"
            >
              Celebrating milestones and recognition along my journey
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;