import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Approach', href: '/approach' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-black/40 backdrop-blur-sm lg:bg-black/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="group flex items-center space-x-3 relative z-[110] cursor-pointer">
              {/* Logo Image */}
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Right Image Digital" 
                  className="h-10 lg:h-12 w-auto rounded-lg object-contain shadow-sm"
                />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className={`text-lg lg:text-xl font-semibold tracking-tight transition-colors ${
                  isScrolled ? 'text-gray-900 group-hover:text-teal-600' : 'text-white group-hover:text-teal-300'
                }`}>
                  Right Image
                </span>
                <span className={`text-xs lg:text-sm font-light tracking-wider uppercase transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  Digital
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative z-[110] cursor-pointer ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-teal-600' 
                      : 'text-white hover:text-teal-300'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Sign In */}
            <motion.div
              whileHover={{ y: -2 }}
            >
              <Link
                to="/login"
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative z-[110] cursor-pointer ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-teal-600' 
                    : 'text-white hover:text-teal-300'
                }`}
              >
                Sign In
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 relative z-[110] cursor-pointer ${
              isScrolled 
                ? 'text-gray-900 hover:text-teal-600' 
                : 'text-white hover:text-teal-300'
            }`}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 relative z-[110]"
            >
              <nav className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="block text-lg font-medium tracking-wide uppercase text-gray-900 hover:text-teal-600 transition-colors duration-300 relative z-[110] cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link
                    to="/login"
                    className="block text-lg font-medium tracking-wide uppercase text-gray-900 hover:text-teal-600 transition-colors duration-300 relative z-[110] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 