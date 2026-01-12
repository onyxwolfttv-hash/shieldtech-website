import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
    Monitor,
    Shield,
    Cloud,
    Headphones,
    Phone,
    Network,
    ArrowRight
} from 'lucide-react'

const services = [
    {
        icon: Monitor,
        title: 'Managed IT Services',
        slug: 'managed-it',
        description: 'Comprehensive infrastructure management with 24/7 monitoring, proactive maintenance, and dedicated support to keep your operations running flawlessly.',
    },
    {
        icon: Shield,
        title: 'Cybersecurity',
        slug: 'cybersecurity',
        description: 'Enterprise-grade security solutions including threat detection, vulnerability assessments, compliance management, and incident response protocols.',
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        slug: 'cloud-solutions',
        description: 'Strategic cloud migration and management services across Azure, AWS, and hybrid environments with optimized performance and cost efficiency.',
    },
    {
        icon: Headphones,
        title: 'Help Desk Support',
        slug: 'help-desk',
        description: 'Responsive technical support with multiple tiers of expertise, ensuring rapid resolution for all user issues and seamless workflow continuity.',
    },
    {
        icon: Phone,
        title: 'VoIP Solutions',
        slug: 'voip-solutions',
        description: 'Modern unified communications with crystal-clear voice, video conferencing, and collaboration tools that connect your team anywhere.',
    },
    {
        icon: Network,
        title: 'Network Infrastructure',
        slug: 'network-infrastructure',
        description: 'Design, implementation, and optimization of robust network architectures that scale with your business and maximize uptime.',
    },
]

const ServiceCard = ({ service, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const Icon = service.icon

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-8 md:p-10 bg-gradient-to-br from-black-light to-black border border-gold/10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/50 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(212,175,55,0.1)]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

            <div className="relative mb-8">
                <Icon
                    size={48}
                    strokeWidth={1.5}
                    className="text-gold transition-all duration-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                />
            </div>

            <h3 className="relative font-display text-2xl md:text-3xl font-medium mb-4 text-white group-hover:text-gold transition-colors duration-400">
                {service.title}
            </h3>

            <p className="relative text-gray-400 leading-relaxed mb-8">
                {service.description}
            </p>

            <Link
                to={`/services/${service.slug}`}
                className="relative inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold transition-all duration-300"
            >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
        </motion.div>
    )
}

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="services" className="section-padding relative">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 md:mb-20"
            >
                <span className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block">
                    What We Offer
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
                    Premium <span className="font-semibold text-gold">IT Solutions</span>
                </h2>
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Services