"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  {
    name: "Services",
    href: "#services",
    children: [
      { name: "Digital Government", href: "#digital-government" },
      { name: "FinTech", href: "#fintech" },
      { name: "AI & Innovation", href: "#ai-innovation" },
    ],
  },
  { name: "Documents", href: "#documents" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed w-full z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-gradient-to-r from-green-700 via-green-600 to-green-700"
        aria-label="Top"
      >
        {/* Top bar with contact and social */}
        <div className="container mx-auto px-4 h-10 flex items-center justify-between text-white text-sm border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+263 242 000000</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@mict.gov.zw</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-green-200 transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-green-200 transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-green-200 transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main header content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between"> {/* Increased height to h-28 */}
            {/* Left: Ministry Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image 
                  src="/minilogo.png" 
                  alt="Ministry Logo" 
                  width={200}  /* Increased from 60 to 80 */
                  height={80} /* Increased from 60 to 80 */
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </div>
             
            </Link>

            {/* Center: Navigation for desktop */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Button
                    variant="ghost"
                    className="text-white hover:text-green-200 hover:bg-white/10 transition-colors duration-200"
                    onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                    onClick={() => item.children ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : null}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Button>
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-1">
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Button className="bg-white text-green-700 hover:bg-green-50">Contact Us</Button>
              </motion.div>
            </div>

            {/* Right: Flag and Mobile Menu */}
            <div className="flex items-center space-x-6">
              <Image 
                src="/flag.png" 
                alt="Zimbabwe Flag" 
                width={70}  /* Increased from 50 to 70 */
                height={70} /* Increased from 50 to 70 */
                className="hover:scale-105 transition-transform duration-200"
              />
              <div className="md:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="text-gray-700 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white"
            >
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      onClick={() => {
                        if (item.children) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }}
                    >
                      {item.name}
                      {item.children && <ChevronDown className="ml-auto h-4 w-4" />}
                    </Button>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="pl-4 space-y-1"
                      >
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-green-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Contact Us</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* News banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-yellow-500 text-white py-2 px-4 shadow-md"
      >
        <div className="container mx-auto text-center text-sm font-medium">
          <span className="inline-block bg-yellow-600 px-2 py-1 rounded mr-2">Latest Update</span>
          New Digital Innovation Hub launched in Harare
        </div>
      </motion.div>
    </header>
  )
}

