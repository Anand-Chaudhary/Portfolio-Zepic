import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setIsHovered(false);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden dark-text-secondary">
          This effect is optimized for desktop interaction.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-2xl will-change-transform [transform:translateZ(0)] transition-all duration-500"
          style={{
            width: imageWidth,
            height: imageHeight,
            boxShadow: isHovered 
              ? "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 38, 38, 0.2), 0 0 40px rgba(220, 38, 38, 0.15), 0 0 80px rgba(220, 38, 38, 0.08)"
              : "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 38, 38, 0.1)"
          }}
        />

        {/* Enhanced dark theme glow overlay */}
        <motion.div
          className="absolute top-0 left-0 rounded-2xl pointer-events-none will-change-transform transition-all duration-500"
          style={{
            width: imageWidth,
            height: imageHeight,
            background: isHovered 
              ? "linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, transparent 50%, rgba(220, 38, 38, 0.05) 100%)"
              : "linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, transparent 50%)",
            opacity: isHovered ? 0.8 : 0.3,
          }}
        />

        {/* Subtle inner glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none will-change-transform transition-all duration-500"
          style={{
            background: isHovered 
              ? "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 70%)"
              : "transparent",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]"
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-lg dark-glass px-3 py-2 text-xs dark-text-primary opacity-0 z-[3] hidden sm:block backdrop-blur-sm transition-all duration-300"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
            boxShadow: isHovered 
              ? "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.3), 0 0 20px rgba(220, 38, 38, 0.1)"
              : "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.2)"
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}