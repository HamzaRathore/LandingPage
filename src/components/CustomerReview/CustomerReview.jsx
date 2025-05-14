import React, { useState } from "react";
import styles from "./CustomerReview.module.css";
import review1 from "../../assets/cust-review/review1.svg";
import review2 from "../../assets/cust-review/review2.svg";
import review3 from "../../assets/cust-review/review3.svg";
import review4 from "../../assets/cust-review/review4.svg";
import star from "../../assets/cust-review/rev-star.svg";
import play from '../../assets/cust-review/play.svg';
import blueRad from '../../assets/cust-review/blueRad.svg';
import placeholder from "../../assets/cust-review/Videoplaceholder.svg";
import greenRadius from "../../assets/greenRadius.svg";

const reviews = [
  {
    id: 1,
    name: "Wade Warren",
    title: "Founder & CEO, Thunder",
    src: review1,
    text: "Milestone helps me keep a clean, organized ledger that I can access anywhere. The UI is so intuitive that anyone can use it, without any knowledge on the system. I also love the financial reports!",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8"
  },
  {
    id: 2,
    name: "Annette Black",
    title: "CTO, Poppers",
    src: review2,
    text: "We switched to Milestone and immediately saw productivity improvements across our finance team.Milestone makes managing finances incredibly easy.",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8"
  },
  {
    id: 3,
    name: "Cody Fisher",
    title: "CFO, MAYABI",
    src: review3,
    text: "Milestone makes managing finances incredibly easy. Highly recommended!",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8"
  },
  {
    id: 4,
    name: "Leslie Alexander",
    title: "Founder, Pritom",
    src: review4,
    text: "We love the automation features and clean UI. It changed the way we handle expenses.Milestone makes managing finances incredibly easy.",
    videoUrl: "https://www.youtube.com/embed/nm09cQSskn8"
  },
];

const CustomerReview = () => {
  const [activeReview, setActiveReview] = useState(reviews[0]);
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    
      <div className={styles.container}>
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
                      <img src={play} alt="video-play"/>
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
                    className={`${styles.logo} ${review.id === activeReview.id ? styles.active : ""}`}
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