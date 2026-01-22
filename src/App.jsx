import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Admission from "./Pages/Admission";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import NoticeBoard from "./Pages/NoticeBoard";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import VerifyOtp from "./Pages/VerifyOtp";
import ForgotPassword from "./Pages/ForgotPassword";
import NotFound from "./Pages/NotFound";

// ✅ NEW PAGES
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import CareerGuidance from "./Pages/CareerGuidance";

export default function App() {
  useEffect(() => {
    alert("Welcome to Infomatics National PU College");
  }, []);

  return (
    <>
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== ANNOUNCEMENT BAR ===== */}
      <div className="announcement-bar">
        <div className="marquee">
          <span>
            TALENT SEARCH EXAMINATION (ITSE) – 01/01/2026 • ADMISSIONS OPEN •
            APPLY NOW
          </span>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== ROUTES ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
<Route path="/career-guidance" element={<CareerGuidance />} />
<Route path="/verify-otp" element={<VerifyOtp />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
        {/* ===== NOT FOUND ===== */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}
