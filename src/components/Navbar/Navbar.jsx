import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import rightArrow from "../../assets/arrow-right-round.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Integration",
      href: "/integration",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.container}>
      
      <div className={styles.logo} >
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div
        className={`${styles["nav-links"]} ${isMenuOpen ? styles.open : ""}`}
      >
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons Section */}
      <div className={styles["nav-btn"]}>
        <div className={styles["cart-logo"]}>
          <img src={cart} alt="Cart" />
          <p>
            Cart <span className={styles["cart-no"]}>0</span>
          </p>
        </div>

        <div>
          <Link to="/login">Log In</Link>
        </div>

        <button className={styles["SignUp-btn"]}>
          Sign Up
          <span>
            <img src={rightArrow} alt="Arrow" />
          </span>
        </button>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <FaBars className="bars-icon" />
      </div>
    </div>
  );
};

export default Navbar;
