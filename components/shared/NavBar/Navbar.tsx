'use client';

import Link from 'next/link';
import { ChevronDown, User, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logos/logo-svg.svg';

export default function Navbar() {
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change (optional improvement)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav className="bg-[#001a4d] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
           
            <Image 
            src={logo}
              alt="Logo of QuickFix"
              className="h-12 w-full 3xl:-translate-x-16"
            />
          
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="hover:opacity-80 transition-opacity text-sm lg:text-base">
            Home
          </Link>

          {/* Desktop Services Dropdown (with click-outside) */}
          <div className="relative group" ref={dropdownRef}>
            <button className="flex items-center gap-1 hover:opacity-80 transition-opacity text-sm lg:text-base">
              Services
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-52 bg-white text-[#001a4d] rounded-md shadow-xl py-2 z-50 border border-gray-100 
            opacity-0 scale-95 translate-y-2 
            invisible
            group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
            group-hover:visible
            transition-all duration-300 ease-out">

              <Link
                href="/services"
                className="block px-5 py-3 hover:bg-gray-100 transition-colors text-sm"
              >
                All Services
              </Link>

              <Link
                href="/services/repair"
                className="block px-5 py-3 hover:bg-gray-100 transition-colors text-sm"
              >
                Repair Services
              </Link>

              <Link
                href="/services/maintenance"
                className="block px-5 py-3 hover:bg-gray-100 transition-colors text-sm"
              >
                Maintenance
              </Link>

              <Link
                href="/services/consulting"
                className="block px-5 py-3 hover:bg-gray-100 transition-colors text-sm"
              >
                Consulting
              </Link>
            </div>
          </div>

          <Link href="/about" className="hover:opacity-80 transition-opacity text-sm lg:text-base">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity text-sm lg:text-base">
            Contact
          </Link>
        </div>

        {/* Right Side: User + Mobile Button */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/account"
            className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all"
          >
            <User size={18} className="md:w-5 md:h-5" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (fully responsive + smooth) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#000d33] border-t border-white/20">
          <div className="px-6 py-6 space-y-4 text-sm">
            <Link
              href="/"
              className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* Mobile Services (separate state) */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-6 space-y-1 border-l border-white/20">
                  <Link
                    href="/services/repair"
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-gray-200"
                    onClick={closeMobileMenu}
                  >
                    Repair Services
                  </Link>
                  <Link
                    href="/services/maintenance"
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-gray-200"
                    onClick={closeMobileMenu}
                  >
                    Maintenance
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-gray-200"
                    onClick={closeMobileMenu}
                  >
                    Consulting
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}