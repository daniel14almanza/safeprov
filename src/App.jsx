import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Providers from "./components/Providers"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <BrowserRouter>
      <div className="bg-bg-100">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />}/>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Providers />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
