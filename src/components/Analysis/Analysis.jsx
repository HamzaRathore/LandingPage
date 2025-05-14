import React, {useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Analysis.module.css";
import star from '../../assets/analysis/star.svg'
import spiral from '../../assets/analysis/spiral.svg'
import analysisGradient from '../../assets/analysis/analysisGradient.svg'
import greenRadius from "../../assets/greenRadius.svg";

const steps = [
    {
      id: 1,
      title: 'Analyze',
      description: 'Scan invoices, automate data-entry and route approvals, effortlessly, automatically.',
    },
    {
      id: 2,
      title: 'Tracking Expenses',
      description: "Gather information about your business, it's structure, goal and policies",
    },
    {
      id: 3,
      title: 'Send payments',
      description: 'Make global payments and get paid in any currency in 24h.',
    },
    {
      id: 4,
      title: 'Analyse cashflow',
      description: 'Get real-time insights and forecasts on your finances.',
    },
  ];
  
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
        {/* <img src={greenRadius} alt="greenradius" className={styles.greenglow} /> */}
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
