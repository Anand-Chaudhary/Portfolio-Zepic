import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Menu, X } from 'lucide-react';

const sampleVideos = [
  {
    id: 1,
    title: "Sample 01",
    duration: "2:30",
    src: "/zepi.ic_14040522_184654810.mp4",
    poster: "/zepi.ic_14040522_184654810.mp4",
    description: "This is something i have worked on"
  },
  {
    id: 2,
    title: "Sample 02",
    duration: "3:45",
    src: "/7ma2h2_1 (1).mp4",
    poster: "/7ma2h2_1 (1).mp4",
    description: "This is something i have worked on"
  },
  {
    id: 3,
    title: "Sample 03",
    duration: "5:20",
    src: "/how_it_goes_edit.mp4",
    poster: "/how_it_goes_edit.mp4",
    description: "This is something i have worked on"
  },
  {
    id: 4,
    title: "Sample 04",
    duration: "1:55",
    src: "/warm.mp4",
    poster: "/warm.mp4",
    description: "This is something i have worked on"
  },
  {
    id: 5,
    title: "sample 5",
    duration: "8:15",
    src: "/headlock_2.mp4",
    poster: "/headlock_2.mp4",
    description: "This is something i have worked on"
  },
  {
    id: 6,
    title: "Sample 06",
    duration: "4:10",
    src: "/VID_20250720_183053_309.mp4",
    poster: "/VID_20250720_183053_309.mp4",
    description: "This is something i have worked on"
  }
];

interface VideoCardProps {
  video: typeof sampleVideos[0];
  isActive: boolean;
  scrollProgress: number;
  index: number;
  totalVideos: number;
}

function VideoCard({ video, isActive, scrollProgress, index, totalVideos }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [videoAspectRatio, setVideoAspectRatio] = useState<number>(16/9);
  const [containerAspectRatio, setContainerAspectRatio] = useState<string>('aspect-video');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate video aspect ratio and determine optimal container
  const handleVideoMetadata = useCallback(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    const aspectRatio = video.videoWidth / video.videoHeight;
    setVideoAspectRatio(aspectRatio);

    // Determine container aspect ratio class based on video dimensions
    if (aspectRatio > 1.7) {
      // Wide video (>16:9)
      setContainerAspectRatio('aspect-video');
    } else if (aspectRatio > 1.2) {
      // Standard landscape (16:9 to 4:3)
      setContainerAspectRatio('aspect-video');
    } else if (aspectRatio > 0.8) {
      // Nearly square
      setContainerAspectRatio('aspect-square');
    } else {
      // Portrait video
      setContainerAspectRatio('aspect-vertical');
    }
  }, []);

  // Calculate optimal object-fit based on video and container aspect ratios
  const getVideoObjectFit = useCallback(() => {
    if (!containerRef.current) return 'cover';
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const containerAspect = containerWidth / containerHeight;
    
    // Use contain for videos that would be cropped significantly, cover otherwise
    const aspectDifference = Math.abs(videoAspectRatio - containerAspect) / containerAspect;
    
    return aspectDifference > 0.3 ? 'contain' : 'cover';
  }, [videoAspectRatio]);

  // Calculate transform based on scroll progress
  const getTransform = useCallback(() => {
    const videoProgress = scrollProgress * totalVideos;
    const distanceFromCenter = Math.abs(videoProgress - index);
    const offset = (videoProgress - index) * 100;
    
    // Scale and opacity based on distance from center
    const scale = Math.max(0.7, 1 - distanceFromCenter * 0.3);
    const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.7);
    
    return {
      transform: `translateX(${offset}%) scale(${scale})`,
      opacity,
      zIndex: isActive ? 10 : Math.max(1, 10 - Math.floor(distanceFromCenter))
    };
  }, [scrollProgress, index, totalVideos, isActive]);

  const handlePlayPause = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      setIsLoading(true);
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.warn('Video play/pause failed:', error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  }, [isPlaying]);

  const handleMuteToggle = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const progressPercent = (video.currentTime / video.duration) * 100;
    setProgress(progressPercent);
    setCurrentTime(formatTime(video.currentTime));
  }, []);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    videoRef.current.currentTime = videoRef.current.duration * clickPercent;
  }, []);

  // Auto-pause when not active
  useEffect(() => {
    if (!isActive && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  // Reset video when it becomes active
  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime('0:00');
    }
  }, [isActive]);

  const transform = getTransform();
  const objectFit = getVideoObjectFit();

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden dark-card transition-all duration-700 ease-out ${containerAspectRatio}`}
      style={transform}
    >
      {/* Adaptive Video Container */}
      <div className="relative w-full h-full bg-dark-gray-900">
        {/* Video Element with Auto-Adaptive Sizing */}
        <video
          ref={videoRef}
          className="w-full h-full transition-all duration-300"
          style={{ 
            //eslint-disable-next-line
            objectFit: objectFit as any,
            objectPosition: 'center'
          }}
          poster={video.poster}
          preload="metadata"
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => setIsLoading(false)}
          onLoadedMetadata={handleVideoMetadata}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Aspect Ratio Indicator */}
        {isActive && (
          <div className="absolute top-2 right-2 z-20">
            <div className="bg-dark-gray-900/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-dark-gray-300">
              {videoAspectRatio > 1.7 ? 'Widescreen' : 
               videoAspectRatio > 1.2 ? 'Landscape' :
               videoAspectRatio > 0.8 ? 'Square' : 'Portrait'}
            </div>
          </div>
        )}

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-gray-950/80">
          {/* Video Info */}
          <div className="absolute top-6 left-6 right-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-gray-100 mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-dark-gray-400 max-w-md">
                  {video.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-dark-gray-400">{currentTime}</div>
                <div className="text-xs text-dark-gray-500">/ {video.duration}</div>
              </div>
            </div>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayPause}
              disabled={isLoading}
              className="w-20 h-20 rounded-full dark-button flex items-center justify-center
                       transform transition-all duration-300 hover:scale-110 active:scale-95
                       opacity-90 hover:opacity-100
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isLoading ? (
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-8 h-8 text-white ml-0" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Progress Bar */}
            <div 
              className="video-progress-container mb-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="video-progress-bar transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  disabled={isLoading}
                  className="video-control-btn w-12 h-12 rounded-full dark-glass 
                           flex items-center justify-center
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin" />
                  ) : isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={handleMuteToggle}
                  className="video-control-btn w-10 h-10 rounded-full dark-glass 
                           flex items-center justify-center"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-dark-gray-300" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-accent-red" />
                  )}
                </button>
              </div>

              <div className="text-sm text-dark-gray-400">
                {video.title} • {video.duration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Calculate scroll position for a specific video
  const calculateScrollPosition = useCallback((videoIndex: number) => {
    if (!sectionRef.current) return 0;
    
    const sectionHeight = sectionRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollableHeight = sectionHeight - viewportHeight;
    
    // Calculate the scroll position needed to center the video
    const targetProgress = videoIndex / (sampleVideos.length - 1);
    return scrollableHeight * targetProgress;
  }, []);

  // Jump to specific video
  const jumpToVideo = useCallback((videoIndex: number) => {
    if (!sectionRef.current) return;
    
    setIsScrolling(true);
    const targetScrollPosition = calculateScrollPosition(videoIndex);
    const sectionTop = sectionRef.current.offsetTop;
    const finalScrollPosition = sectionTop + targetScrollPosition;
    
    // Close sidebar on mobile after selection
    setIsSidebarOpen(false);
    
    // Smooth scroll to target position
    window.scrollTo({
      top: finalScrollPosition,
      behavior: 'smooth'
    });
    
    // Update active video index immediately for better UX
    setActiveVideoIndex(videoIndex);
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [calculateScrollPosition]);

  // Handle scroll-based video transitions
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      let progress = 0;
      
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        // Section is filling the viewport
        progress = Math.abs(rect.top) / (sectionHeight - viewportHeight);
      } else if (rect.top > 0) {
        // Section hasn't started scrolling yet
        progress = 0;
      } else {
        // Section has finished scrolling
        progress = 1;
      }

      // Ensure progress is between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);

      // Calculate active video index
      const videoProgress = progress * (sampleVideos.length - 1);
      const newActiveIndex = Math.round(videoProgress);
      
      if (newActiveIndex !== activeVideoIndex) {
        setActiveVideoIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeVideoIndex, isScrolling]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSidebarOpen) {
        const sidebar = document.getElementById('video-sidebar');
        const menuButton = document.getElementById('sidebar-menu-button');
        
        if (sidebar && menuButton && 
            !sidebar.contains(event.target as Node) && 
            !menuButton.contains(event.target as Node)) {
          setIsSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="relative"
      style={{ height: `${100 + (sampleVideos.length - 1) * 100}vh` }} // Extended height for scroll range
    >
      {/* Fixed Header */}
      <div className="sticky top-0 left-0 right-0 z-20 py-20 bg-gradient-to-b from-dark-gray-950 via-dark-gray-950/95 to-transparent pointer-events-none">
        <div className="text-center px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray-100 mb-6">
            Video Portfolio
          </h2>
          <p className="text-lg text-dark-gray-400 max-w-3xl mx-auto">
            Scroll through my latest video editing work. Each project showcases different techniques, 
            from commercial editing to cinematic storytelling with auto-adaptive aspect ratios.
          </p>
        </div>
      </div>

      {/* Mobile Sidebar Menu Button */}
      <button
        id="sidebar-menu-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-24 left-4 z-30 lg:hidden w-12 h-12 rounded-full dark-glass 
                 flex items-center justify-center pointer-events-auto
                 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={isSidebarOpen ? 'Close video menu' : 'Open video menu'}
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Video Container - Fixed Position with Adaptive Sizing */}
      <div className="sticky top-0 left-0 right-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[85vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[70vh] max-w-6xl">
          {sampleVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              isActive={index === activeVideoIndex}
              scrollProgress={scrollProgress}
              index={index}
              totalVideos={sampleVideos.length}
            />
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-4 px-6 py-3 scroll-progress-indicator rounded-full">
            <div className="flex gap-2">
              {sampleVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => jumpToVideo(index)}
                  className={`scroll-progress-dot w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                             ${index === activeVideoIndex
                               ? 'bg-accent-red w-8 active' 
                               : 'bg-dark-gray-600 hover:bg-dark-gray-500'
                             }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
            <div className="text-sm text-dark-gray-400">
              {activeVideoIndex + 1} / {sampleVideos.length}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-20 right-8 z-20">
          <div className="flex flex-col items-center gap-2 text-dark-gray-500 scroll-hint">
            <div className="text-sm">Scroll</div>
            <div className="w-px h-8 bg-gradient-to-b from-accent-red to-transparent" />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </section>
  );
}