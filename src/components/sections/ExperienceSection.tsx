'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { getExperience } from '@/lib/portfolio-data';

const ExperienceSection = () => {
  const experiences = getExperience();

  return (
    <section id="experience" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 right-16 w-10 h-10 bg-primary/5 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-16 w-14 h-14 bg-accent/5 rounded-full animate-pulse delay-1500"></div>
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
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
            </div>
            <div className="w-24 h-1 gradient-pink mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My professional journey building AI solutions and leading innovative projects
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 gradient-pink"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 gradient-pink rounded-full flex items-center justify-center border-4 border-background z-10">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card rounded-2xl p-6 cute-shadow border border-border/50"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {experience.position}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-2">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {experience.description.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + achievementIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;