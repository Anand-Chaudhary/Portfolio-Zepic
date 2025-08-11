import React, { useState } from 'react'
import photo from '../../../public/photo_6109299221887831544_y.jpg'
const ERROR_IMG_SRC =
  'C:\Users\ASUS\Downloads\WhatsApp Image 2025-07-12 at 5.06.08 PM.jpeg'

export function ImageWithFallback({ alt, className, style, ...rest }: { alt: string; className?: string; style?: React.CSSProperties; [key: string]: any }) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} />
      </div>
    </div>
  ) : (
    <img src={photo.src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}