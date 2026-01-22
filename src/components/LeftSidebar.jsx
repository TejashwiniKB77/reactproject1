import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // later connect backend here
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="auth-page">
      <h2>Student Login</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
