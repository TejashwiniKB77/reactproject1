import "../styles/style.css";

export default function Career() {
  return (
    <main className="container">
      <h2>Career Paths Overview</h2>

      <section className="career-grid">
        <div className="career">
          <h3>Engineering</h3>
          <p>Entrance exam guidance and preparation.</p>
        </div>

        <div className="career">
          <h3>Medical</h3>
          <p>NEET coaching and lab exposure.</p>
        </div>

        <div className="career">
          <h3>Commerce</h3>
          <p>CA / CS / B.Com career path.</p>
        </div>

        <div className="career">
          <h3>Arts</h3>
          <p>Humanities and civil services.</p>
        </div>
      </section>
    </main>
  );
}