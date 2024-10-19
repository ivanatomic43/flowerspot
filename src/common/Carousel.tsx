// src/Carousel.js
import React, { useEffect, useState } from "react"
import "../css/Carousel.css"

const Carousel = ({ images }: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [images.length])
  return (
    <div className="carousel">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
    </div>
  )
}
export default Carousel
