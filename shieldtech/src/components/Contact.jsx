import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const serviceOptions = [
  { value: '', label: 'Select a Service' },
  { value: 'managed-it', label: 'Managed IT Services' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'cloud', label: 'Cloud Solutions' },
  { value: 'helpdesk', label: 'Help Desk Support' },
  { value: 'voip', label: 'VoIP Solutions' },
  { value: 'network', label: 'Network Infrastructure' },
  { value: 'compliance', label: 'Compliance & Audit' },
  { value: 'comprehensive', label: 'Comprehensive Package' },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    // Replace with actual EmailJS or backend integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const inputClasses = `
    w-full px-5 py-4 
    bg-white/[0.03] 
    border border-white/10 
    text-white 
    font-body text-base
    transition-all duration-400
    focus:outline-none focus:border-gold focus:bg-gold/5 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)]
    placeholder:text-gray-600
  `

  const labelClasses = `
    block text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3
  `

  return (
    <section id="contact" className="section-padding relative bg-gradient-to-b from-black to-black-light">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Start Your <span className="font-semibold text-gold">Partnership</span>
          </h2>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name & Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Smith"
                className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="mt-2 text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className={labelClasses}>
                Company
              </label>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className={inputClasses}
                {...register('company')}
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@company.com"
                className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="mt-2 text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(555) 123-4567"
                className={inputClasses}
                {...register('phone')}
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service" className={labelClasses}>
              Service Interest
            </label>
            <div className="relative">
              <select
                id="service"
                className={`${inputClasses} appearance-none cursor-pointer pr-12`}
                {...register('service')}
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-black-light">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your IT needs..."
              className={`${inputClasses} resize-y min-h-[150px]`}
              {...register('message')}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-12 py-5 border-2 border-gold text-gold font-semibold text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-400 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-400 group-hover:text-black">
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 text-green-400"
            >
              <CheckCircle size={20} />
              <span>Thank you! We'll be in touch within 24 hours.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400"
            >
              <AlertCircle size={20} />
              <span>Something went wrong. Please try again or contact us directly.</span>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
