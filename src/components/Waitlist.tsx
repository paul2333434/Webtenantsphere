'use client'

import { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Users, Clock, Zap } from 'lucide-react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
  }

  const benefits = [
    {
      icon: Users,
      title: 'Early Access',
      description: 'Be among the first to experience PropertySphere when we launch'
    },
    {
      icon: Zap,
      title: 'Exclusive Features',
      description: 'Get access to premium features during the beta period'
    },
    {
      icon: Clock,
      title: 'Priority Support',
      description: 'Receive dedicated support as we refine the platform'
    }
  ]

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
            Coming Soon
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the TenantSphere Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be the first to experience the future of property management. Join our exclusive waitlist for early access, special pricing, and premium features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join Our Waitlist?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="bg-primary-100 p-3 rounded-xl group-hover:bg-primary-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">2,847</div>
                  <div className="text-sm text-gray-600">On Waitlist</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">Oct 15, 2025</div>
                  <div className="text-sm text-gray-600">Expected Launch</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">Early Bird Discount</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Secure Your Spot
                  </h3>
                  <p className="text-gray-600">
                    Enter your email to join the waitlist and be notified when TenantSphere launches.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center group"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                
                <div className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Welcome to the List!
                </h3>
                <p className="text-gray-600">
                  Thanks for joining! We'll keep you updated on our progress and notify you as soon as TenantSphere launches.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Add another email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
