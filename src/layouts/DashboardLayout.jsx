import { Outlet } from 'react-router-dom'
import Providers from '../components/Providers'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default DashboardLayout