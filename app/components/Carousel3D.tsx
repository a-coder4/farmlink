'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface CarouselItem {
  src: string
  title: string
  description: string
}

const carouselItems: CarouselItem[] = [
  { src: '/beekeeper_gallery.jpg', title: 'Beekeeping', description: 'Sustainable honey production.' },
  { src: '/carbon_gallery.jpg', title: 'Carbon Capture', description: 'Innovative climate solutions for a greener future.' },
  { src: '/packaging_gallery.jpg', title: 'Eco Packaging', description: 'Revolutionizing packaging with eco-friendly materials.' },
  { src: '/solar_gallery.jpg', title: 'Solar Energy', description: 'Harnessing the sun for renewable energy solutions.' },
  { src: '/logo.png', title: '', description: '' },
]

export default function Carousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 3000) // Change slide every 3 seconds
    return () => clearInterval(autoScroll) // Cleanup interval on unmount
  }, [])

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32">
      <div className="absolute inset-0 flex items-center justify-center">
        {carouselItems.map((item, index) => {
          const offset = ((index - currentIndex + carouselItems.length) % carouselItems.length) - Math.floor(carouselItems.length / 2)
          const scale = offset === 0 ? 1.1 : 1 - Math.abs(offset) * 0.2 // Adjust scale for central and side items
          return (
            <div
              key={index}
              className="absolute w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-100 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${offset * 50}%) scale(${scale}) rotateY(${-offset * 45}deg)`,
                zIndex: carouselItems.length - Math.abs(offset),
                opacity: 1 - Math.abs(offset) * 0.3,
              }}
            >
              <Image
                src={item.src}
                alt={item.title || 'Carousel image'}
                fill
                style={{ objectFit: 'contain' }} // Ensure images fit within the frame
                className="rounded-lg shadow-xl"
              />
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 sm:p-4 rounded-b-lg">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base">{item.description}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
