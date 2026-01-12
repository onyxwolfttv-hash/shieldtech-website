import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Phone, Mail, MapPin } from 'lucide-react'
import { Monitor, Shield, Cloud, Headphones, Phone as PhoneIcon, Network } from 'lucide-react'

const serviceData = {
    'managed-it': {
        icon: Monitor,
        title: 'Managed IT Services',
        subtitle: 'Your Complete IT Department',
        description: 'Comprehensive infrastructure management with 24/7 monitoring, proactive maintenance, and dedicated support to keep your operations running flawlessly.',
        longDescription: `In today's fast-paced business environment, technology downtime isn't just an inconvenience—it's a threat to your bottom line. Our Managed IT Services provide you with a complete, outsourced IT department that works around the clock to keep your systems running at peak performance.

We take a proactive approach to IT management, identifying and resolving potential issues before they impact your business. Our team of certified professionals monitors your infrastructure 24/7, ensuring maximum uptime and optimal performance.`,
        features: [
            '24/7 System Monitoring & Alerting',
            'Proactive Maintenance & Updates',
            'Help Desk Support',
            'Network Management',
            'Server Administration',
            'Backup & Disaster Recovery',
            'Vendor Management',
            'IT Strategy & Consulting',
        ],
        benefits: [
            'Reduce downtime and increase productivity',
            'Predictable monthly IT costs',
            'Access to enterprise-level expertise',
            'Focus on your core business',
            'Enhanced security posture',
            'Scalable solutions that grow with you',
        ],
    },
    'cybersecurity': {
        icon: Shield,
        title: 'Cybersecurity',
        subtitle: 'Protect What Matters Most',
        description: 'Enterprise-grade security solutions including threat detection, vulnerability assessments, compliance management, and incident response protocols.',
        longDescription: `Cyber threats are evolving at an unprecedented pace. From ransomware attacks to sophisticated phishing schemes, businesses of all sizes are targets. Our comprehensive cybersecurity solutions provide multi-layered protection to safeguard your data, reputation, and operations.

We combine cutting-edge technology with expert analysis to detect, prevent, and respond to threats before they can cause damage. Our security team stays ahead of emerging threats, continuously updating your defenses to keep you protected.`,
        features: [
            'Threat Detection & Response',
            'Vulnerability Assessments',
            'Penetration Testing',
            'Security Awareness Training',
            'Endpoint Protection',
            'Email Security',
            'Firewall Management',
            'Incident Response Planning',
        ],
        benefits: [
            'Protect sensitive data and customer information',
            'Meet compliance requirements',
            'Reduce risk of costly breaches',
            'Build customer trust',
            '24/7 security monitoring',
            'Rapid incident response',
        ],
    },
    'cloud-solutions': {
        icon: Cloud,
        title: 'Cloud Solutions',
        subtitle: 'Transform Your Infrastructure',
        description: 'Strategic cloud migration and management services across Azure, AWS, and hybrid environments with optimized performance and cost efficiency.',
        longDescription: `The cloud offers unprecedented flexibility, scalability, and cost savings—but only when implemented correctly. Our cloud solutions team helps you navigate the complexities of cloud adoption, ensuring a smooth migration and optimized ongoing operations.

Whether you're looking to move to Azure, AWS, or a hybrid environment, we design and implement cloud architectures tailored to your specific business needs. Our experts handle everything from planning and migration to optimization and management.`,
        features: [
            'Cloud Strategy & Planning',
            'Migration Services',
            'Azure & AWS Management',
            'Hybrid Cloud Solutions',
            'Cloud Security',
            'Cost Optimization',
            'Performance Monitoring',
            'Disaster Recovery',
        ],
        benefits: [
            'Reduce infrastructure costs',
            'Scale resources on demand',
            'Improve collaboration and accessibility',
            'Enhanced disaster recovery',
            'Automatic updates and maintenance',
            'Enterprise-grade security',
        ],
    },
    'help-desk': {
        icon: Headphones,
        title: 'Help Desk Support',
        subtitle: 'Support When You Need It',
        description: 'Responsive technical support with multiple tiers of expertise, ensuring rapid resolution for all user issues and seamless workflow continuity.',
        longDescription: `Technology issues don't wait for convenient times—and neither do we. Our Help Desk Support provides your team with immediate access to knowledgeable IT professionals who can resolve issues quickly and get your employees back to work.

With multiple tiers of support expertise, we handle everything from simple password resets to complex technical challenges. Our goal is first-call resolution, minimizing disruption to your business operations.`,
        features: [
            'Multi-Tier Support Structure',
            'Phone, Email & Chat Support',
            'Remote Troubleshooting',
            'Ticket Management System',
            'Knowledge Base Access',
            'User Training & Guidance',
            'Escalation Procedures',
            'SLA-Backed Response Times',
        ],
        benefits: [
            'Minimize employee downtime',
            'Fast issue resolution',
            'Consistent support quality',
            'Detailed reporting and analytics',
            'Improved employee satisfaction',
            'Reduced burden on internal staff',
        ],
    },
    'voip-solutions': {
        icon: PhoneIcon,
        title: 'VoIP Solutions',
        subtitle: 'Modern Business Communications',
        description: 'Modern unified communications with crystal-clear voice, video conferencing, and collaboration tools that connect your team anywhere.',
        longDescription: `Traditional phone systems are expensive, inflexible, and increasingly obsolete. Our VoIP solutions deliver enterprise-grade communications at a fraction of the cost, with features that empower your team to collaborate seamlessly from anywhere.

We design and implement unified communications platforms that integrate voice, video, messaging, and collaboration tools into a single, easy-to-use system. Whether your team is in the office, at home, or on the road, they stay connected.`,
        features: [
            'Cloud-Based Phone Systems',
            'Video Conferencing',
            'Team Messaging',
            'Call Recording & Analytics',
            'Auto-Attendant & IVR',
            'Mobile Integration',
            'CRM Integration',
            'Voicemail to Email',
        ],
        benefits: [
            'Reduce phone system costs by up to 50%',
            'Work from anywhere capabilities',
            'Improved team collaboration',
            'Professional call handling',
            'Easy scalability',
            'Advanced analytics and reporting',
        ],
    },
    'network-infrastructure': {
        icon: Network,
        title: 'Network Infrastructure',
        subtitle: 'The Foundation of Your Business',
        description: 'Design, implementation, and optimization of robust network architectures that scale with your business and maximize uptime.',
        longDescription: `Your network is the backbone of your business operations. A poorly designed or maintained network leads to slow performance, security vulnerabilities, and costly downtime. Our network infrastructure services ensure you have a robust, secure, and scalable foundation.

From initial design to ongoing optimization, our network engineers create infrastructure solutions tailored to your business requirements. We focus on performance, security, and reliability, giving you a network you can count on.`,
        features: [
            'Network Design & Architecture',
            'Wireless Solutions',
            'Switch & Router Configuration',
            'Network Security',
            'Performance Optimization',
            'Network Monitoring',
            'Cabling & Installation',
            'Network Documentation',
        ],
        benefits: [
            'Maximum uptime and reliability',
            'Improved network performance',
            'Enhanced security',
            'Scalable infrastructure',
            'Reduced maintenance costs',
            'Expert support and management',
        ],
    },
}

const ServicePage = () => {
    const { serviceId } = useParams()
    const service = serviceData[serviceId]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [serviceId])

    if (!service) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl text-white mb-4">Service Not Found</h1>
                    <Link to="/" className="text-gold hover:underline">Return Home</Link>
                </div>
            </div>
        )
    }

    const Icon = service.icon

    return (
        <div className="min-h-screen bg-black">
            <section className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8">
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium tracking-wider uppercase">Back to Home</span>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 border border-gold/30 rounded-lg">
                                <Icon className="text-gold" size={40} />
                            </div>
                            <span className="text-gold text-sm font-semibold tracking-widest uppercase">{service.subtitle}</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">{service.title}</h1>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">{service.description}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 bg-black-light">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <h2 className="text-3xl font-display text-white mb-6">Overview</h2>
                            <div className="text-gray-400 leading-relaxed whitespace-pre-line">{service.longDescription}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <h2 className="text-3xl font-display text-white mb-6">What's Included</h2>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="text-gold mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display text-white">Why Choose <span className="text-gold">Shield Tech</span>?</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.benefits.map((benefit, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="p-6 border border-gold/20 bg-black-light hover:border-gold/40 transition-colors">
                                <p className="text-white">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black-light to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us today to learn more about our {service.title.toLowerCase()} and how we can help protect and grow your business.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link to="/#contact" className="px-8 py-4 bg-gold text-black font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">Contact Us</Link>
                            <a href="tel:+1234567890" className="px-8 py-4 border border-gold/30 text-gold font-semibold text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors">Call Now</a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400">
                            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
                                <Phone size={18} />
                                <span>(123) 456-7890</span>
                            </a>
                            <a href="mailto:info@shieldtech.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                                <Mail size={18} />
                                <span>info@shieldtech.com</span>
                            </a>
                            <span className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>Nashville, TN</span>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ServicePage