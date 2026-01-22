import "../styles/portal.css";

export default function CareerGuidance() {
  return (
    <div className="portal-container">
      <h2 className="portal-title">Career Guidance & Counseling</h2>
      <p className="portal-subtitle">
        Helping students choose the right academic and career path
      </p>

      <div className="card-grid">
        <div className="portal-card">
          <h3>Science Stream Guidance</h3>
          <p>
            Support for PCMB & PCMC students with competitive exam planning.
          </p>
        </div>

        <div className="portal-card">
          <h3>Commerce & Arts Counseling</h3>
          <p>
            Career options in business, finance, humanities, and social sciences.
          </p>
        </div>

        <div className="portal-card">
          <h3>One-on-One Counseling</h3>
          <p>
            Personalized counseling sessions with experienced faculty.
          </p>
        </div>
      </div>
    </div>
  );
}
