export default function Header() {
  return (
    <>
      {/* 🔹 TOP INFO BAR */}
      <div className="top-info-bar">
        <div className="top-info-inner">

          {/* LEFT SIDE */}
          <div className="left-info">
            <span className="follow-text">Follow Us:</span>

            <a href="https://www.facebook.com/infomaticsnpuc/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/infomaticsnpuc/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>

            <a href="https://wa.me/919008994808" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-info">
            <span>📍 Rajanukunte, Yelahanka, Bengaluru</span>
            <span>✉️ director@infomaticsnpuc.in</span>
            <span>📞 900 899 4808</span>

            {/* ✅ LOGIN BUTTON */}
            <a href="/login" className="top-login-btn">
              Login
            </a>
          </div>

        </div>
      </div>

      {/* 🔹 MAIN HEADER */}
      <header className="topbar">
        <div className="header-inner">
          <img src="/images.png" alt="College Logo" className="logo" />

          <div className="header-text">
            <h1>INFOMATICS NATIONAL PU COLLEGE</h1>
            <p className="tagline">
              Powered by Intellects • Driven by Knowledge
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
