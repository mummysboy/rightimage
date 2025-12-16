import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ServicesPage from './pages/ServicesPage'
import ApproachPage from './pages/ApproachPage'
import ResultsPage from './pages/ResultsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 