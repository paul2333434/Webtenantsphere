'use client'

import { ArrowRight, CheckCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Don't Miss Out on the Future
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
          >
            TenantSphere is launching soon with revolutionary features that will change property management forever. Reserve your spot today.
          </motion.p>
          
          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-10"
          >
            <div className="flex items-center text-primary-100">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
              <span>Early bird pricing</span>
            </div>
            <div className="flex items-center text-primary-100">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
              <span>Exclusive beta access</span>
            </div>
            <div className="flex items-center text-primary-100">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
              <span>Premium features included</span>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-primary-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all hover:shadow-lg group"
            >
              Join the Waitlist
              <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Get Notified
            </motion.button>
          </motion.div>
          
          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-primary-200 text-sm"
          >
            <p>2,847+ on waitlist • Expected October 15, 2025 launch • Built by property management experts</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}