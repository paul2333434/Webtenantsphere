'use client'

import { useState } from 'react'
import { Menu, X, Home } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TenantSphere</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Features
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Benefits
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Reviews
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Features
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Benefits
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Reviews
              </a>
              <hr className="border-gray-200" />
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left">
                Sign In
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-left">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}