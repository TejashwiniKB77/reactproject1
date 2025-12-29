import "../styles/style1.css";

export default function About() {
  return (
    <main className="container">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-img-box">
          <img src="/clg2.png" alt="Infomatics National PU College Campus" />
        </div>

        <div className="about-text">
          <h2 className="about-title">Our Story</h2>

          <p>
            Infomatics National PU College provides value-based education with a
            blend of modern learning facilities, experienced faculty, and a
            nurturing environment. We focus on academics, extracurricular
            growth, and career readiness.
          </p>

          <p>
            <strong>Vision:</strong> Empower students with excellent
            pre-university education.
          </p>

          <p>
            <strong>Mission:</strong> Build lifelong learners prepared for higher
            studies & industry.
          </p>
        </div>
      </section>

      {/* INFORMATION SECTION */}
      <section className="two-cols">
        <article className="info-card">
          <h3>Academics & Curriculum</h3>
          <p>
            Board exam focused teaching with well-equipped laboratories,
            digital classrooms, and continuous assessment methods.
          </p>
        </article>

        <article className="info-card">
          <h3>Facilities</h3>
          <ul>
            <li>Smart Classrooms</li>
            <li>Science & Computer Labs</li>
            <li>Library & Reading Rooms</li>
            <li>Sports & Activity Ground</li>
          </ul>
        </article>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-card">
          <h4>Students</h4>
          <p>1200+</p>
        </div>

        <div className="stat-card">
          <h4>Courses</h4>
          <p>8 Streams</p>
        </div>

        <div className="stat-card">
          <h4>Awards</h4>
          <p>50+</p>
        </div>
      </section>
    </main>
  );
}