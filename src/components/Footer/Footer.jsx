import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/footer/facebook.svg";
import twitter from "../../assets/footer/twitter.svg";
import instagram from "../../assets/footer/instagram.svg";
import linkedln from "../../assets/footer/linkedln.svg";
import right from "../../assets/footer/right.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.section1}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <p>
              Faster payments, Expense reports done right. Budgeting made easy.
            </p>
          </div>
          <div className={styles.socialIcons}>
            <h3>SOCIAL MEDIA</h3>
            <div className={styles.icons}>
              <div className={styles.iconImg}>
                <img src={facebook} alt="facebook" />
              </div>
              <div className={styles.iconImg}>
                <img src={twitter} alt="twitter" />
              </div>
              <div className={styles.iconImg}>
                <img src={linkedln} alt="linkedln" />
              </div>
              <div className={styles.iconImg}>
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.navs}>
            <h2>PAGES</h2>
            <Link to="/">
              <p>Home page</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/pricing">
              <p>Pricing</p>
            </Link>
            <Link to="/features">
              <p>Features</p>
            </Link>
            <Link to="/integration">
              <p>Integration</p>
            </Link>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.navs}>
            <h2>UTILITY PAGES</h2>
            <Link to="/utility">
              <p>Style Right</p>
            </Link>
            <Link to="/login">
              <p>Log In</p>
            </Link>
            <Link to="/register">
              <p>Register</p>
            </Link>
            <Link to="/not-found">
              <p>404 Not Found</p>
            </Link>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.newsletter}>
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p>*Only valuable resource no bullshit</p>
            <div className={styles.emailInput}>
              <input type="email" placeholder="Enter your e-mail" required />
              <div className={styles.btn}>
                <button>
                  <img src={right} alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© All rights reserved by ClarityU.</p>
      </div>
    </div>
  );
};

export default Footer;
