import "../styles/style4.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const message = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    localStorage.setItem("contactMessage", JSON.stringify(message));
    alert("Message sent successfully");
    form.reset();
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

          {/* 📍 LOCATION MAP */}
          <div className="map-box">
            <iframe
              title="College Location"
              src="https://www.google.com/maps?q=Yelahanka,Bengaluru&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
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
              <input name="email" required />
            </label>

            <label>
              Message
              <textarea name="message" required />
            </label>

            <button className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}