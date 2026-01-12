import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services does Shield Tech offer?",
      answer: "We provide comprehensive cybersecurity and compliance solutions including managed IT services, threat detection, vulnerability assessments, compliance management, incident response, cloud security, and 24/7 monitoring to keep your business protected."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve businesses across the Southeast including Tennessee (Nashville), Mississippi, Florida, Georgia, and all of Alabama."
    },
    {
      question: "How much do your services cost?",
      answer: "We're currently finalizing our new service tiers to better serve businesses of all sizes. Contact us to discuss your specific needs and get a custom quote."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with businesses across various industries including healthcare, finance, legal, manufacturing, and small-to-medium businesses that need enterprise-grade security."
    },
    {
      question: "What compliance standards do you help with?",
      answer: "We assist with HIPAA, PCI-DSS, SOC 2, NIST, CMMC, and other regulatory compliance frameworks based on your industry requirements."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes! Our team monitors your systems around the clock and provides dedicated support whenever you need it."
    },
    {
      question: "How do I get started?",
      answer: "Simply reach out through our contact form or give us a call. We'll schedule a free consultation to assess your security needs and create a customized plan for your business."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gold/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/40"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-black-light hover:bg-gold/5 transition-colors duration-300"
              >
                <span className="text-white font-medium text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-6 pt-0 text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ