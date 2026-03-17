'use client';

import Link from 'next/link';
import logo from "@/assets/logos/colorLogo.png"
import { Facebook, Twitter, Instagram, Pin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-10 md:pb-12 border-b border-gray-200">
          {/* Brand Section - Full width on mobile, optimized for all screens */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="">
            <Image 
              src={logo}
              alt="Logo of Handyhub"
              className="h-28 3xl:-translate-x-16"
            />
               
              
            </Link>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
              Connecting you with verified local professionals quickly, safely, and transparently.
            </p>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-5">How It Works</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/how-it-works/find-service" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Find a Service
                </Link>
              </li>
              <li>
                <Link href="/how-it-works/book-securely" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Book Securely
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-5">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/support/help-center" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/support/report-issue" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Report an Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-5">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cancellation" className="text-gray-600 hover:text-[#001a4d] transition-colors block py-1.5">
                  Cancellation & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - Fully responsive */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 md:pt-10">
          <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
            © 2026 QuickFix. All rights reserved.
          </p>

          {/* Social Icons - Bigger touch area on mobile */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 border-2 border-[#001a4d] text-[#001a4d] rounded-full flex items-center justify-center hover:bg-[#001a4d] hover:text-white transition-all active:scale-95"
              aria-label="Facebook"
            >
              <Facebook size={19} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 border-2 border-[#001a4d] text-[#001a4d] rounded-full flex items-center justify-center hover:bg-[#001a4d] hover:text-white transition-all active:scale-95"
              aria-label="Twitter"
            >
              <Twitter size={19} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 border-2 border-[#001a4d] text-[#001a4d] rounded-full flex items-center justify-center hover:bg-[#001a4d] hover:text-white transition-all active:scale-95"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 border-2 border-[#001a4d] text-[#001a4d] rounded-full flex items-center justify-center hover:bg-[#001a4d] hover:text-white transition-all active:scale-95"
              aria-label="Pinterest"
            >
              <Pin size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}