"use client"

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/user/Navigation';
import { IntroPage } from '@/components/user/IntroPage';
import { Storyboard } from '@/components/user/Storyboard';
import { AboutPage } from '@/components/user/AboutPage';
import { ContactPage } from '@/components/user/ContactPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navigation

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="size-full dark">
      <Navigation activeSection={activeSection} />
      <main>
        <IntroPage />
        <Storyboard />
        <AboutPage />
        <ContactPage />
      </main>
    </div>
  );
}