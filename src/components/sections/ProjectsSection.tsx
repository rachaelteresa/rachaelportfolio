
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects, getProjects, getExtraCurriculars } from '@/lib/portfolio-data';

const ProjectsSection = () => {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getProjects();
  const activities = getExtraCurriculars();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'In Progress':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'Archived':
        return 'text-gray-600 bg-gray-100 border-gray-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Research':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'Engineering':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'Open Source':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'Personal':
        return 'text-purple-600 bg-purple-100 border-purple-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-card/30 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-16 w-8 h-8 bg-primary/5 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 right-16 w-12 h-12 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/8 rounded-full animate-pulse delay-1500"></div>
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
                <Folder className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects & Activities</h2>
            </div>
            <div className="w-24 h-1 gradient-pink mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Showcasing my latest work in AI research, engineering, creative projects, and extracurricular activities
            </p>
          </motion.div>
          {/* Activities grid */}
          {activities.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-2">Extracurricular Activities</h3>
                <div className="w-16 h-0.5 bg-accent/50 mx-auto rounded-full"></div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.activity}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="bg-card rounded-xl p-4 cute-shadow border border-border/50 group"
                  >
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {activity.activity}
                    </h4>
                    <span className="text-xs text-muted-foreground mb-2 block">{activity.organization}</span>
                    <p className="text-sm text-muted-foreground mb-3">
                      {activity.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Featured projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-6 cute-shadow border border-border/50 group"
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 gradient-pink rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Folder className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        {project.featured && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-yellow-600 font-medium">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Project description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project meta */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other projects */}
          {allProjects.length > featuredProjects.length && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-2">Other Projects</h3>
                <div className="w-16 h-0.5 bg-primary/50 mx-auto rounded-full"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects
                  .filter(project => !project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      className="bg-card rounded-xl p-4 cute-shadow border border-border/50 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 gradient-pink rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Folder className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex space-x-1">
                          {project.githubUrl && (
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </Link>
                          )}
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </div>

                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between text-xs">
                        <span className={`px-2 py-1 rounded-md border ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded-md border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;