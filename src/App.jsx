import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppDataProvider } from './context/AppDataContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import RoutesPage from './pages/RoutesPage'
import RouteDetailPage from './pages/RouteDetailPage'
import SightsPage from './pages/SightsPage'
import FoodPage from './pages/FoodPage'
import InfoPage from './pages/InfoPage'
import ContactPage from './pages/ContactPage'
import PlannerPage from './pages/PlannerPage'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminRoutesPage from './pages/admin/AdminRoutesPage'
import AdminMessagesPage from './pages/admin/AdminMessagesPage'

export default function App() {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="routes" element={<RoutesPage />} />
            <Route path="routes/:id" element={<RouteDetailPage />} />
            <Route path="planner" element={<PlannerPage />} />
            <Route path="sights" element={<SightsPage />} />
            <Route path="food" element={<FoodPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="routes" element={<AdminRoutesPage />} />
            <Route path="messages" element={<AdminMessagesPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppDataProvider>
  )
}
