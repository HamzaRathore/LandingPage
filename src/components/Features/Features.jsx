import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Features.module.css";
import logo from "../../assets/logo.png";
import tick from "../../assets/features/tick.svg";
import cross from "../../assets/features/cross.svg";
import spark from "../../assets/features/spark.svg";
import lines from "../../assets/features/lines.svg";
import vs from "../../assets/features/vs.svg";
import greenRadius from "../../assets/greenRadius.svg";

const pros = [
  {
    id: 1,
    src: tick,
    des: "No hidden fees. No surprises",
  },
  { 
    id: 2, 
    src: tick, 
    des: "Manage taxes, automatically" 
},
  { 
    id: 3, 
    src: tick, 
    des: "Supports 190+ countries" 
},
  { 
    id: 4, 
    src: tick, 
    des: "Provides 24/7 live support" 
},
  { 
    id: 5, 
    src: tick, 
    des: "Integrates seamlessly with Stripe" 
},
  { 
    id: 6, 
    src: tick, 
    des: "Works with the real exchange rate" 
},
];

const cons = [
  { 
    id: 1, 
    src: cross, 
    des: "Complicated fee structure" 
},
  { 
    id: 2, 
    src: cross, 
    des: "Need a lot of manual tax management" 
},
  { 
    id: 3, 
    src: cross, 
    des: "Support 50-100 countries" 
},
  { id: 4, 
    src: cross, 
    des: "Have poor support and weekends off" 
},
  { 
    id: 5, 
    src: cross, 
    des: "Have spotty integrations" 
},
  { 
    id: 6, 
    src: cross, 
    des: "Use unfair, higher exchange rates" 
},
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.heading}>
          <h1>Why clarityU</h1>
          <div className={styles.para}>
            <p>
              Most finance and accounting platforms work against you, than for
              you. Shift to the finance software that actually <br /> does what
              it claims.
            </p>
          </div>
        </div>

        <div className={styles.featureContainer}>
          <img
            className={styles.greenImg}
            src={greenRadius}
            alt="green background"
          />
          <img className={styles.spark} src={spark} alt="spark" />

          {/* Left Section */}
          <div className={styles.leftSec}>
            <div className={styles.header}>
              <img src={logo} alt="logo" />
            </div>

            {/* Left section */}
            <div className={styles.featuresBox}>
              <h2>FEATURES INCLUDED:</h2>
              {pros.map((pro) => (
                <div key={pro.id} className={styles.feature}>
                  <img src={pro.src} alt="tick" />
                  <p>{pro.des}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VS circle */}
          <div className={styles.vs}>
            <img src={vs} alt="vs" />
          </div>

          {/* Right section */}
          <div className={styles.leftSec}>
            <div className={styles.header}>
              <h2>Other Softwares</h2>
            </div>
            <div className={styles.featuresBox}>
              <h2>FEATURES NOT INCLUDED:</h2>
              {cons.map((con) => (
                <div key={con.id} className={styles.feature}>
                  <img src={con.src} alt="cross" />
                  <p>{con.des}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.lines}>
            <img className={styles.lineImg} src={lines} alt="lines" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
