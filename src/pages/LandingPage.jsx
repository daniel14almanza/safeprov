import React from 'react';
import { Link } from 'react-router-dom';
import AnalysisPic from '../assets/images/analyse-financial.jpg';
import ReactLogo from '../assets/images/png/react.png';
import FastAPILogo from '../assets/images/png/fastapi.png';
import NETLogo from '../assets/images/png/netcore.png';

const LandingPage = () => {
  return (
    // Main container with full height and minimal padding
    <div className="min-h-screen bg-bg-200 font-sans">

      {/* 1. Temporary Navigation Bar */}
      <nav className="bg-bg-200 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo/Brand Name */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-text-100">
                SafeProv
              </span>
            </div>

            {/* Navigation and Login Link */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-text-200 hover:text-text-100 transition duration-150">Home</a>
              <a href="#" className="text-text-200 hover:text-text-100 transition duration-150">Features</a>
              <a href="#" className="text-text-200 hover:text-text-100 transition duration-150">About</a>
              <Link
                to="/dashboard"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main>

        {/* 2. Hero Section - Updated with Background Image */}

        {/* Optional: Overlay for better text readability */}
        <div
          className="py-32 bg-white relative"
          style={{
            backgroundImage: `url('${AnalysisPic}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Optional: Overlay for better text readability */}
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

          {/* Flex container to push content to the right */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">

            {/* Content Box with a defined width to occupy the right space */}
            <div className="w-full md:w-1/2 md:text-right">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                Launch Your Project with <span className="text-indigo-400">Confidence</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-full md:max-w-none ml-auto drop-shadow-md">
                A powerful, modern, and reliable solution built on React, Tailwind, and React Router. Get started in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Cards Section (Features/Info) */}
        <div className="py-16 bg-bg-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-text-100 text-center mb-12">
              Tech Solution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Card 1 */}
              <div className="bg-bg-200 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
                {/* Use a container for spacing and centering */}
                <div className="h-48 w-full flex items-center justify-center  p-4">
                  <img
                    src={ReactLogo}
                    alt="React Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-100 mb-2">
                    Blazing Fast Performance
                  </h3>
                  <p className="text-text-200">
                    Leverage React's component model for a lightning-fast and seamless user experience.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-bg-200 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
                <div className="h-48 w-full flex items-center justify-center  p-4">
                  <img
                    src={NETLogo}
                    alt="React Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-100 mb-2">
                    Stunning Modern Design
                  </h3>
                  <p className="text-text-200">
                    Utilize the power of Tailwind CSS for beautiful, responsive, and utility-first styling.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-bg-200 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
                <div className="h-48 w-full flex items-center justify-center  p-4">
                  <img
                    src={FastAPILogo}
                    alt="React Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-100 mb-2">
                    Seamless Navigation
                  </h3>
                  <p className="text-text-200">
                    Built-in routing with React Router Dom ensures smooth and dynamic page transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <footer className="bg-bg-300 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 SafeProvApp.. | <span className="font-semibold text-indigo-400">@dev2025</span>
          </p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;