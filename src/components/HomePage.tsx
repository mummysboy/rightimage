import React from 'react'
import Header from './Header'
import HeroCarousel from './HeroCarousel'
import Capabilities from './Capabilities'
import Process from './Process'
import Results from './Results'
import FooterCTA from './FooterCTA'

const HomePage: React.FC = () => {
  const handleBookCall = () => {
    // Navigate to booking/contact form
    console.log('Book discovery call clicked')
  }

  const handleExplorePlatform = () => {
    // Navigate to platform capabilities section
    console.log('Explore platform capabilities clicked')
  }

  const handleLetsBuild = () => {
    // Navigate to contact form
    console.log('Let\'s build clicked')
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