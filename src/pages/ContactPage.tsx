import React from 'react'
import Header from '../components/Header'
import ContactPageComponent from '../components/ContactPage'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactPageComponent />
    </div>
  )
}

export default ContactPage

