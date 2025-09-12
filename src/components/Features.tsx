'use client'

import { 
  CreditCard, 
  Users, 
  Wrench, 
  BarChart3, 
  Shield, 
  Smartphone,
  Clock,
  FileText
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: CreditCard,
    title: 'Online Rent Collection',
    description: 'Automate rent collection with secure online payments, automatic reminders, and late fee processing.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'Tenant Screening',
    description: 'Comprehensive background checks, credit reports, and eviction history to find the best tenants.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Wrench,
    title: 'Maintenance Management',
    description: 'Streamline maintenance requests with tenant portals, work order tracking, and vendor management.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    description: 'Generate detailed financial reports, track expenses, and monitor property performance metrics.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Shield,
    title: 'Legal Compliance',
    description: 'Stay compliant with local laws, automated lease renewals, and legal document generation.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Manage properties on-the-go with full-featured mobile apps for landlords and tenants.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Clock,
    title: 'Automated Workflows',
    description: 'Set up automated reminders, notifications, and recurring tasks to save time and reduce errors.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Store, organize, and share important documents with secure cloud-based document management.',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
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
            Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Everything You Need to Manage Properties
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive platform includes all the tools you need to efficiently manage residential and commercial properties.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="feature-card bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Join the Waitlist
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}