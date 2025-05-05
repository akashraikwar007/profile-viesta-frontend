import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (
      !form.username ||
      !form.password ||
      !form.email ||
      !form.firstName ||
      !form.lastName ||
      !form.gender
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:9000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Signup successful! You can now log in.");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError("Network error");
    }
  };

  return (
    <div className="container-fluid main-bg py-5 d-flex justify-content-center align-items-center min-vh-100 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
        <div className="col-md-6 bg-white p-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold">Profile Viesta</h3>
            <p className="text-muted">Create an account</p>
          </div>

          <button className="btn btn-primary w-100 mb-3">
            <i className="fab fa-facebook me-2"></i> Sign up with Facebook
          </button>

          <div className="text-center mb-3 text-muted">— or —</div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <select
                className="form-control"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button className="btn btn-info w-100 text-white" type="submit">
              Get Started
            </button>

            {error && <div className="text-danger mt-2">{error}</div>}
            {success && <div className="text-success mt-2">{success}</div>}
          </form>

          <div className="text-center mt-3">
            Already have an account?{" "}
            <a
              href="/login"
              className=" text-decoration-none"
              style={{ color: "#44C2C9" }}
            >
              Log in
            </a>
          </div>
        </div>

        <div className="col-md-6 position-relative p-0">
          <div
            className="h-100 w-100 d-flex flex-column justify-content-center align-items-center text-white text-center p-5 bg-cover bg-center position-relative"
            style={{
              backgroundImage:
                "url('https://www.careerguide.com/career/wp-content/uploads/2023/01/working-professionals-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "300px",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"
              style={{ zIndex: 1 }}
            ></div>

            <div style={{ zIndex: 2 }}>
              <h2 className="fw-bold mb-3">
                Mastermind Better.
                <br />
                Succeed Together.
              </h2>
              <p className="lead">
                Get meaningful results with essential tools for brainstorming,
                goal setting, and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
