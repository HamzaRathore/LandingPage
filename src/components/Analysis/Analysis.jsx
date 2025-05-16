import React, {useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Analysis.module.css";
import star from '../../assets/analysis/star.svg'
import spiral from '../../assets/analysis/spiral.svg'
import analysisGradient from '../../assets/analysis/analysisGradient.svg'
import {steps} from '../../constant/Constant'
  
   const Analysis = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
    const [active, setActive] = useState(1);
  
    return (
       <section data-aos="fade-up" data-aos-delay="200" className={styles.container}>
        <img src={analysisGradient} alt="glow" className={styles.glow} />
        <img src={spiral} alt="spiral" className={styles.spiral} />
        <img src={star} alt="star" className={styles.star} />
        <div className={styles.heading}>
          <h2>The 4 step route to better financial <br /> management. Smarter accounting for <br /> faster growth.</h2>
        </div>
        <div className={styles.cardContainer}>
          {steps.map(step => (
            <div
              key={step.id}
              className={`${styles.card} ${active === step.id ? styles.active : ''}`}
              onClick={() => setActive(step.id)}
            >
              <div className={styles.stepNum}>
                {`0${step.id}.`}
                </div>
              <h3>{step.title}</h3>
              {active === step.id && <p>{step.description}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Analysis;
