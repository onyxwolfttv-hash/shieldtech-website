import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Phone, Mail, MapPin, ShieldCheck, Award, Lock, FileCheck, Building2, Globe, CreditCard } from 'lucide-react'

const complianceData = {
    'soc-2': {
        icon: ShieldCheck,
        title: 'SOC 2 Type II',
        subtitle: 'Trust Services Criteria',
        description: 'Security, availability, and confidentiality controls verified by independent auditors.',
        longDescription: `SOC 2 Type II is one of the most rigorous and respected security certifications available. It demonstrates that Shield Tech has implemented and maintained comprehensive controls over an extended period, not just at a single point in time.

Our SOC 2 Type II certification covers five trust service criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. This means your data is protected by controls that have been tested and verified by independent auditors over a minimum of six months.`,
        features: [
            'Annual third-party audits',
            'Continuous monitoring of security controls',
            'Documented policies and procedures',
            'Access control management',
            'Encryption at rest and in transit',
            'Incident response procedures',
            'Change management processes',
            'Vendor risk management',
        ],
        benefits: [
            'Demonstrates commitment to security',
            'Builds trust with clients and partners',
            'Meets enterprise vendor requirements',
            'Reduces security questionnaire burden',
            'Provides competitive advantage',
            'Ensures continuous improvement',
        ],
    },
    'hipaa': {
        icon: FileCheck,
        title: 'HIPAA',
        subtitle: 'Healthcare Data Protection',
        description: 'Full compliance with healthcare data protection and privacy requirements.',
        longDescription: `HIPAA (Health Insurance Portability and Accountability Act) compliance is essential for any organization that handles protected health information (PHI). Shield Tech maintains full HIPAA compliance, ensuring that healthcare data is protected according to federal standards.

Our HIPAA compliance program includes administrative, physical, and technical safeguards designed to protect the confidentiality, integrity, and availability of electronic protected health information (ePHI). We conduct regular risk assessments and maintain comprehensive documentation of our compliance efforts.`,
        features: [
            'Business Associate Agreements (BAAs)',
            'PHI encryption and access controls',
            'Regular risk assessments',
            'Employee HIPAA training',
            'Audit logging and monitoring',
            'Breach notification procedures',
            'Minimum necessary access policies',
            'Secure data backup and recovery',
        ],
        benefits: [
            'Protect patient data and privacy',
            'Avoid costly HIPAA violations',
            'Enable healthcare partnerships',
            'Build patient trust',
            'Meet regulatory requirements',
            'Reduce liability exposure',
        ],
    },
    'pci-dss': {
        icon: CreditCard,
        title: 'PCI DSS',
        subtitle: 'Payment Card Security',
        description: 'Payment Card Industry Data Security Standard certified for secure transactions.',
        longDescription: `PCI DSS (Payment Card Industry Data Security Standard) compliance ensures that organizations handling credit card data maintain a secure environment. Shield Tech's PCI DSS compliance protects cardholder data throughout the entire transaction process.

Our PCI DSS program encompasses all 12 requirements of the standard, from maintaining secure networks to implementing strong access control measures. We undergo regular assessments to validate our compliance and ensure continuous protection of payment data.`,
        features: [
            'Secure network architecture',
            'Cardholder data protection',
            'Vulnerability management program',
            'Strong access control measures',
            'Regular network monitoring and testing',
            'Information security policies',
            'Quarterly vulnerability scans',
            'Annual penetration testing',
        ],
        benefits: [
            'Accept credit card payments securely',
            'Protect customer financial data',
            'Avoid costly data breaches',
            'Meet merchant requirements',
            'Reduce fraud liability',
            'Maintain customer trust',
        ],
    },
    'nist': {
        icon: Lock,
        title: 'NIST',
        subtitle: 'Cybersecurity Framework',
        description: 'Adherence to the National Institute of Standards and Technology cybersecurity framework.',
        longDescription: `The NIST Cybersecurity Framework provides a comprehensive approach to managing cybersecurity risk. Shield Tech follows NIST guidelines to identify, protect, detect, respond to, and recover from cyber threats.

Our NIST-aligned security program provides a structured approach to cybersecurity that is recognized across industries. By following NIST guidelines, we ensure that our security controls are comprehensive, effective, and aligned with industry best practices.`,
        features: [
            'Risk identification and assessment',
            'Asset management and inventory',
            'Identity management and access control',
            'Security awareness training',
            'Continuous monitoring',
            'Incident response planning',
            'Recovery planning and testing',
            'Supply chain risk management',
        ],
        benefits: [
            'Comprehensive security coverage',
            'Risk-based approach to security',
            'Industry-recognized framework',
            'Improved security posture',
            'Better incident response',
            'Alignment with federal standards',
        ],
    },
    'cmmc': {
        icon: Building2,
        title: 'CMMC',
        subtitle: 'Defense Contractor Security',
        description: 'Cybersecurity Maturity Model Certification for defense and government contracts.',
        longDescription: `CMMC (Cybersecurity Maturity Model Certification) is required for organizations working with the Department of Defense. Shield Tech's CMMC compliance enables us to support defense contractors and handle Controlled Unclassified Information (CUI) securely.

Our CMMC program implements the security practices and processes required at each maturity level. This ensures that sensitive defense information is protected according to DoD requirements and enables our clients to pursue government contracts with confidence.`,
        features: [
            'Controlled Unclassified Information (CUI) protection',
            'Multi-factor authentication',
            'Encrypted communications',
            'Incident reporting procedures',
            'Personnel security measures',
            'Physical security controls',
            'System and communications protection',
            'Audit and accountability measures',
        ],
        benefits: [
            'Enable DoD contract eligibility',
            'Protect sensitive defense information',
            'Meet DFARS requirements',
            'Support supply chain security',
            'Demonstrate security maturity',
            'Access government opportunities',
        ],
    },
    'iso-27001': {
        icon: Award,
        title: 'ISO 27001',
        subtitle: 'Information Security Management',
        description: 'International standard for information security management systems.',
        longDescription: `ISO 27001 is the international standard for information security management systems (ISMS). Shield Tech's ISO 27001 certification demonstrates our commitment to systematically managing sensitive information and ensuring its confidentiality, integrity, and availability.

Our ISMS encompasses people, processes, and technology, providing a holistic approach to information security. The certification requires regular audits and continuous improvement, ensuring our security practices remain effective and up-to-date.`,
        features: [
            'Information Security Management System (ISMS)',
            'Risk assessment methodology',
            'Security policy framework',
            'Asset classification and control',
            'Human resources security',
            'Physical and environmental security',
            'Operations security',
            'Supplier relationship management',
        ],
        benefits: [
            'Internationally recognized certification',
            'Systematic approach to security',
            'Continuous improvement culture',
            'Enhanced stakeholder confidence',
            'Competitive differentiation',
            'Reduced security incidents',
        ],
    },
    'gdpr': {
        icon: Globe,
        title: 'GDPR',
        subtitle: 'Data Protection Regulation',
        description: 'European data protection regulation compliance for global data handling.',
        longDescription: `GDPR (General Data Protection Regulation) is the European Union's comprehensive data protection law. Shield Tech's GDPR compliance ensures that we handle personal data of EU residents according to the strictest privacy standards in the world.

Our GDPR program implements privacy by design principles, ensuring that data protection is built into our processes from the ground up. We maintain transparent data practices and provide individuals with control over their personal information.`,
        features: [
            'Lawful basis for data processing',
            'Data subject rights management',
            'Privacy by design implementation',
            'Data Protection Impact Assessments',
            'Breach notification procedures',
            'Data Processing Agreements',
            'Cross-border transfer mechanisms',
            'Records of processing activities',
        ],
        benefits: [
            'Serve EU customers confidently',
            'Demonstrate privacy commitment',
            'Avoid significant GDPR fines',
            'Build customer trust globally',
            'Streamline data practices',
            'Enable international business',
        ],
    },
}

const CompliancePage = () => {
    const { complianceId } = useParams()
    const compliance = complianceData[complianceId]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [complianceId])

    if (!compliance) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl text-white mb-4">Compliance Not Found</h1>
                    <Link to="/" className="text-gold hover:underline">Return Home</Link>
                </div>
            </div>
        )
    }

    const Icon = compliance.icon

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
                            <span className="text-gold text-sm font-semibold tracking-widest uppercase">{compliance.subtitle}</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">{compliance.title}</h1>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">{compliance.description}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 bg-black-light">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <h2 className="text-3xl font-display text-white mb-6">Overview</h2>
                            <div className="text-gray-400 leading-relaxed whitespace-pre-line">{compliance.longDescription}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <h2 className="text-3xl font-display text-white mb-6">What's Included</h2>
                            <ul className="space-y-4">
                                {compliance.features.map((feature, index) => (
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
                        <h2 className="text-3xl md:text-4xl font-display text-white">Why <span className="text-gold">{compliance.title}</span> Matters</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {compliance.benefits.map((benefit, index) => (
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
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Need {compliance.title} Compliance?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us today to learn how Shield Tech can help your organization achieve and maintain {compliance.title} compliance.</p>
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

export default CompliancePage