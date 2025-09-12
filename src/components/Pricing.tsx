import { Check, X, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '32,000 XF',
    period: '/month',
    description: 'Perfect for small property portfolios',
    maxProperties: '1-10 properties',
    features: [
      'Online rent collection',
      'Basic tenant screening',
      'Maintenance requests',
      'Financial reporting',
      'Email support',
      'Mobile app access'
    ],
    notIncluded: [
      'Advanced automation',
      'Custom reports',
      'Priority support'
    ],
    popular: false,
    buttonText: 'Start Free Trial',
    buttonStyle: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
  },
  {
    name: 'Professional',
    price: '65,000 XF',
    period: '/month',
    description: 'Ideal for growing property managers',
    maxProperties: '11-50 properties',
    features: [
      'Everything in Starter',
      'Advanced tenant screening',
      'Automated workflows',
      'Custom lease templates',
      'Vendor management',
      'Priority support',
      'Advanced reporting',
      'API access'
    ],
    notIncluded: [
      'White-label solution',
      'Dedicated account manager'
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-primary-600 text-white hover:bg-primary-700'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large-scale property management',
    maxProperties: '50+ properties',
    features: [
      'Everything in Professional',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'Training & onboarding',
      'Custom contracts',
      '99.9% SLA guarantee'
    ],
    notIncluded: [],
    popular: false,
    buttonText: 'Contact Sales',
    buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600'
  }
]

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees. You can start using PropertySphere immediately after signing up.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and offer annual billing discounts.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption and security measures to protect your data.'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your portfolio size. All plans include a 30-day free trial with no setup fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 ${
              plan.popular ? 'border-primary-600 shadow-lg' : 'border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
                <div className="text-sm font-medium text-primary-600 mt-2">{plan.maxProperties}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center opacity-60">
                    <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-600 mb-6">
            Try PropertySphere risk-free. If you're not completely satisfied within 30 days, we'll refund your money.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}