import "./App.css";
import ChatUI from "./components/ChatPage/ChatUI";
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatdashboard" element={<ChatUI />} />
      </Routes>
    </>
  );
}

export default App;
