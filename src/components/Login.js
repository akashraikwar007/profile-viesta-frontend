import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const { login: authLogin, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    const errors = {};
    if (!form.username.trim()) {
      errors.username = "Username is required";
    }
    if (!form.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const data = await login(form);
      authLogin(data.token);
      navigate("/");
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid login-wrapper d-flex justify-content-center align-items-center min-vh-100">
  <div className="login-card row w-100 rounded-4 shadow-lg overflow-hidden mt-5 mb-5 mx-2 mx-md-auto" style={{ maxWidth: "900px" }}>
    
    {/* Left Side: Image + Text */}
    <div
      className="col-12 col-md-6 login-left text-white d-flex flex-column justify-content-center align-items-start p-4 p-md-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.harringtonhousing.com/uploads/0003/3066/2023/03/28/the-benefits-of-working-remotely-for-young-professionals.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    >
      <h2 className="fw-bold">WELCOME</h2>
      <h5 className="mb-3">You are the way to success.</h5>
      <p>
        Stay focused, work hard, and never stop believing in your potential—
        every great journey begins with a single step.
      </p>
    </div>

    {/* Right Side: Form */}
    <div className="col-12 col-md-6 login-right bg-white p-4 p-md-5">
      <h3 className="fw-bold mb-4">Sign in</h3>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              className={`form-control ${
                formErrors.username ? "is-invalid" : ""
              }`}
              name="username"
              placeholder="User Name"
              value={form.username}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          {formErrors.username && (
            <div className="invalid-feedback d-block">
              {formErrors.username}
            </div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              className={`form-control ${
                formErrors.password ? "is-invalid" : ""
              }`}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          {formErrors.password && (
            <div className="invalid-feedback d-block">
              {formErrors.password}
            </div>
          )}
        </div>

        {/* Remember Me & Forgot */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="#" className="text-decoration-none" style={{color:"#44C2C9"}}>
            Forgot Password?
          </a>
        </div>

        {/* Sign in Button */}
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-primary-login"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <div className="text-center mb-3"><span>or</span></div>

        <div className="d-grid mb-3">
          <button type="button" className="btn btn-outline-secondary">
            Sign in with other
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="mb-0">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link text-decoration-none" style={{color:"#44C2C9"}}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
