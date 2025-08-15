'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { getContactInfo, getPersonalInfo } from '@/lib/portfolio-data';

const Footer = () => {
  const contactInfo = getContactInfo();
  const personalInfo = getPersonalInfo();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: contactInfo.github,
      icon: Github,
      label: 'GitHub',
      color: 'hover:text-gray-600'
    },
    {
      href: contactInfo.linkedin,
      icon: Linkedin,
      label: 'LinkedIn', 
      color: 'hover:text-blue-600'
    },
    {
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      label: 'Email',
      color: 'hover:text-primary'
    }
  ].filter(link => link.href);

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 gradient-pink rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="font-bold text-lg gradient-text">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#hobbies', label: 'Hobbies' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className={`p-2 rounded-full bg-secondary text-secondary-foreground transition-all duration-200 hover:scale-110 ${link.color}`}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-primary animate-pulse" /> and lots of pink magic
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;