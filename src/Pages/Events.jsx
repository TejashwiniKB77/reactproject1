import { useEffect } from "react";
import "../styles/events.css";

export default function Events() {
  useEffect(() => {
    document.title = "Events — Infomatics National PU College";
  }, []);

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner">
        <div className="page-banner-overlay">
          <div className="page-banner-content">
            <h1>Latest News & Events</h1>
            <p>
              Home <span>»</span>
              <span className="active">Latest News & Events</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== EVENTS SECTION ===== */}
      <section className="events-section">
        <div className="events-header">
          <span className="events-tag">📖 NEWS & EVENTS</span>
          <h2>
            Our Latest News & <span>Events</span>
          </h2>
          <p>Catch the highlights of our achievements and campus happenings!</p>
        </div>

        <div className="events-cards">

          {/* ===== CARD 1 ===== */}
          <div className="event-card">
            <div className="event-img">
              <img src="/annualday.jpg" alt="Annual Sports Day" />
            </div>
            <div className="event-meta">
              <span>📅 14 Dec, 2024</span>
              <span>⏰ 09.00AM - 04.00PM</span>
            </div>
            <h3>Annual Sports Day</h3>
          </div>

          {/* ===== CARD 2 ===== */}
          <div className="event-card">
            <div className="event-img blue-bg">
              <h4>
                Parents and Teachers Meet
                <br />@ Infomatics PU College
              </h4>
              <img
                src="/pu.photo.jpeg"
                alt="Parents Meet"
                className="inner-img"
              />
            </div>
            <div className="event-meta">
              <span>📅 05 Oct, 2024</span>
              <span>⏰ 10.00AM - 04.00PM</span>
            </div>
            <h3>Parents & Teachers Meet</h3>
          </div>

          {/* ===== CARD 3 ===== */}
          <div className="event-card">
            <div className="event-img">
              <img src="/science.jpeg" alt="Science Exhibition" />
            </div>
            <div className="event-meta">
              <span>📅 03 Aug, 2024</span>
              <span>⏰ 10.00AM - 04.00PM</span>
            </div>
            <h3>Yearly Science Exhibition</h3>
          </div>

        </div>
      </section>
    </>
  );
}
