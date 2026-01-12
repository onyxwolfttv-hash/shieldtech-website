import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-black/95 backdrop-blur-md py-4 border-b border-gold/20'
                    : 'bg-gradient-to-b from-black/90 to-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/shieldtech.png" alt="Shield Tech Logo" className="h-12 w-auto" />
                    <div className="font-display text-2xl tracking-wider">
                        <span className="text-gold font-semibold">SHIELD</span>
                        <span className="text-white font-light ml-1">TECH</span>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => scrollToSection(link.href)}
                                className="relative text-sm font-medium tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300 py-2 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-400" />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CyberPulse Login + Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* CyberPulse Login Button */}
                    <a
                        href="https://cyberpulse1.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden px-6 py-3 border border-gold text-gold text-xs font-semibold tracking-widest uppercase transition-all duration-400 hover:text-black group"
                    >
                        <span className="relative z-10">CyberPulse Login</span>
                        <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-gold p-2"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-black-light border-t border-gold/20"
                    >
                        <ul className="flex flex-col py-4">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="w-full text-left px-8 py-4 text-sm font-medium tracking-widest uppercase text-white/80 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                                    >
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar