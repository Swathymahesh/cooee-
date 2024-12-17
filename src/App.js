import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"; // Import the reusable Navbar
import Home from "./pages/frontend/home";
import VerifyArmstrong from "./pages/frontend/armstrong";
import UserNumbers from "./pages/frontend/dashbord";
import Dashboard from "./pages/frontend/userdashboard";

function App() {
  return (
    <Router>
      {/* Common Navbar Component */}
      <Navbar />

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/verify-armstrong" element={<VerifyArmstrong />} /> {/* Verify Armstrong Page */}
        <Route path="/user-numbers" element={<UserNumbers />} /> {/* User Numbers Page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
      </Routes>
    </Router>
  );
}

export default App;
