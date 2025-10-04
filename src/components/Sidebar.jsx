import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-unset text-white flex-shrink-0">
      <div className="border-r-2 border-bg-300 h-full flex flex-col items-center px-4 py-6">
        
        {/* Logo / Avatar */}
        <div className="h-16 w-16 rounded-full bg-bg-300 flex justify-center items-center mb-4">
          <p className="text-3xl">&#128373;</p>
        </div>

        {/* User */}
        <p className="mb-8 text-center">Daniel Almanza</p>

        {/* Nav */}
        <nav className="flex flex-col items-center space-y-4 flex-1 w-full">
          <a href="#" className="w-full text-center">Dashboard</a>
          <Link to="/dashboard" className="w-full text-center">
            Providers
          </Link>
        </nav>

        {/* Logout button pinned to bottom */}
        <div className="mt-auto w-full">
          <Link to="/" className="block">
            <button className="cursor-pointer w-full bg-bg-200 text-text-100 px-3 py-2 rounded">
              Log out
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
