import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Providers from "./components/Providers"
import LandingPage from "./pages/LandingPage"
import ProviderDetails from "./components/ProviderDetails"
import ProviderEdit from "./components/ProviderEdit"
import ProviderAdd from "./components/ProviderAdd"

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
            <Route path="providers/add" element={<ProviderAdd/>}/>
            <Route path="providers/:id" element={<ProviderDetails/>}/>
            <Route path="providers/:id/edit" element={<ProviderEdit />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
