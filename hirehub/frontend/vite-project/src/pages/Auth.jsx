import { useState } from "react";
import api from "../api/axios";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await api.post("/auth/login", form);
      } else {
        await api.post("/auth/signup", form);
      }
      alert("Authentication successful");
    } catch (err) {
      alert("Error occurred");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h1>HireHub</h1>
          <p>
            A modern hiring platform where recruiters and job seekers connect.
          </p>
          <ul>
            <li>✔ Apply to jobs easily</li>
            <li>✔ Track applications</li>
            <li>✔ Recruiter dashboard</li>
          </ul>
        </div>

        <div className="auth-right">
          <div className="user-icon">👤</div>
          <h2>{isLogin ? "Sign in to your account" : "Create your account"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="switch">
            {isLogin ? "New to HireHub?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Create account" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}