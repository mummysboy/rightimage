import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import HeroCarousel from './HeroCarousel'
import Capabilities from './Capabilities'
import Process from './Process'
import Results from './Results'
import FooterCTA from './FooterCTA'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const handleBookCall = () => {
    navigate('/contact')
  }

  const handleExplorePlatform = () => {
    navigate('/services')
  }

  const handleLetsBuild = () => {
    navigate('/contact')
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel 
        onBookCall={handleBookCall}
        onExplorePlatform={handleExplorePlatform}
      />
      <Capabilities />
      <Process />
      <Results />
      <FooterCTA onLetsBuild={handleLetsBuild} />
    </div>
  )
}

export default HomePage 