import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ShieldCheck, Award, Lock, FileCheck, Building2, Globe, CreditCard, ArrowRight } from 'lucide-react'

const certifications = [
    {
        icon: ShieldCheck,
        name: 'SOC 2 Type II',
        slug: 'soc-2',
        description: 'Security, availability, and confidentiality controls verified by independent auditors.',
    },
    {
        icon: FileCheck,
        name: 'HIPAA',
        slug: 'hipaa',
        description: 'Full compliance with healthcare data protection and privacy requirements.',
    },
    {
        icon: CreditCard,
        name: 'PCI DSS',
        slug: 'pci-dss',
        description: 'Payment Card Industry Data Security Standard certified for secure transactions.',
    },
    {
        icon: Lock,
        name: 'NIST',
        slug: 'nist',
        description: 'Adherence to the National Institute of Standards and Technology cybersecurity framework.',
    },
    {
        icon: Building2,
        name: 'CMMC',
        slug: 'cmmc',
        description: 'Cybersecurity Maturity Model Certification for defense and government contracts.',
    },
    {
        icon: Award,
        name: 'ISO 27001',
        slug: 'iso-27001',
        description: 'International standard for information security management systems.',
    },
    {
        icon: Globe,
        name: 'GDPR',
        slug: 'gdpr',
        description: 'European data protection regulation compliance for global data handling.',
    },
]

const ComplianceCard = ({ cert, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const Icon = cert.icon

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative"
        >
            <Link to={`/compliance/${cert.slug}`} className="block">
                <div className="relative p-6 md:p-8 bg-black-light/50 border border-gold/10 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-black-light/80 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent transform rotate-45 translate-x-16 -translate-y-16 group-hover:from-gold/20 transition-all duration-500" />
                    </div>

                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />

                    <div className="relative flex items-center gap-4 mb-4">
                        <div className="p-3 border border-gold/20 bg-gold/5 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-400">
                            <Icon size={28} strokeWidth={1.5} className="text-gold group-hover:scale-110 transition-transform duration-400" />
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-medium text-white group-hover:text-gold transition-colors duration-400">
                            {cert.name}
                        </h3>
                    </div>

                    <p className="relative text-sm text-gray-400 leading-relaxed pl-0 md:pl-[76px] mb-4">
                        {cert.description}
                    </p>

                    <div className="relative pl-0 md:pl-[76px]">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold">
                            Learn More
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />
                </div>
            </Link>
        </motion.div>
    )
}

const Compliance = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="compliance" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L50 15V30C50 42 40 52 30 55C20 52 10 42 10 30V15L30 5Z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block">
                        Trust & Security
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                        Industry <span className="font-semibold text-gold">Compliance</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Shield Tech Inc. maintains the highest standards of security and compliance,
                        ensuring your data is protected by industry-leading frameworks.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {certifications.slice(0, 6).map((cert, index) => (
                        <ComplianceCard key={cert.name} cert={cert} index={index} />
                    ))}
                </div>

                <div className="mt-4 md:mt-6">
                    <ComplianceCard cert={certifications[6]} index={6} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 border border-gold/20 bg-gold/5">
                        <ShieldCheck className="text-gold" size={24} />
                        <span className="text-sm font-medium tracking-wider uppercase text-gold">
                            Fully Certified & Audit-Ready
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Compliance