import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  // Do not render Navbar if on the Home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <HoverLink to="/" style={styles.link}>
            Home
          </HoverLink>
        </li>
        <li style={styles.navItem}>
          <HoverLink to="/verify-armstrong" style={styles.link}>
            Verify
          </HoverLink>
        </li>
        <li style={styles.navItem}>
          <HoverLink to="/user-numbers" style={styles.link}>
            User Details
          </HoverLink>
        </li>
        <li style={styles.navItem}>
          <HoverLink to="/dashboard" style={styles.link}>
            Dashboard
          </HoverLink>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px 0",
    zIndex: 1000,
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  linkHover: {
    color: "rgb(175, 66, 97)",
    transform: "scale(1.1)",
  },
};

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
