"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-700 text-white/90">
      <div className="absolute inset-0 bg-[url('/images/image2.jpeg')] opacity-10"></div>
      <div className="container pt-16 pb-8 relative"> {/* Changed py-16 to pt-16 pb-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-6 text-white border-b border-green-700/50 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">+263 242 786101-4</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">info@ictpcs.gov.zw</span>
              </div>
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">Bank Chambers, 76 Samora Machel Ave, Harare</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white border-b border-green-700/50 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Documents'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 transition-all duration-300 group-hover:w-3"></span>
                    <span className="group-hover:text-white transition-colors">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday</p>
              <p>8:00 AM - 4:30 PM</p>
              <p>Closed on Public Holidays</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 pt-4 border-t border-green-700/30 text-center text-white/70"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ministry of ICT, Postal & Courier Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

