import { TrendingUp, Clock, Users2 } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Reduce vacancy rates by 40% with faster tenant placement and automated rent collection that eliminates missed payments.',
    stats: '40% faster tenant placement',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate routine tasks and streamline workflows to save 15+ hours per week on property management activities.',
    stats: '15+ hours saved weekly',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: TrendingUp,
    title: 'Reduce Expenses',
    description: 'Lower operational costs by 30% through efficient maintenance coordination and reduced administrative overhead.',
    stats: '30% cost reduction',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Users2,
    title: 'Improve Tenant Satisfaction',
    description: 'Enhance tenant experience with 24/7 online portals, quick maintenance responses, and transparent communication.',
    stats: '95% tenant satisfaction',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Property Management Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of property managers who have streamlined their operations and increased profitability with our platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className={`${benefit.bgColor} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className={`inline-flex items-center ${benefit.color} ${benefit.bgColor} px-4 py-2 rounded-lg text-sm font-semibold`}>
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ROI Calculator Teaser */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Calculate Your Potential Savings
          </h3>
          <p className="text-gray-600 mb-6">
            See how much time and money you could save by switching to TenantSphere.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">780,000 XF</div>
              <div className="text-sm text-gray-600">Average Annual Savings</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">780</div>
              <div className="text-sm text-gray-600">Hours Saved Per Year</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">3x</div>
              <div className="text-sm text-gray-600">Return on Investment</div>
            </div>
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}