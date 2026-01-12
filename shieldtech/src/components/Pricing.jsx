import { motion } from 'framer-motion'
import { Clock, Shield, Zap } from 'lucide-react'

const Pricing = () => {
    const tiers = [
        {
            name: 'Basic',
            icon: Shield,
            description: 'Essential protection for small businesses getting started with cybersecurity.',
            features: ['24/7 Monitoring', 'Threat Detection', 'Email Support', 'Monthly Reports'],
        },
        {
            name: 'Business',
            icon: Zap,
            description: 'Comprehensive security solutions for growing businesses.',
            features: ['Everything in Basic', 'Vulnerability Assessments', 'Compliance Support', 'Priority Support', 'Weekly Reports'],
            popular: true,
        },
        {
            name: 'Elite',
            icon: Clock,
            description: 'Enterprise-grade security for businesses that demand the best.',
            features: ['Everything in Business', 'Dedicated Account Manager', 'Custom Solutions', '24/7 Phone Support', 'Real-time Reporting', 'Incident Response'],
        },
    ]

    return (
        <section id="pricing" className="py-24 bg-black-light">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
                        Pricing
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                        Choose Your <span className="text-gold italic">Protection</span>
                    </h2>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mt-6">
                        <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                        <span className="text-gold text-sm font-medium">New tiers coming soon</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 border rounded-lg transition-all duration-300 hover:border-gold/60 hover:-translate-y-2 ${tier.popular
                                    ? 'border-gold bg-gradient-to-b from-gold/10 to-transparent'
                                    : 'border-gold/20 bg-black'
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black text-xs font-bold tracking-wider uppercase">
                                    Most Popular
                                </div>
                            )}

                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-lg mb-6">
                                <tier.icon className="text-gold" size={28} />
                            </div>

                            {/* Tier Name */}
                            <h3 className="text-2xl font-display text-white mb-2">{tier.name}</h3>

                            {/* Coming Soon Price */}
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-gold">Coming Soon</span>
                            </div>

                            {/* Description */}
                            <p className="text-white/60 text-sm mb-6">{tier.description}</p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-300 ${tier.popular
                                        ? 'bg-gold text-black hover:bg-gold-light'
                                        : 'border border-gold/30 text-gold hover:bg-gold/10'
                                    }`}
                            >
                                Contact Us
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing