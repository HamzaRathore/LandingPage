import React from "react";
import styles from "./Benefits.module.css";
import upperArrow from "../../assets/upperArrow.svg";
import apple from "../../assets/benefits/apple.svg";
import chrome from "../../assets/benefits/chrome.svg";
import firefox from "../../assets/benefits/firefox.svg";
import linux from "../../assets/benefits/linux.svg";
import microsoft from "../../assets/benefits/microsoft.svg";
import safari from "../../assets/benefits/safari.svg";
import spacer from "../../assets/benefits/spacer.svg";
import tick from "../../assets/benefits/tick.svg";
import blueRad from "../../assets/cust-review/blueRad.svg";
import greenRadius from "../../assets/greenRadius.svg";
import spiral from "../../assets/benefits/spiral.svg";

const leftlogo = [
  {
    id: 1,
    logo: apple,
    name: "maxOS,",
  },
  {
    id: 2,
    logo: microsoft,
    name: "WINDOWS,",
  },
  {
    id: 3,
    logo: linux,
    name: "LINUX",
  },
];
const rightlogo = [
  {
    id: 1,
    logo: chrome,
    name: "CHROME,",
  },
  {
    id: 2,
    logo: safari,
    name: "SAFARI,",
  },
  {
    id: 3,
    logo: firefox,
    name: "&FIREFOX",
  },
];

const Benefits = () => {
  
  return (
    <div className={styles.container}>
      {/* <img className={styles.radiusImg} src={greenRadius} alt="shadow" /> */}
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
              <button className={styles.arrowButton}>
                TRY IT ON BROWSER
                <span className={styles.arrow}>
                  <img src={upperArrow} alt="Upper Arrow" />
                </span>
              </button>
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
