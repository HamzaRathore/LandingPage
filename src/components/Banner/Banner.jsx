import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Banner.module.css";
import rightArrow from "../../assets/arrow-right-round.png";
import dashboard from "../../assets/Dashboard.svg";
import greenRad from "../../assets/greenRadius.svg";
import blueRad from "../../assets/blueRadius.svg";


const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div  data-aos="fade-up"
    data-aos-delay="200" className={styles.container}>
      <div className={styles.textBoard}>
        <div className={styles.header}>
          <p className={styles.heading}>
            Save more and get <span><br /></span>visibility on your money
          </p>
          <p className={styles.subHeading}>
            Know where your spend is going and manage your finances more
            efficiently and Milestone
          </p>

          <button className={styles.btn}>
            Try it on browser
            <span>
              <img src={rightArrow} alt="Arrow" />
            </span>
          </button>
        </div>
        <div></div>
      </div>

      {/* Dashboard image */}
      <div className={styles.DashboardImages}>
        <img className={styles.dashboard} src={dashboard} alt="dashboard image" />
        <img className={styles.imgRight} src={greenRad} alt="green-radius-right" />
        <img className={styles.imgLeft} src={blueRad} alt="blue-radius-right" />
      </div>
    </div>
  );
};

export default Banner;
