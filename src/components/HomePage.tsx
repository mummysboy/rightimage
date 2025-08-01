import React from 'react'
import Hero from './Hero'
import Capabilities from './Capabilities'
import Process from './Process'
import Results from './Results'
import FooterCTA from './FooterCTA'

const HomePage: React.FC = () => {
  const handleExploreWork = () => {
    // Navigate to work/portfolio section
    console.log('Explore work clicked')
  }

  const handleLetsBuild = () => {
    // Navigate to contact form
    console.log('Let\'s build clicked')
  }

  return (
    <div className="min-h-screen">
      <Hero onExploreWork={handleExploreWork} />
      <Capabilities />
      <Process />
      <Results />
      <FooterCTA onLetsBuild={handleLetsBuild} />
    </div>
  )
}

export default HomePage 