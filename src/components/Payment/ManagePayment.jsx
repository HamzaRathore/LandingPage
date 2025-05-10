import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ManagePayment.module.css";
import expense from "../../assets/payment/expense.svg";
import payroll from "../../assets/payment/payroll.svg";
import streamline from "../../assets/payment/streamline.svg";
import user from "../../assets/payment/user.svg";
import upperArrow from "../../assets/upperArrow.svg";
import splash from "../../assets/splash.svg";


const features = [
  {
    title: "Easy Invoicing",
    description:"Automate recurring invoices and save time by using pre-built templates. Get paid on time.",
    src: user,
    class: "div3",
  },
  {
    title: "Manage expenses",
    description: "Snap and categorize receipts in seconds and link your bank account.",
    src: expense,
    class: "div1",
  },
  {
    title: "Streamline payroll",
    description: "Set up payroll and bonuses for all your employees, and never be late on salaries.",
    src: streamline,
    class: "div2",
  },
  {
    title: "Complete Visibility",
    description:"Get real-time visibility into every expense and payment, with a neat dashboard.",
    src: payroll,
    class: "div4",
  },
];

const ManagePayment = () => {
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
      <div className={styles.wrapper}>
        <img className={styles.headImg} src={splash} alt="" />
        <div className={styles.gridLayout}>
          {/* grid1 */}
          <div className={`${styles.headBox} ${styles.grid1}`}>
            <h2>
              Accounting software that
              <span>
                <br />
              </span>
              handles it all.
            </h2>
            <button className={styles.ctaButton}>
              SEE ALL FEATURES
              <span className={styles.arrow}>
                <img src={upperArrow} alt="Upper Arrow" />
              </span>
            </button>
          </div>

          {/*  feature cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[feature.class]}`}
            >
              <img
                src={feature.src}
                alt={feature.title}
                className={styles.icon}
              />
              <h3 className={styles.title}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagePayment;
