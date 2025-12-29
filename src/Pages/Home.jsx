import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <img src="/clg.png" alt="Campus" />
        <div className="hero-text">
          <h2>Welcome to Infomatics National PU College</h2>
          <p>
            Providing value-based education, modern facilities, and a bright
            future.
          </p>
          <Link to="/admission" className="btn">
            Apply Now
          </Link>
        </div>
      </section>

      {/* ===== FEATURE STRIP ===== */}
      <section className="features-strip">
        <div className="strip-card">
          <h4>Digital Classrooms</h4>
          <p>Fully equipped smart classrooms with advanced tools.</p>
        </div>
        <div className="strip-card">
          <h4>Experienced Faculty</h4>
          <p>Highly qualified teachers dedicated to students.</p>
        </div>
        <div className="strip-card">
          <h4>Sports & Activities</h4>
          <p>Focus on physical fitness and extracurricular growth.</p>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="why-us">
        <div className="why-container">
          <div className="why-left">
            <span className="why-tag">
              WHY INFOMATICS NATIONAL PU COLLEGE?
            </span>

            <h2>Here Are The Key Qualities Of Our College</h2>
            <p className="why-desc">
              These qualities collectively make our college stand out as a
              leader in pre-university education.
            </p>

            <div className="why-cards">
              <div className="why-card">
                <h4>Qualified Faculties</h4>
                <p>Experienced and supportive teachers.</p>
              </div>

              <div className="why-card">
                <h4>Academic Excellence</h4>
                <p>Strong curriculum and consistent results.</p>
              </div>

              <div className="why-card">
                <h4>Modern Infrastructure</h4>
                <p>Well-equipped labs and smart classrooms.</p>
              </div>

              <div className="why-card">
                <h4>Career Guidance</h4>
                <p>Competitive exams & future planning support.</p>
              </div>
            </div>
          </div>

          <div className="why-right">
            <div className="image-frame">
              <img src="/clg.png" alt="College Building" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <h5 className="test-tag">TESTIMONIALS</h5>
        <h2>
          What Our <span>Parents Say’s</span>
        </h2>
        <p className="test-sub">
          The ultimate proof of trust—parents who believe in us!
        </p>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="badge">99</div>
            <div className="stars">★★★★★</div>
            <p>
              Management, Teachers, Warden & Environment everything is best.
            </p>
            <h4>T Bhavya</h4>
            <span>Parent</span>
          </div>

          <div className="testimonial-card">
            <div className="badge">99</div>
            <div className="stars">★★★★★</div>
            <p>
              Excellent faculty and structured curriculum helped our child.
            </p>
            <h4>Devarajulu Reddy</h4>
            <span>Parent</span>
          </div>

          <div className="testimonial-card">
            <div className="badge">99</div>
            <div className="stars">★★★★★</div>
            <p>
              Focus on extracurricular activities builds confidence.
            </p>
            <h4>Ramesha Devalapalli</h4>
            <span>Parent</span>
          </div>

          <div className="testimonial-card">
            <div className="badge">99</div>
            <div className="stars">★★★★★</div>
            <p>
              Outstanding infrastructure and learning atmosphere.
            </p>
            <h4>Muniraju Reddy</h4>
            <span>Parent</span>
          </div>
          
   <div className="testimonial-card">
            <div className="badge">99</div>
            <div className="stars">★★★★★</div>
            <p>
              learning atmosphere and good teachers.
            </p>
            <h4>Keerthi suresh</h4>
            <span>Parent</span>
          </div>

          
        </div>
      </section>
    </>
  );
}
