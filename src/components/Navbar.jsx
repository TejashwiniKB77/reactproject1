import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/admission">Admission</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/events">Events</NavLink>
<NavLink to="/career-guidance">Career Guidance</NavLink>

      {/* ✅ FIXED */}
      <NavLink to="/notice-board">Notice Board</NavLink>

      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
