import React, { useState } from "react";
import "./verifyArmstrong.css"; 
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const VerifyArmstrong = () => {
  const [userId, setUserId] = useState("");
  const [number, setNumber] = useState("");
  const [response, setResponse] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        user_id: Number(userId),
        number: Number(number),
      };

      const result = await axios.post("http://localhost:8080/verify", requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update state to indicate success and show success message
      setResponse(result.data.message || "Successfully verified Armstrong number!");
      setSuccess(true);
    } catch (error) {
      setResponse(error.response?.data || "An error occurred during verification");
      setSuccess(false);
    }
  };

  return (
    <>
      {/* <nav className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/user-numbers">User Details</Link></li>
          <li><Link to="/verify-armstrong">Verify</Link></li>
        </ul>
      </nav> */}
      
      <div className="verify-container">
        <div className="verify-card">
          <h1>Verify Armstrong Number</h1>
          <p>Enter your User ID and the number to check if it is an Armstrong number.</p>
          <form onSubmit={handleSubmit} className="verify-form">
            <div className="form-group">
              <label htmlFor="userId">User ID:</label>
              <input
                type="text"
                id="userId"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Number:</label>
              <input
                type="number"
                id="number"
                placeholder="Enter a number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <button type="submit" className="verify-btn">
              VERIFY
            </button>
          </form>
          
          {response && <div className="response-message">{response}</div>}
        </div>
      </div>
    </>
  );
};

export default VerifyArmstrong;
