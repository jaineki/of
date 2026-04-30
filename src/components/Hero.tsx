// src/components/Hero.tsx
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Selov Asx
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Front End Developer & Making Tools
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I craft beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
