import "../styles/style4.css";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const message = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    // basic frontend validation
    if (!message.name || !message.email || !message.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Message sent successfully");
        form.reset();
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Frontend error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <main className="container">
      <section className="contact-grid">
        {/* CONTACT INFO */}
        <div className="contact-card">
          <h3>Contact Information</h3>

          <p><strong>Address:</strong> Yelahanka, Bengaluru</p>
          <p><strong>Phone:</strong> +91 80000 00000</p>
          <p><strong>Email:</strong> info@infomatics.edu.in</p>

          {/* LOCATION MAP */}
          <div className="map-box">
            <iframe
              title="College Location"
              src="https://www.google.com/maps?q=Yelahanka,Bengaluru&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-card">
          <h3>Send Us a Message</h3>

          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              Message
              <textarea name="message" required />
            </label>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
