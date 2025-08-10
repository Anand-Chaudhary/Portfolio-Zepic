import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ChevronDown, Play, ExternalLink, Sparkles } from 'lucide-react';

export function IntroPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const highlights = [
    { number: '3+', label: 'Years Experience', icon: '⭐' },
    { number: '100+', label: 'Projects Completed', icon: '🎬' },
    { number: '30+', label: 'Happy Clients', icon: '😊' },
    { number: '9am to 11pm', label: 'Support Available', icon: '🚀' },
  ];

  const skills = [
    { name: 'After Effects', level: 80 },
    { name: 'Premiere Pro', level: 95 },
    { name: 'Color Grading', level: 88 },    
    { name: 'Audio Sync', level: 90 }
  ];

  const featuredProjects = [
    {
        title: "Tech Startup Launch",
        category: "Commercial",
        mediaUrl: "/Whiplash.mp4", // can be video or image
        mediaType: "video", // "video" or "image"
        stats: { views: '2.5M', likes: '45K', duration: '2:30' }
    },
    {
      title: "Music Video Edit",
      category: "Creative",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      stats: { views: '1.8M', likes: '32K', duration: '3:45' }
    },
    {
      title: "Documentary Series",
      category: "Long Form",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop",
      stats: { views: '950K', likes: '18K', duration: '12:20' }
    }
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
                <Badge className="bg-liquid-red-light text-liquid-red border border-liquid-red/30 px-4 py-2 text-sm cursor-pointer liquid-glow">
                  <Sparkles className="w-3 h-3 mr-2" />
                  AVAILABLE FOR PROJECTS
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-black text-liquid-gray-900 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                PROFESSIONAL
                <br />
                <motion.span 
                  className="text-liquid-red"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  VIDEO EDITOR
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-liquid-gray-600 leading-relaxed max-w-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Helping creators and brands elevate their videos with standout edits. 
                Making every story captivating and engaging following latest trends.
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
                  className="liquid-button text-liquid-white hover:shadow-lg px-8 py-3 tracking-wide liquid-glow-card"
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
                  className="border-liquid-gray-300 text-liquid-gray-700 hover:bg-liquid-gray-100 hover:text-liquid-gray-900 px-8 py-3 tracking-wide liquid-glass"
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
              <p className="text-sm text-liquid-gray-500 tracking-wider">// EXPERTISE</p>
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
                   <div className="rounded-lg p-3 bg-black/40 backdrop-blur-md shadow-lg hover:bg-black/70 transition-all">
                   <div className="rounded-lg p-3 bg-black/50 backdrop-blur-md shadow-lg hover:bg-grey/30 transition-all">
  <div className="flex justify-between items-center mb-2">
    <span className="text-liquid-gray-900 text-sm font-medium">{skill.name}</span>
    <span className="text-liquid-red text-xs font-medium">{skill.level}%</span>
  </div>
  <div className="h-2 bg-liquid-gray-200/60 rounded-full overflow-hidden backdrop-blur-sm">
    <motion.div
      className="h-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 shadow-[0_0_8px_rgba(255,0,0,0.5)] shimmer"
      initial={{ width: 0 }}
      whileInView={{ width: `${skill.level}%` }}
      transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  </div>
</div>
</div>

<style jsx>{`
  .shimmer {
    background-size: 200% 100%;
    animation: shimmerMove 2s infinite linear;
  }

  @keyframes shimmerMove {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`}</style>


                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile/Hero Image */}
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden rounded-2xl group liquid-glow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
             <ImageWithFallback
  src="/photo_6109299221887831544_y.jpg"
  alt="Profile picture"
  className="w-full h-full object-cover"
 />
<div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent"></div>

              
              {/* Interactive overlay */}
              <motion.div
                className="absolute inset-0 bg-liquid-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 liquid-glass rounded-full flex items-center justify-center hover:liquid-glow transition-colors"
                >
                  <Play className="w-6 h-6 text-liquid-red ml-1" fill="currentColor" />
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-6 -left-6 liquid-card rounded-xl border border-liquid-gray-200 p-6 liquid-glow-card"
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
                    <div className="text-2xl font-black text-liquid-red">{stat.number}</div>
                    <div className="text-xs text-liquid-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            className="text-4xl font-black text-liquid-gray-900 mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FEATURED WORK
          </motion.h2>
          <motion.p 
            className="text-liquid-gray-600 text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A glimpse into my latest projects
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative liquid-card rounded-xl overflow-hidden border border-liquid-gray-200 hover:border-liquid-red/30 transition-all duration-300 liquid-glow-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Interactive overlay */}
                <motion.div
                  className="absolute inset-0 bg-liquid-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center hover:liquid-glow transition-colors"
                    >
                      <Play className="w-4 h-4 text-liquid-red ml-0.5" fill="currentColor" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center hover:liquid-glow transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-liquid-red" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Stats overlay */}
                <div className="absolute bottom-2 left-2 right-2 liquid-glass rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between text-liquid-gray-900 text-xs font-medium">
                    <span>👁️ {project.stats.views}</span>
                    <span>❤️ {project.stats.likes}</span>
                    <span>⏱️ {project.stats.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <Badge className="bg-liquid-red-light text-liquid-red border border-liquid-red/30 text-xs mb-2">
                  {project.category}
                </Badge>
                <h3 className="text-liquid-gray-900 tracking-wide font-medium">{project.title}</h3>
              </div>
            </motion.div>
          ))}
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
              className="border-liquid-gray-300 text-liquid-gray-700 hover:border-liquid-red hover:text-liquid-red px-8 py-3 group liquid-glass"
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
          className="flex flex-col items-center text-liquid-gray-500 hover:text-liquid-red transition-colors group"
          whileHover={{ y: -5 }}
        >
          <span className="text-xs mb-2 group-hover:text-liquid-red">SCROLL TO EXPLORE</span>
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