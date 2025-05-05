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
    <div className="container mt-4 border-all"> 
      <h2 className="text-center mb-4 sinup">Registration</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3 text-center glow-bg">
          <img
            src="https://img.freepik.com/premium-vector/vector-about-file-sharing-data-transfer-concept-with-people-sending-files-business_675567-3053.jpg"
            alt="Signup"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <div className="mt-5 border">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      value={form.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user-tag"></i>
                    </span>
                    <input
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user-tag"></i>
                    </span>
                    <input
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-venus-mars"></i>
                    </span>
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
                </div>
              </div>

              <div className="d-grid akak">
                <button className="btn btn-signup text-white" type="submit">
                  Signup
                </button>
              </div>

              {error && <div className="text-danger mt-2">{error}</div>}
              {success && <div className="text-success mt-2">{success}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
