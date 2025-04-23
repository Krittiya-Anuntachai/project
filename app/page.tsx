'use client'

import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

export default function HomePage() {
  return (
    <div className="bg-[#f2f4dd] pt-4 pr-8 pb-4 pl-8">
      <Header />

      <section className="mx-auto py-20 max-w-screen-2xl p-4 sm:pt-0">
        <p className="p-4 mb-2 text-gray-600 font-medium tracking-wide text-center lg:text-left uppercase">
          HOMEPAGE
        </p>

        <div className="mb-4 lg:mb-8 lg:gap-y-0 lg:flex-row lg:justify-between justify-center items-center flex flex-col gap-x-0 gap-y-6 max-md:max-w-lg max-md:mx-auto">
          <div className="w-full text-center lg:text-left lg:w-2/4">
            <p className="text-4xl lg:text-6xl lg:mb-6 lg:max-w-2xl lg:mx-0 font-bold tracking-tight leading-[3.25rem] mx-auto max-w-max">
              Enjoy a better stay experience with our service
            </p>
          </div>
          <div className="w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-600 mb-5">
              We offer everything to make your booking simple, fast, and hassle-free—
              making every trip more comfortable.
            </p>
            <a
              href="#"
              className="items-center justify-center text-base font-semibold text-black lg:justify-start flex flex-row gap-2"
            >
              Booking here!
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <img
          alt="content image"
          src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="mt-2 rounded-xl object-cover w-250 h-auto mx-auto sm:rounded-2xl sm:object-cover sm:max-h-[600px] sm:max-w-[1200px] lg:max-h-[700px] lg:max-w-[1400px] lg:rounded-3xl lg:object-cover lg:max-h-[800px] lg:max-w-[1600px]"
        />

        <div className="relative">
          <img
            alt="content image"
            src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-h-full object-top object-cover w-full sm:bg-orange-700 sm:text-amber-500 hidden"
          />
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto mt-6 px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Raleway' }}>
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Discover the best experiences, book appointments, and manage your profile—all in one place.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
            Get Started
          </button>
          <button className="bg-white text-blue-700 border border-blue-700 px-6 py-2 rounded-lg hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>

      <section className="mt-20 bg-[#f2f4dd] py-12">
        <div className="max-w-screen-2xl mx-auto px-8 grid gap-8 md:grid-cols-3 text-center">
          {[
            { title: 'Easy Booking', desc: 'Book appointments in just a few clicks.' },
            { title: 'User Profile', desc: 'Manage your profile and preferences easily.' },
            { title: 'Secure & Reliable', desc: 'Your data is safe and protected.' }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}