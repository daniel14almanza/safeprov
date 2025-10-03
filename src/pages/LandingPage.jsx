import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'

const LandingPage = () => {
  return (
    <>
      <div>LandingPage</div>
      <Link to="/dashboard">Login</Link>
    </>
  )
}

export default LandingPage