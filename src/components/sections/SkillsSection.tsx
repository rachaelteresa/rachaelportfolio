'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Cpu, MessageSquare, Eye, Layers, Container, Lightbulb } from 'lucide-react';
import { getSkills } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const skills = getSkills();

  const iconMap = {
    brain: Brain,
    code: Code,
    cpu: Cpu,
    'message-square': MessageSquare,
    eye: Eye,
    layers: Layers,
    container: Container,
    lightbulb: Lightbulb,
  };

  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Code;
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryColors = {
    'AI/ML': 'from-primary/20 to-primary/10 border-primary/30',
    'Programming': 'from-accent/20 to-accent/10 border-accent/30', 
    'Tools': 'from-primary/15 to-accent/15 border-primary/20',
    'Soft Skills': 'from-accent/15 to-primary/15 border-accent/20',
    'Certification': 'from-primary/20 to-accent/10 border-primary/30'
  };

  return (
    <section id="skills" className="py-20 bg-card/30 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-12 h-12 bg-primary/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-accent/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-primary/8 rounded-full animate-pulse delay-500"></div>
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
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Expertise</h2>
            </div>
            <div className="w-24 h-1 gradient-pink mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A blend of technical expertise and creative problem-solving abilities
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} rounded-2xl p-6 border backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => {
                    const IconComponent = getIcon(skill.icon || 'code');
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          {skill.category === 'Certification' && (
                            <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                              {skill.name}
                            </span>
                          )}
                        </div>
                        
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="relative">
              <div className="w-16 h-16 gradient-pink rounded-full flex items-center justify-center cute-shadow">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/40 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent/40 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent/40 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;