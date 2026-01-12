import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Certified Experts',
  'Proactive Monitoring',
  'Transparent Pricing',
  'Rapid Response',
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Main Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-light to-black-medium border border-gold/20 overflow-hidden">
                {/* Rotating Conic Gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-[200%] h-[200%] absolute"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.1), transparent, rgba(212, 175, 55, 0.1), transparent)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Shield Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 200 200"
                    fill="none"
                    className="w-48 h-48 md:w-64 md:h-64"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <motion.path
                      d="M100 10L180 50V110C180 150 145 185 100 195C55 185 20 150 20 110V50L100 10Z"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      fill="rgba(212, 175, 55, 0.05)"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M100 30L160 60V105C160 135 135 160 100 170C65 160 40 135 40 105V60L100 30Z"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      fill="rgba(212, 175, 55, 0.08)"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                    <motion.path
                      d="M100 50L140 70V100C140 120 125 140 100 148C75 140 60 120 60 100V70L100 50Z"
                      stroke="#D4AF37"
                      strokeWidth="1"
                      fill="rgba(212, 175, 55, 0.1)"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, delay: 1.1 }}
                    />
                    <motion.path
                      d="M75 100L92 117L128 81"
                      stroke="#D4AF37"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    />
                  </motion.svg>
                </div>
              </div>

              {/* Offset Frame */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border border-gold pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
              Your Trusted <span className="font-semibold text-gold">Technology Partner</span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Shield Tech Inc. was founded on the principle that every business deserves 
                enterprise-level IT support and security. We combine technical expertise with 
                a client-first approach, delivering solutions that protect your assets and 
                propel your growth.
              </p>
              <p>
                Our team of certified professionals brings decades of combined experience 
                across all major platforms and technologies. We don't just fix problems—we 
                anticipate them, ensuring your infrastructure is always one step ahead.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle2 
                    size={22} 
                    className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="font-medium text-white group-hover:text-gold transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
