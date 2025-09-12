'use client'

import { Quote, Users, Lightbulb, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const earlyFeedback = [
  {
    name: 'Sarah M.',
    role: 'Property Manager',
    company: 'Beta Tester',
    quote: "The early demos look incredible! The AI features will be a game-changer for our industry. Can't wait for the full release."
  },
  {
    name: 'Michael C.',
    role: 'Real Estate Investor',
    company: 'Early Access User',
    quote: "Finally, a platform built for the future. The automation capabilities shown in the preview exceed anything currently available."
  },
  {
    name: 'Lisa R.',
    role: 'Property Owner',
    company: 'Beta Tester',
    quote: "TenantSphere's approach to property management is exactly what we've been waiting for. The preview convinced me immediately."
  },
  {
    name: 'David T.',
    role: 'Property Manager',
    company: 'Early Adopter',
    quote: "The beta features we've tested are incredibly intuitive. This will save us hours every week once it launches."
  },
  {
    name: 'Amanda F.',
    role: 'Real Estate Professional',
    company: 'Preview User',
    quote: "I've seen the roadmap and feature previews. This is going to revolutionize how we manage properties. Excited to be on the waitlist!"
  },
  {
    name: 'Robert K.',
    role: 'Property Investor',
    company: 'Beta Participant',
    quote: "The technology behind TenantSphere is impressive. The team clearly understands the pain points we face daily."
  }
]

const stats = [
  { number: '2,847', label: 'On Waitlist', icon: Users },
  { number: '95%', label: 'Beta Satisfaction', icon: Heart },
  { number: '50+', label: 'Features Planned', icon: Lightbulb },
  { number: 'Oct 15, 2025', label: 'Launch Target' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Early Feedback
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Beta Testers Are Excited
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our early access users and beta testers are already seeing the potential. Here's what they're saying about PropertySphere.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {IconComponent && (
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Early Feedback Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {earlyFeedback.map((feedback, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary-600 mb-4" />
              
              {/* Beta Badge */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
                Beta Feedback
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{feedback.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {feedback.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {feedback.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {feedback.role}
                  </div>
                  <div className="text-sm text-primary-600">
                    {feedback.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Be Part of the PropertySphere Community
          </h3>
          <p className="text-gray-600 mb-6">
            Join our growing community of property professionals excited about the future of property management.
          </p>
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg group"
          >
            Join the Waitlist
            <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}