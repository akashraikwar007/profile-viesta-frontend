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
      navigate('/');
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
    <div className="container login-container  ">
      <div className="row ">
      <div className="col-md-4 mb-3 text-center ">
      <img
            src="https://www.freevector.com/uploads/vector/preview/59379/vecteezyCharacter_Focused_Illustration_-_librarianAS1021_generated.jpg"
            alt="Signup"
            className="img-fluid rounded"
          />
      </div>

      
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="card-title text-center mb-4">Login</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-group">
              <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                <input 
                  className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                  name="username" 
                  placeholder="Username" 
                  value={form.username} 
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {formErrors.username && (
                  <div className="invalid-feedback">{formErrors.username}</div>
                )}
              </div>

              <div className="mb-3 input-group">
              <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                <input 
                  className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                  name="password" 
                  type="password" 
                  placeholder="Password" 
                  value={form.password} 
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {formErrors.password && (
                  <div className="invalid-feedback">{formErrors.password}</div>
                )}
              </div>
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-login" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <p className="mb-0">
                Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
