import React, { useEffect } from "react";
import styles from "./Benefits.module.css";
import upperArrow from "../../assets/upperArrow.svg";
import spacer from "../../assets/benefits/spacer.svg";
import tick from "../../assets/benefits/tick.svg";
import blueRad from "../../assets/cust-review/blueRad.svg";
import spiral from "../../assets/benefits/spiral.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { leftlogo, rightlogo } from "../../constant/Constant";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
      <img className={styles.blueradius} src={blueRad} alt="shadow" />
      <img className={styles.spiral} src={spiral} alt="spiral" />
      <div className={styles.subcontainer}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <h2>
              Get early access to milestone. <br /> close your books faster and
              grow.
            </h2>
          </div>

          <div className={styles.btnSection}>
            <div>
              <Link
                className={styles.btnLink}
                to={
                  "https://milestone-webflow-html-website-template.webflow.io/"
                }
              >
                <button className={styles.arrowButton}>
                  TRY IT ON BROWSER
                  <span className={styles.arrow}>
                    <img src={upperArrow} alt="Upper Arrow" />
                  </span>
                </button>
              </Link>
            </div>

            <div className={styles.logos}>
              {leftlogo.map((lftlogo) => (
                <div id={lftlogo.id} className={styles.leftlogos}>
                  <img src={lftlogo.logo} alt="logo" />
                  <p>{lftlogo.name}</p>
                </div>
              ))}
              <div className={styles.breaker}>
                <img src={spacer} alt="spacer" />
              </div>
              {rightlogo.map((rgtlogo) => (
                <div id={rgtlogo.id} className={styles.leftlogos}>
                  <img src={rgtlogo.logo} alt="logo" />
                  <p>{rgtlogo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.animatedSection}>
          <div className={styles.sliderTrack}>
            <div className={styles.slider}>
              <img src={tick} alt="tick" />
              <p>Fraud protection, zero liability.</p>
            </div>
            <div className={styles.slider}>
              <img src={tick} alt="tick" />
              <p>No personal gurantee.</p>
            </div>
            <div className={styles.slider}>
              <img src={tick} alt="tick" />
              <p>Card for you whole team.</p>
            </div>

            {/* Duplicate */}
            <div className={styles.slider}>
              <img src={tick} alt="tick" />
              <p>Fraud protection, zero liability.</p>
            </div>
            <div className={styles.slider}>
              <img src={tick} alt="tick" />
              <p>No personal gurantee.</p>
            </div>
            <div className={styles.slider}>
              <img src={tick} alt="tick" />
              <p>Card for you whole team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
