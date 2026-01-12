import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Managed IT Services',
    'Cybersecurity',
    'Cloud Solutions',
    'Help Desk Support',
    'VoIP Solutions',
    'Network Infrastructure',
  ]

  return (
    <footer className="relative border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
                  <path
                    d="M25 5L45 15V30C45 38 36 46 25 48C14 46 5 38 5 30V15L25 5Z"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M18 26L23 31L32 20"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="font-display text-xl tracking-wider">
                <span className="text-gold font-semibold">SHIELD</span>
                <span className="text-white font-light ml-1">TECH</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium managed IT services tailored for businesses that demand excellence. 
              Security, reliability, and innovation—delivered with precision.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-500 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-500 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-gray-500 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Phone size={16} className="text-gold/60" />
                  (334) 209-3344
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shieldtechus.com"
                  className="flex items-center gap-3 text-gray-500 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Mail size={16} className="text-gold/60" />
                  info@shieldtechus.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500 text-sm">
                  <MapPin size={16} className="text-gold/60 mt-0.5 flex-shrink-0" />
                  <span>
                    223 S Cedar Ave<br />
                    Suite 223<br />
                    Demopolis, AL 36732
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Shield Tech Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gold text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gold text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
