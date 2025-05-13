import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Banner.module.css";
import rightArrow from "../../assets/arrow-right-round.png";
import banner from "../../assets/banner.svg";
import group from '../../assets/group.svg'



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
      <img className={styles.spiral} src={group} alt="group-img" />
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
            <p>Try it on browser</p>
            <span>
              <img src={rightArrow} alt="Arrow" />
            </span>
          </button>
        </div>
        <div></div>
      </div>

      {/* Dashboard image */}
      <div className={styles.DashboardImages}>
        <img className={styles.dashboard} src={banner} alt="dashboard image" />
        </div>
    </div>
  );
};

export default Banner;
