import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CustomerRating.module.css";
import capterra from "../../assets/review/capterra.svg";
import trustpilot from "../../assets/review/trustpilot.svg";
import g from "../../assets/review/g.svg";
import stars from "../../assets/review/stars.svg";

const reviews = [
  {
    id: 1,
    rating: stars,
    text: "the interface is excellent",
    src: capterra,
    alt: "Capterra Logo",
  },
  {
    id: 2,
    rating: stars,
    text: "Improvements in every release",
    src: trustpilot,
    alt: "Trustpilot Logo",
  },
  {
    id: 3,
    rating: stars,
    text: "It is my main workhorse now",
    src: g,
    alt: "G2 Logo",
  },
];

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
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <img className={styles.stars} src={review.rating}></img>
            <p className={styles.quote}>"{review.text}"</p>
            <img src={review.src} alt={review.alt} className={styles.logo} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CustomerRating;
