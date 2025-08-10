import { useState } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Play, ExternalLink, Heart } from 'lucide-react';

interface StoryboardFrameProps {
  title: string;
  goal: string;
  tool: string;
  skills: string[];
  imageUrl: string;
  accentColor: 'yellow' | 'blue' | 'red';
  onClick?: () => void;
}

export function StoryboardFrame({ 
  title, 
  goal, 
  tool, 
  skills, 
  imageUrl, 
  onClick 
}: StoryboardFrameProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div 
      className="group relative dark-card rounded-xl dark-border transition-all duration-300 cursor-pointer overflow-hidden hover:border-accent-red/30 hover:dark-glow"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-gray-950/80 via-transparent to-dark-gray-950/20" />
        
        {/* Interactive overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-dark-gray-950/40 backdrop-blur-[1px] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 dark-glass rounded-full flex items-center justify-center hover:dark-glow transition-colors"
            >
              <Play className="w-5 h-5 dark-text-accent ml-0.5" fill="currentColor" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 dark-glass rounded-full flex items-center justify-center hover:dark-glow transition-colors"
            >
              <ExternalLink className="w-5 h-5 dark-text-accent" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Like button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className="absolute top-3 right-3 p-2 dark-glass rounded-full hover:dark-glow transition-colors"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isLiked ? 'dark-text-accent fill-current' : 'dark-text-secondary'
            }`} 
          />
        </motion.button>

        {/* View count indicator */}
        <div className="absolute bottom-3 right-3 px-2 py-1 dark-glass rounded-lg">
          <span className="dark-text-primary text-xs font-medium">1.2K views</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <motion.h3 
          className="dark-text-primary font-black text-lg tracking-wide"
          layout
        >
          {title}
        </motion.h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="outline"
                className="text-xs border cursor-pointer transition-all hover:dark-glow bg-accent-red/10 dark-text-accent border-accent-red/30"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Goal and Tool */}
        <motion.div 
          className="space-y-3 text-sm dark-text-secondary"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex items-start gap-2">
            <span className="text-lg">🎯</span>
            <span className="leading-relaxed">{goal}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🔧</span>
            <span className="leading-relaxed">{tool}</span>
          </div>
        </motion.div>

        {/* Interactive buttons */}
        <motion.div 
          className="flex gap-2 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="sm" 
              className="dark-button dark-text-primary hover:shadow-lg text-xs"
            >
              View Details
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="sm" 
              variant="outline" 
              className="dark-border dark-text-secondary hover:dark-text-accent hover:border-accent-red text-xs dark-glass"
            >
              Preview
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}