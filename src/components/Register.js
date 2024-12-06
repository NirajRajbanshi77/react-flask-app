import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      setMessage(response.data.message);
      if (response.data.message === "User registered successfully!") {
        navigate("/login"); // Redirect to Login page
      }
    } catch (error) {
      setMessage("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        {message && <p className="text-danger mt-3">{message}</p>}
      </form>
       {/* Add a link to the Login page */}
       <p className="mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
