import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroContent from './HeroContent'

interface HeroCarouselProps {
  onBookCall: () => void
  onExplorePlatform: () => void
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onBookCall, onExplorePlatform }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      caption: 'Sponsored Brands',
      description: 'Build top-of-funnel awareness across the Amazon ecosystem.'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      caption: 'Sponsored Products',
      description: 'Capture high-intent conversions with precision targeting.'
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      caption: 'Data-Driven Strategies',
      description: 'KPI-driven insights that power transformational growth.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      caption: 'Full Funnel Media Mix',
      description: 'Strategic budget planning aligned with business goals.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      caption: 'Ongoing Optimization',
      description: 'Test, analyze, and iterate for continuous improvement.'
    }
  ]

  // Auto-advance slides with fade effect
  useEffect(() => {
    if (!loaded) return
    
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    const nextSlide = () => {
      if (mouseOver) return
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const handleMouseOver = () => {
      mouseOver = true
      clearTimeout(timeout)
    }

    const handleMouseOut = () => {
      mouseOver = false
      timeout = setTimeout(nextSlide, 10000)
    }

    timeout = setTimeout(nextSlide, 10000)
    const container = document.querySelector('.fade-carousel-container')
    
    if (container) {
      container.addEventListener('mouseover', handleMouseOver)
      container.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      clearTimeout(timeout)
      if (container) {
        container.removeEventListener('mouseover', handleMouseOver)
        container.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [loaded, slides.length])

  // Set loaded to true on mount
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen fade-carousel-container">
      {/* Carousel - Only Background Images with Fade Effect */}
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 fade-slide ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover blur-sm"
              />
              <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .fade-slide {
          transition: opacity 2s ease-in-out;
        }
      `}</style>

      {/* Static Content Overlay - Doesn't Move with Carousel */}
      <div className="absolute inset-0 z-10">
        <HeroContent 
          onBookCall={onBookCall}
          onExplorePlatform={onExplorePlatform}
        />
      </div>

      {/* Slide Caption (Bottom Left) - Static */}
      <div className="absolute bottom-8 left-8 text-white z-10 pointer-events-none">
        <div className="transition-opacity duration-500">
          <h3 className="text-2xl font-semibold mb-2">{slides[currentSlide].caption}</h3>
          <p className="text-gray-200 font-light">{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* Slide Indicators */}
      {loaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              type="button"
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default HeroCarousel 