import React, { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Custom-Built Platforms',
      description: 'Scalable software architecture that grows with your business.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Real-Time Analytics & Tracking',
      description: 'Data-driven insights that power intelligent decision making.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'AI-Powered Decision Systems',
      description: 'Machine learning solutions that optimize every touchpoint.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Monetization Infrastructure',
      description: 'Revenue systems that maximize your digital potential.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Workflow Automation',
      description: 'Streamlined processes that eliminate manual bottlenecks.'
    }
  ]

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 1,
        spacing: 0,
      },
      created() {
        setLoaded(true)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 6000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <section className="relative min-h-screen">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider h-screen">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Main Content Overlay */}
            <HeroContent 
              onBookCall={onBookCall}
              onExplorePlatform={onExplorePlatform}
            />

            {/* Slide Caption (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-8 left-8 text-white"
            >
              <h3 className="text-2xl font-semibold mb-2">{slide.caption}</h3>
              <p className="text-gray-200 font-light">{slide.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default HeroCarousel 