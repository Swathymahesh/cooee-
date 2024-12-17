import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/user-numbers" style={styles.link}>User Details</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/verify-armstrong" style={styles.link}>Verify</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "static",  // Keeps navbar static at the top
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#222",  // Dark background for a modern look
    padding: "10px 0",  // Vertical padding
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Adds slight shadow for elevation
    zIndex: 1000, // Ensures it stays above other content
  },
  navList: {
    display: "flex",
    justifyContent: "center",  // Center the navigation items
    alignItems: "center",
    gap: "30px",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "inline",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease, transform 0.3s ease", // Smooth transitions
  },
  linkHover: {
    color: "#f0a500", // Modern yellowish-orange accent on hover
    transform: "scale(1.1)", // Slight zoom effect
  },
};

// Adding inline hover styles
const HoverLink = ({ children, to }) => (
  <Link
    to={to}
    style={styles.link}
    onMouseEnter={(e) => {
      e.target.style.color = styles.linkHover.color;
      e.target.style.transform = styles.linkHover.transform;
    }}
    onMouseLeave={(e) => {
      e.target.style.color = styles.link.color;
      e.target.style.transform = "none";
    }}
  >
    {children}
  </Link>
);

export default Navbar;
