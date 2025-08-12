import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TiltedCard from '@/components/user/TiltedCard';
import { motion } from 'motion/react';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

export function IntroPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const highlights = [
    { number: '4+', label: 'Years Experience', icon: '⭐' },
    { number: '100+', label: 'Projects Completed', icon: '🎬' },
    { number: '45+', label: 'Happy Clients', icon: '😊' },
    { number: '24/7', label: 'Support Available', icon: '🚀' },
  ];

  const skills = [
    { name: 'After Effects', level: 85 },
    { name: 'Premiere Pro', level: 90 },
    { name: 'Color Grading', level: 95 },
    { name: 'Audio Sync', level: 90 }
  ]; 

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <section id="intro" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-block"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge className="bg-accent-red/10 dark-text-accent border border-accent-red/30 px-4 py-2 text-sm cursor-pointer dark-glow">
                  <Sparkles className="w-3 h-3 mr-2" />
                  AVAILABLE FOR PROJECTS
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-black dark-text-primary leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                PROFESSIONAL
                <br />
                <motion.span 
                  className="dark-text-accent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  VIDEO EDITOR
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl dark-text-secondary leading-relaxed max-w-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Helping creators and brands elevate their videos with standout edits.
                Making every story captivating and engaging by following the latest trends and techniques.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  className="dark-button dark-text-primary hover:shadow-lg px-8 py-3 tracking-wide"
                >
                  <Play className="w-4 h-4 mr-2" />
                  VIEW PORTFOLIO
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="dark-border dark-text-secondary hover:bg-dark-gray-800 hover:dark-text-primary px-8 py-3 tracking-wide dark-glass"
                >
                  GET QUOTE
                </Button>
              </motion.div>
            </motion.div>

            {/* Interactive Skills */}
            <motion.div 
              className="space-y-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm dark-text-secondary tracking-wider">EXPERTISE</p>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSkillClick(skill.name)}
                    className="cursor-pointer"
                  >
                    <div className="dark-card rounded-lg p-3 dark-border hover:border-accent-red/30 transition-all hover:dark-glow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="dark-text-primary text-sm font-medium">{skill.name}</span>
                        <span className="dark-text-accent text-xs font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full dark-progress rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo with TiltedCard */}
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* TiltedCard Profile Photo */}
              <TiltedCard
                imageSrc="/IMG_20250811_003335.jpg"
                altText="Professional Video Editor"
                captionText="Professional Video Editor & Motion Graphics Artist"
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="500px"
                imageWidth="400px"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={true}
              />
              
              {/* Floating Stats Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 dark-card rounded-xl dark-border p-6 dark-glow-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center cursor-pointer"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-lg mb-1">{stat.icon}</div>
                      <div className="text-2xl font-black dark-text-accent">{stat.number}</div>
                      <div className="text-xs dark-text-secondary">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Work Preview */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-black dark-text-primary mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FEATURED WORK
          </motion.h2>
          <motion.p 
            className="dark-text-secondary text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A glimpse into my latest projects
          </motion.p>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              className="dark-border dark-text-secondary hover:border-accent-red hover:dark-text-accent px-8 py-3 group dark-glass"
            >
              VIEW ALL WORK 
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => scrollToSection('portfolio')}
          className="flex flex-col items-center dark-text-secondary hover:dark-text-accent transition-colors group"
          whileHover={{ y: -5 }}
        >
          <span className="text-xs mb-2 group-hover:dark-text-accent">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}