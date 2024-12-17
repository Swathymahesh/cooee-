import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const getUserArmstrongNumbers = async (userId) => {
  const response = await axios.get(`http://localhost:8080/user/${userId}/numbers`);
  return response.data;
};

const UserNumbers = () => {
  const [userId, setUserId] = useState("");
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async () => {
    try {
      const result = await getUserArmstrongNumbers(userId);
      setNumbers(result);
    } catch (error) {
      alert("Failed to fetch numbers. Please try again.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "60px",
    },
    heading: {
      fontSize: "1.8rem",
      color: "#af4261",
      marginBottom: "10px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "20px 50px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "400px",
      textAlign: "center",
    },
    inputField: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1em",
    },
    button: {
      margin: "10px",
      padding: "15px 150px",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "0.5s",
      backgroundImage: "linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%)",
      backgroundSize: "200% auto",
      color: "white",
      boxShadow: "0 0 20px #eee",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      display: "block",
      fontSize: "1em",
    },
    buttonHover: {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    list: {
      marginTop: "20px",
      textAlign: "left",
    },
    listItem: {
      backgroundColor: "#f8f9fa",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "5px",
      fontSize: "1em",
      color: "#af4261",
    },
    listItemEven: {
      backgroundColor: "#e9ecef",
    },
  };

  return (
    <>
      {/* Navigation Bar
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/user-numbers">User Details</Link></li>
           <li><Link to="/verify-armstrong">Verify</Link></li>
        </ul>
      </nav> */}

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>User's Armstrong Numbers</h1>
          <p>Enter a user ID to fetch the Armstrong numbers associated with them.</p>
          <div>
            <input
              type="text"
              style={styles.inputField}
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.backgroundPosition = styles.buttonHover.backgroundPosition)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundPosition = "left center")
              }
              onClick={fetchNumbers}
            >
              Fetch Numbers
            </button>
          </div>
          <div style={styles.list}>
            <h2>Results:</h2>
            <ul>
              {numbers.length > 0 ? (
                numbers.map((num, index) => (
                  <li
                    key={num.ID}
                    style={{
                      ...styles.listItem,
                      ...(index % 2 === 0 ? styles.listItemEven : {}),
                    }}
                  >
                    {num.Number || "No number available"}
                  </li>
                ))
              ) : (
                <li style={styles.listItem}>
                  No Armstrong numbers found for this user.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNumbers;
