import { useState } from "react";
import "../styles/style2.css";

export default function Admission() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    stream: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess("Enquiry submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          stream: "",
          message: "",
        });
      } else {
        setSuccess("Failed to submit enquiry");
      }
    } catch (error) {
      setSuccess("Server error. Please try again later.");
    }
  };

  return (
    <main className="container">
      {/* ================= ADMISSION PROCESS ================= */}
      <section className="admission-intro">
        <h2>Admission Process 2025–26</h2>
        <ol>
          <li>Check eligibility — minimum marks as per stream.</li>
          <li>Download & fill application form.</li>
          <li>Submit documents: SSLC marksheet, TC, Aadhaar, Photo.</li>
          <li>Attend counselling & seat allocation.</li>
        </ol>

        <a href="#apply" className="btn download">Apply Now</a>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="image-gallery">
        <h3>Campus Life & Facilities</h3>

        <div className="image-grid">
          <div className="img-card circle"><img src="/ad1.jpeg" alt="Campus" /></div>
          <div className="img-card rounded"><img src="/ad2.webp" alt="Library" /></div>
          <div className="img-card diamond"><img src="/ad4.jpeg" alt="Sports" /></div>
          <div className="img-card soft"><img src="/ad5.jpeg" alt="Lab" /></div>
          <div className="img-card tilt"><img src="/clg.png" alt="Classroom" /></div>
          <div className="img-card tilt"><img src="/fig6.webp" alt="Event" /></div>
          <div className="img-card tilt"><img src="/fig7.avif" alt="Students" /></div>
          <div className="img-card tilt"><img src="/fig9.jpeg" alt="Campus View" /></div>
        </div>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section id="apply" className="form-section">
        <h3>Quick Enquiry / Pre-Registration</h3>

        {success && (
          <p style={{ color: "green", textAlign: "center" }}>{success}</p>
        )}

        <form className="form-card" onSubmit={handleSubmit}>
          <label>
            Student Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} pattern="[0-9]{10}" required />
          </label>

          <label>
            Preferred Stream
            <select name="stream" value={form.stream} onChange={handleChange} required>
              <option value="">--Choose--</option>
              <option>PCMB</option>
              <option>PCMC</option>
              <option>Commerce</option>
              <option>Arts</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows="3" value={form.message} onChange={handleChange} />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn">Submit Enquiry</button>
            <button type="reset" className="btn ghost">Reset</button>
          </div>

          <p className="small-note" style={{ textAlign: "center" }}>
            We will contact you within 24 working hours.<br />
            For urgent queries call: <strong>+91 80000 00000</strong>
          </p>
        </form>
      </section>
    </main>
  );
}
