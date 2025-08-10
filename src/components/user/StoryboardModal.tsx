import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { X, Play, Download, Share2 } from 'lucide-react';

interface StoryboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  frame: {
    title: string;
    goal: string;
    tool: string;
    skills: string[];
    imageUrl: string;
    accentColor: 'yellow' | 'blue' | 'red';
    description?: string;
    duration?: string;
    challenges?: string[];
    results?: string[];
  };
}

export function StoryboardModal({ isOpen, onClose, frame }: StoryboardModalProps) {
  const accentColors = {
    yellow: {
      bg: 'bg-[#FFD700]/10',
      text: 'text-[#FFD700]',
      border: 'border-[#FFD700]/30',
      button: 'bg-[#FFD700] text-black hover:bg-[#FFD700]/90'
    },
    blue: {
      bg: 'bg-[#00FFFF]/10',
      text: 'text-[#00FFFF]',
      border: 'border-[#00FFFF]/30',
      button: 'bg-[#00FFFF] text-black hover:bg-[#00FFFF]/90'
    },
    red: {
      bg: 'bg-[#FF2E63]/10',
      text: 'text-[#FF2E63]',
      border: 'border-[#FF2E63]/30',
      button: 'bg-[#FF2E63] text-white hover:bg-[#FF2E63]/90'
    }
  };

  const colors = accentColors[frame.accentColor];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1A1A1A] rounded-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </motion.button>

            {/* Header Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <ImageWithFallback
                src={frame.imageUrl}
                alt={frame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Play button overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </motion.button>

              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-black text-white mb-2 font-mono">{frame.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {frame.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className={`${colors.bg} ${colors.text} ${colors.border} text-xs`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-black mb-2 font-mono ${colors.text}`}>🎯 PROJECT GOAL</h3>
                    <p className="text-gray-300">{frame.goal}</p>
                  </div>

                  <div>
                    <h3 className={`text-lg font-black mb-2 font-mono ${colors.text}`}>🔧 TOOLS USED</h3>
                    <p className="text-gray-300">{frame.tool}</p>
                  </div>

                  {frame.duration && (
                    <div>
                      <h3 className={`text-lg font-black mb-2 font-mono ${colors.text}`}>⏱️ DURATION</h3>
                      <p className="text-gray-300">{frame.duration}</p>
                    </div>
                  )}

                  {frame.description && (
                    <div>
                      <h3 className={`text-lg font-black mb-2 font-mono ${colors.text}`}>📝 DESCRIPTION</h3>
                      <p className="text-gray-300 leading-relaxed">{frame.description}</p>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {frame.challenges && (
                    <div>
                      <h3 className={`text-lg font-black mb-3 font-mono ${colors.text}`}>🚧 CHALLENGES</h3>
                      <ul className="space-y-2">
                        {frame.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-300 flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 ${colors.text.replace('text-', 'bg-')}`}></span>
                            <span className="text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {frame.results && (
                    <div>
                      <h3 className={`text-lg font-black mb-3 font-mono ${colors.text}`}>✨ RESULTS</h3>
                      <ul className="space-y-2">
                        {frame.results.map((result, index) => (
                          <li key={index} className="text-gray-300 flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 ${colors.text.replace('text-', 'bg-')}`}></span>
                            <span className="text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-700">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className={colors.button}>
                    <Play className="w-4 h-4 mr-2" />
                    Watch Full Video
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}