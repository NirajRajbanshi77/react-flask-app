import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import About from './components/AboutUs';
import Analysis from './components/Analyze';
import Guide from './components/Cricknowledge';
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleSetToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (

    <Router>
      <Routes>
        {/* Default route (Register page) */}
        <Route path="/" element={<Navigate to="/register" />} />
        
        {/* Register page */}
        <Route path="/register" element={<Register />} />
        
        {/* Login page */}
        <Route path="/login" element={<Login setToken={handleSetToken} />} />
        
        {/* Landing page (protected route) */}
        <Route
          path="/landing"
          element={token ? <Landing /> : <Navigate to="/" />}
        />
         <Route
          path="/landing"
          element={token ? <Landing /> : <Navigate to="/landing" />}
        />
        {/* <Route path="/Analysis" element={<Analysis />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Guide" element={<Guide />} />
      </Routes>
    </Router>
  );
};

export default App;
