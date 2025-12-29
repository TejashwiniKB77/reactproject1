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
import NotFound from "./Pages/NotFound";


export default function App() {
  useEffect(() => {
    alert("Welcome to Infomatics National PU College");
  }, []);

  return (
    <>
      <Header />

      {/* ✅ MOVING ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="marquee">
          <span>
            TALENT SEARCH EXAMINATION (ITSE) – 01/01/2026 • ADMISSIONS OPEN •
            APPLY NOW
          </span>
        </div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
