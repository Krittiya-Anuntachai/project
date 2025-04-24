'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ตรวจสอบว่า user ล็อกอินอยู่หรือไม่
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'; // หรือใช้ router.push('/') ก็ได้ถ้าใช้ useRouter
  };

  return (
    <nav className="w-full bg-[#f2f4dd] pt-4 pr-8 pb-4 pl-8">
      <div className="flex w-full justify-between max-w-screen-2xl mx-auto md:flex-row">
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

        <div className="flex flex-row items-center justify-center order-first md:order-none bg-white" />

        <div className="hidden md:flex items-center">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="h-9 w-24 text-white bg-red-500 hover:bg-red-600 border-2 border-red-500 rounded-lg text-lg font-normal"
            >
              Sign out
            </button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
