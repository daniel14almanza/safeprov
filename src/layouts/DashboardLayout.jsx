import { Outlet } from 'react-router-dom'
import Providers from '../components/Providers'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <>
    <div className='flex h-screen'>
      <Sidebar />
      <Outlet/>
      {/* <Providers /> */}

    </div>
    </>
  )
}

export default DashboardLayout