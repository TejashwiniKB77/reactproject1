import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  /* ===== SEND OTP ===== */
  const sendOtp = async () => {
    setError("");
    setMsg("");

    const res = await fetch(
      "http://localhost:5000/api/auth/forgot-password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    setMsg("OTP sent to email");
    setStep(2);
  };

  /* ===== RESET PASSWORD (VERIFY OTP + UPDATE) ===== */
  const resetPassword = async () => {
    setError("");
    setMsg("");

    const res = await fetch(
      "http://localhost:5000/api/auth/reset-password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    setMsg("Password updated successfully!");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="fp-container">
      <div className="fp-card">
        <h2>Forgot Password</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={sendOtp}>Send Reset OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button onClick={resetPassword}>Update Password</button>
          </>
        )}

        {msg && <p className="success">{msg}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
