import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CustomerReview.module.css";
import star from "../../assets/cust-review/rev-star.svg";
import play from "../../assets/cust-review/play.svg";
import blueRad from "../../assets/cust-review/blueRad.svg";
import placeholder from "../../assets/cust-review/Videoplaceholder.svg";
import greenRadius from "../../assets/greenRadius.svg";
import { reviews } from "../../constant/Constant";

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeReview, setActiveReview] = useState(reviews[0]);
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
      <img className={styles.radiusImg} src={greenRadius} alt="shadow" />
      <img className={styles.blueradius} src={blueRad} alt="shadow" />
      <div className={styles.subContainer}>
        <div className={styles.insider}>
          <div className={styles.header}>
            <h2>Our customers</h2>
          </div>

          {/* description */}
          <div className={styles.desc}>
            <div className={styles.rate}>
              <div className={styles.inner}>
                <img src={star} alt="rating" />
                <p>{activeReview.text}</p>
                <div className={styles.info}>
                  <h2>{activeReview.name}</h2>
                  <p>{activeReview.title}</p>
                </div>
              </div>
            </div>

            <div className={styles.video} onClick={toggleVideo}>
              {showVideo ? (
                <iframe
                  src={activeReview.videoUrl}
                  title="Customer Review Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoPlayer}
                ></iframe>
              ) : (
                <>
                  <img src={placeholder} alt="placeholder" />
                  <div className={styles.videoIcon}>
                    <img src={play} alt="video-play" />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={styles.logos}>
            {reviews.map((review) => (
              <a
                key={review.id}
                onClick={() => {
                  setActiveReview(review);
                  setShowVideo(false);
                }}
                className={styles.logoLink}
              >
                <img
                  src={review.src}
                  alt={review.name}
                  className={`${styles.logo} ${
                    review.id === activeReview.id ? styles.active : ""
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
