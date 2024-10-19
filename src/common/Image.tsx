import React from "react"

interface ImageProps {
  imageSrc: string
  height?: string | number
  width?: string | number
  style?: string
}

const Image: React.FC<ImageProps> = ({ imageSrc, height, width, style }) => {
  const imageHeight = height ? `h-${height}` : "h-full"
  const imageWidth = width ? `w-${width}` : "w-full"

  return (
    <img
      src={imageSrc}
      alt="img"
      className={`${style} ${imageHeight} ${imageWidth}`}
    />
  )
}

export default Image
