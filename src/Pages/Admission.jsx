import { useState, useRef } from "react";
import "../styles/style2.css";

export default function Admission() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    stream: "",
    message: "",
  });

  const [files, setFiles] = useState([]);
  const [success, setSuccess] = useState("");
  const successRef = useRef(null);

  // handle text input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle file selection
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  // submit form + files
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert("Please upload at least one marksheet");
      return;
    }

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("stream", form.stream);
    formData.append("message", form.message);

    for (let i = 0; i < files.length; i++) {
      formData.append("marksheets", files[i]);
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/students/upload-marksheets",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        // 🔔 POPUP MESSAGE (CLEAR CONFIRMATION)
        alert("✅ You have successfully submitted the admission form!");

        // ✅ SUCCESS MESSAGE ON PAGE
        setSuccess(
          "You have successfully submitted the admission form. We will contact you soon."
        );

        setForm({
          name: "",
          email: "",
          phone: "",
          stream: "",
          message: "",
        });

        setFiles([]);

        // ⬇️ scroll to success message
        setTimeout(() => {
          successRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        setSuccess(data.error || "Failed to submit the form");
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

        <a href="#apply" className="btn download">
          Apply Now
        </a>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section id="apply" className="form-section">
        <h3>Quick Enquiry / Pre-Registration</h3>

        {success && (
          <p
            ref={successRef}
            style={{
              color: "green",
              textAlign: "center",
              fontWeight: "bold",
              padding: "10px",
              border: "1px solid green",
              background: "#eaffea",
              borderRadius: "6px",
              marginBottom: "15px",
            }}
          >
            ✅ {success}
          </p>
        )}

        <form className="form-card" onSubmit={handleSubmit}>
          <label>
            Student Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
          </label>

          <label>
            Preferred Stream
            <select
              name="stream"
              value={form.stream}
              onChange={handleChange}
              required
            >
              <option value="">--Choose--</option>
              <option>PCMB</option>
              <option>PCMC</option>
              <option>Commerce</option>
              <option>Arts</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <label>
            Upload Semester Marks Cards (1–8 files)
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </label>

          <p className="small-note">
            Accepted formats: PDF, JPG, PNG | Max size: 2MB per file
          </p>

          <div className="form-actions">
            <button type="submit" className="btn">
              Submit Enquiry
            </button>
            <button type="reset" className="btn ghost">
              Reset
            </button>
          </div>

          <p className="small-note" style={{ textAlign: "center" }}>
            We will contact you within 24 working hours.
          </p>
        </form>
      </section>
    </main>
  );
}
