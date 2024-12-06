import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      setToken(response.data.token);
      setMessage("Login successful!");
      navigate("/landing"); // Redirect to Landing page
    } catch (error) {
      setMessage("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Login</h3>
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
        <button type="submit" className="btn btn-success">Login</button>
        {message && <p className="text-danger mt-3">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
