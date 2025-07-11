// App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Pages/DashboardLayout";
import ProtectedRoute from "./HOC/ProtectedRoute";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ChatPage from "./Pages/ChatPage";
import ProfileUpdatePage from "./Pages/ProfileUpdatePage";
// import PricingPage from "./components/PricingPage/PricingPage"; // upcoming


//  app componenet
function App() {
  return (
    <Routes>
      {/* Public routes - No auth check */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes - Auth check applied */}
      <Route
        path="/chatdashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ChatPage key={location.key} />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/settings"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ProfileUpdatePage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/pricing"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <PricingPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}

export default App;
