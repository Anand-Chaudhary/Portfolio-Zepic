import { useState } from 'react';
import { StoryboardFrame } from './StoryboardFrame';
import { StoryboardModal } from './StoryboardModal';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function Storyboard() {
  //eslint-disable-next-line
  const [selectedFrame, setSelectedFrame] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const storyboardFrames = [
    {
      title: "CINEMATIC INTRO",
      goal: "Create powerful opening sequence",
      tool: "After Effects + Cinema 4D",
      skills: ["Motion Graphics", "3D Animation", "Compositing"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'motion',
      description: "A high-energy cinematic intro sequence designed to captivate audiences from the first frame. This project showcased advanced 3D modeling and particle effects to create a memorable brand introduction.",
      duration: "15 seconds",
      challenges: [
        "Complex 3D camera movements",
        "Particle system optimization",
        "Seamless logo integration"
      ],
      results: [
        "40% increase in viewer retention",
        "Featured in industry showcase",
        "Client brand recognition up 60%"
      ]
    },
    {
      title: "MONTAGE EDITS",
      goal: "Showcase seamless transitions",
      tool: "Premiere Pro + LumaFusion",
      skills: ["Cutting", "Pacing", "Rhythm"],
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'editing',
      description: "A dynamic montage sequence that tells a complete story through precise cuts and rhythm-based editing. Each transition was carefully crafted to maintain energy and flow.",
      duration: "2 minutes",
      challenges: [
        "Matching footage from different sources",
        "Maintaining consistent pacing",
        "Audio synchronization"
      ],
      results: [
        "Viral social media response",
        "2M+ views across platforms",
        "Industry award nomination"
      ]
    },
    {
      title: "TEXT ANIMATION",
      goal: "Dynamic kinetic typography",
      tool: "After Effects + TypeKit",
      skills: ["Typography", "Motion", "Keyframing"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'motion',
      description: "Kinetic typography that brings words to life with purposeful animation. Each letter movement was designed to enhance the emotional impact of the message.",
      duration: "30 seconds",
      challenges: [
        "Complex text hierarchy",
        "Timing with voiceover",
        "Maintaining readability"
      ],
      results: [
        "Enhanced message clarity",
        "95% completion rate",
        "Client brand guidelines adoption"
      ]
    },
    {
      title: "LOGO REVEAL",
      goal: "Professional brand introduction",
      tool: "After Effects + Element 3D",
      skills: ["Branding", "3D", "Lighting"],
      imageUrl: "https://images.unsplash.com/photo-1611095973362-88e91b0dfc2c?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'motion',
      description: "An elegant logo reveal that combines 3D elements with sophisticated lighting to create a premium brand moment that resonates with target audiences.",
      duration: "8 seconds",
      challenges: [
        "3D logo reconstruction",
        "Realistic lighting setup",
        "Multiple format delivery"
      ],
      results: [
        "Increased brand recognition",
        "Premium brand perception",
        "Template created for future use"
      ]
    },
    {
      title: "SOUND SYNC",
      goal: "Perfect audio-visual timing",
      tool: "Premiere Pro + Audition",
      skills: ["Audio", "Beat Matching", "SFX"],
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'editing',
      description: "Precise synchronization of visual elements with musical beats and sound effects to create an immersive audiovisual experience.",
      duration: "3 minutes",
      challenges: [
        "Frame-perfect timing",
        "Multiple audio layers",
        "Dynamic range optimization"
      ],
      results: [
        "Perfect audio-visual sync",
        "Enhanced emotional impact",
        "Client satisfaction: 100%"
      ]
    },
    {
      title: "COLOR GRADING",
      goal: "Transform raw footage mood",
      tool: "DaVinci Resolve + Lumetri",
      skills: ["Color Theory", "LUTs", "Correction"],
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'color',
      description: "Professional color grading that transforms the emotional tone and visual aesthetic of raw footage to match the intended story mood.",
      duration: "Full project",
      challenges: [
        "Inconsistent source lighting",
        "Multiple camera formats",
        "Skin tone preservation"
      ],
      results: [
        "Cinematic visual quality",
        "Consistent brand look",
        "Enhanced story emotion"
      ]
    },
    {
      title: "VFX COMPOSITE",
      goal: "Seamless visual effects integration",
      tool: "After Effects + Mocha Pro",
      skills: ["Compositing", "Tracking", "Keying"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'motion',
      description: "Complex visual effects compositing that seamlessly integrates CGI elements with live-action footage for believable results.",
      duration: "45 seconds",
      challenges: [
        "Motion tracking accuracy",
        "Realistic lighting match",
        "Edge quality optimization"
      ],
      results: [
        "Invisible VFX integration",
        "Audience belief maintained",
        "Technical excellence achieved"
      ]
    },
    {
      title: "MOTION GRAPHICS",
      goal: "Engaging animated infographics",
      tool: "After Effects + Illustrator",
      skills: ["Design", "Animation", "Data Viz"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'motion',
      description: "Data-driven motion graphics that transform complex information into engaging visual stories that audiences can easily understand and remember.",
      duration: "1 minute",
      challenges: [
        "Complex data visualization",
        "Information hierarchy",
        "Engaging animation timing"
      ],
      results: [
        "50% better data retention",
        "Increased engagement",
        "Clear message delivery"
      ]
    },
    {
      title: "CALL TO ACTION",
      goal: "Convert viewers to clients",
      tool: "Final Cut Pro + Motion",
      skills: ["Storytelling", "CTA", "Engagement"],
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      accentColor: 'red' as const,
      category: 'editing',
      description: "Strategic video endings that guide viewers toward specific actions through compelling storytelling and clear calls-to-action.",
      duration: "20 seconds",
      challenges: [
        "Compelling CTA placement",
        "Urgency without pressure",
        "Multiple platform optimization"
      ],
      results: [
        "30% conversion rate",
        "Reduced bounce rate",
        "Clear action pathway"
      ]
    }
  ];
//eslint-disable-next-line
  const handleFrameClick = (frame: any) => {
    setSelectedFrame(frame);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="min-h-screen py-12 px-6 relative">
      {/* Header */}
      <motion.div 
        className="max-w-7xl mx-auto mb-12 text-center relative z-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1 
          className="text-6xl font-black dark-text-primary mb-4 tracking-wider"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          PORTFOLIO
        </motion.h1>
        
        <motion.p 
          className="text-xl dark-text-secondary mb-2 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Storytelling Through Technology
        </motion.p>
        
        <motion.p 
          className="text-lg dark-text-accent"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          INTERACTIVE SHOWREEL
        </motion.p>
      </motion.div>

      {/* Results Counter */}
      <motion.div 
        className="max-w-7xl mx-auto mb-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="dark-text-secondary text-sm">
          Showcasing {storyboardFrames.length} professional projects
        </p>
      </motion.div>

      {/* Storyboard Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {storyboardFrames.map((frame, index) => (
            <motion.div
              key={frame.title}
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <StoryboardFrame
                title={frame.title}
                goal={frame.goal}
                tool={frame.tool}
                skills={frame.skills}
                imageUrl={frame.imageUrl}
                accentColor={frame.accentColor}
                onClick={() => handleFrameClick(frame)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Load More Button */}
      <motion.div 
        className="text-center mt-12 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            className="dark-border dark-text-secondary hover:border-accent-red hover:dark-text-accent px-8 py-3 dark-glass"
          >
            LOAD MORE PROJECTS →
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="max-w-7xl mx-auto mt-16 text-center relative z-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="border-t dark-border pt-8">
          <p className="dark-text-secondary text-sm">
            © 2025 NEXTGEN • Professional Video Editing Services
          </p>
          <div className="flex justify-center gap-8 mt-4 text-sm dark-text-secondary">
            <span>Motion Graphics</span>
            <span>•</span>
            <span>Color Grading</span>
            <span>•</span>
            <span>Post Production</span>
            <span>•</span>
            <span>Visual Effects</span>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedFrame && (
        <StoryboardModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          frame={selectedFrame}
        />
      )}
    </section>
  );
}