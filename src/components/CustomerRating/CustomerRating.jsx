import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CustomerRating.module.css";
import { rating } from "../../constant/Constant";

const CustomerRating = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      className={styles.container}
    >
      <div className={styles.subcontainer}>
        <div className={styles.textContainer}>
          <h2>
            Customers have consistently <br /> rated milestone 4.9/5
          </h2>
        </div>
        <div className={styles.reviewWrapper}>
          {rating.map((ratings) => (
            <div key={ratings.id} className={styles.reviewItem}>
              <img className={styles.stars} src={ratings.rating}></img>
              <p className={styles.quote}>"{ratings.text}"</p>
              <div className={styles.logoWrapper}>
                <img
                  src={ratings.src}
                  alt={ratings.alt}
                  className={styles.logo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerRating;
