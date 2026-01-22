import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VerifyOtp.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation(); // email comes from Register page

  const handleVerify = async () => {
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email,
        otp
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("🎉 Registration successful!");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-card">
        <h2>Verify OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
}
