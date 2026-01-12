import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects - Static now */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(ellipse at 20% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(26, 26, 26, 1) 0%, #0A0A0A 100%)
            `,
                    }}
                />

                {/* Static Lines - no animation */}
                {[10, 25, 50, 75, 90].map((left, index) => (
                    <div
                        key={index}
                        className="absolute w-px h-full opacity-30"
                        style={{
                            left: `${left}%`,
                            background: 'linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-gold/30 bg-gold/5"
                >
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">
                        Premium IT Solutions
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
                >
                    Protecting Your
                    <span className="block font-semibold text-gold mt-2">
                        Digital Infrastructure
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Experience white-glove managed IT services tailored for businesses that demand excellence.
                    Security, reliability, and innovation—delivered with precision.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    {/* Primary Button */}
                    <button
                        onClick={() => scrollToSection('#contact')}
                        className="group relative px-10 py-4 bg-gold text-black font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                    >
                        <span className="relative z-10">Schedule Consultation</span>
                    </button>

                    {/* Secondary Button */}
                    <button
                        onClick={() => scrollToSection('#services')}
                        className="group relative px-10 py-4 border border-white/30 text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:border-gold hover:text-gold"
                    >
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                            Explore Services
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator - simplified */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border border-gold/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    )
}

export default Hero