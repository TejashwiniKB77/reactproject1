import { useState } from "react";
import "../styles/style3.css";

export default function Courses() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const courses = [
    {
      title: "PCMB (Physics, Chemistry, Maths, Biology)",
      details: (
        <>
          <p>
            Best for students targeting <strong>engineering, medicine, and
            science careers</strong>.
          </p>
          <ul>
            <li>Strong foundation in science subjects</li>
            <li>Practical sessions in science labs</li>
            <li>Competitive exam coaching (NEET/JEE basics)</li>
          </ul>
        </>
      ),
    },
    {
      title: "PCMC (Physics, Chemistry, Maths, Computer Science)",
      details: (
        <>
          <p>
            Focus on foundation for <strong>engineering and computer sciences</strong>.
          </p>
          <ul>
            <li>Programming fundamentals</li>
            <li>Logical & analytical skill development</li>
            <li>Ideal for IT & engineering aspirants</li>
          </ul>
        </>
      ),
    },
    {
      title: "Commerce",
      details: (
        <>
          <p>
            <strong>Accountancy, Business Studies, Economics</strong> — prepares
            students for professional courses.
          </p>
          <ul>
            <li>Career paths: CA, CS, CMA, B.Com</li>
            <li>Business & financial knowledge</li>
            <li>Entrepreneurship foundation</li>
          </ul>
        </>
      ),
    },
    {
      title: "Arts",
      details: (
        <>
          <p>
            <strong>Humanities stream</strong> with subjects like History,
            Sociology, and Political Science.
          </p>
          <ul>
            <li>Develops analytical & critical thinking</li>
            <li>Ideal for civil services & social sciences</li>
            <li>Strong communication & research skills</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <main className="container">
      <h2 className="title">Streams & Course Details</h2>

      <section className="grid-courses">
        {courses.map((course, i) => (
          <article
            key={i}
            className={`course-card ${active === i ? "active" : ""}`}
            onClick={() => toggle(i)}
          >
            <h3>{course.title}</h3>

            {active === i ? (
              <div className="course-details">{course.details}</div>
            ) : (
              <p className="hint">Click to view details</p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}