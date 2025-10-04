import React from 'react';
import { Link } from 'react-router-dom';
import AnalysisPic from '../assets/images/analyse-financial.jpg';
import CTAImage from '../assets/images/png/team.png'; // <-- Your CTA PNG
import ReactLogo from '../assets/images/png/react.png';
import FastAPILogo from '../assets/images/png/fastapi.png';
import NETLogo from '../assets/images/png/netcore.png';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-bg-200 font-sans">

      {/* Navbar */}
      <nav className="bg-bg-200 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-text-100">SafeProv</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-text-200 hover:text-text-100 transition duration-150">Home</a>
              <Link
                to="/dashboard"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent-100 hover:bg-primary-200 transition duration-150 shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div
          className="relative py-32 bg-white"
          style={{
            backgroundImage: `url('${AnalysisPic}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
            <div className="w-full md:w-1/2 md:text-right">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                Know Your Providers Protect Your <span className="text-accent-100">Business</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-full md:max-w-none ml-auto drop-shadow-md">
                A powerful, modern, and reliable solution built on React, Tailwind, and React Router. Get started in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action (CTA) Section */}
        <div className="py-20 bg-bg-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

              {/* Left: Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-extrabold text-text-100 mb-4 leading-snug">
                  Gain Complete Visibility and <span className="text-accent-100">Mitigate Risk</span>
                </h2>
                <p className="text-lg text-text-200 mb-8">
                  SafeProv provides a comprehensive and dynamic view of your entire supply chain, offering deep insights to proactively manage compliance and financial risk before it impacts your operations.
                </p>
              </div>

              {/* Right: PNG Image */}
              <div className="md:w-1/2 w-full flex justify-center md:justify-end p-4">
                <img
                  src={CTAImage}
                  alt="Call to Action Illustration"
                  className="w-full max-w-sm h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Cards */}
        <div className="py-16 bg-bg-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-text-100 text-center mb-12">
              Tech Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {[{logo: ReactLogo, title: "Blazing Fast Performance", desc: "Leverage React's component model for a lightning-fast and seamless user experience."},
                {logo: NETLogo, title: "Stunning Modern Design", desc: "Utilize the power of Tailwind CSS for beautiful, responsive, and utility-first styling."},
                {logo: FastAPILogo, title: "Seamless Navigation", desc: "Built-in routing with React Router Dom ensures smooth and dynamic page transitions."}
              ].map((card, idx) => (
                <div key={idx} className="bg-bg-200 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
                  <div className="h-48 w-full flex items-center justify-center p-4">
                    <img src={card.logo} alt={`${card.title} Logo`} className="w-24 h-24 object-contain"/>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-100 mb-2">{card.title}</h3>
                    <p className="text-text-200">{card.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-bg-300 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 SafeProvApp | <span className="font-semibold text-indigo-400">@dev2025</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
