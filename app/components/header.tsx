'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f2f4dd] pt-4 pr-8 pb-4 pl-8">
      <div className="flex w-full justify-between max-w-screen-2xl mx-auto md:flex-row">
        {/* Desktop Navigation */}
        <div className="flex flex-row justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex bg-[#f2f4dd]">
          {[
            { label: 'Home', href: '/' },
            { label: 'Booking', href: '/booking' },
            { label: 'Profile', href: '/profile' },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-gray-600 text-center mr-6 font-medium text-base"
              style={{ fontFamily: 'Raleway' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logo (you can add something here if needed) */}
        <div className="flex flex-row items-center justify-center order-first md:order-none bg-white" />

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center">
          <Link href="/login">
            <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white rounded-lg text-lg font-normal mr-6 hover:bg-gray-900 hover:border-gray-900 hover:text-white">
              Sign in
            </button>
          </Link>
          <Link href="/register">
            <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 border-blue-700 rounded-lg text-lg font-normal">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="outline-none mobile-menu-button">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-500 hover:text-green-500"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col items-center">
            {['Product', 'Features', 'Pricing'].map((text, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-600 text-center mt-2 font-medium text-base"
                style={{ fontFamily: 'Raleway' }}
              >
                {text}
              </a>
            ))}
            <Link href="/login">
              <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white rounded-lg text-lg font-normal mt-2">
                Sign in
              </button>
            </Link>
            <Link href="/register">
              <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 border-blue-700 rounded-lg text-lg font-normal mt-2">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
