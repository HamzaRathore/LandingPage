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
import { Link } from "react-router-dom";

const features = [
  {
    title: "Easy Invoicing",
    description:
      "Automate recurring invoices and save time by using pre-built templates. Get paid on time.",
    src: user,
    class: "div3",
  },
  {
    title: "Manage expenses",
    description:
      "Snap and categorize receipts in seconds and link your bank account.",
    src: expense,
    class: "div1",
  },
  {
    title: "Streamline payroll",
    description:
      "Set up payroll and bonuses for all your employees, and never be late on salaries.",
    src: streamline,
    class: "div2",
  },
  {
    title: "Complete Visibility",
    description:
      "Get real-time visibility into every expense and payment, with a neat dashboard.",
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
    <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
      <div className={styles.subcontainer}>
        <img className={styles.headImg} src={splash} />
        <div className={styles.gridLayout}>
          {/* box1 */}
          <div className={styles.headBox}>
            <h2>
              Accounting software that
              <span>
                <br />
              </span>
              handles it all.
            </h2>
            <Link
              className={styles.btnLink}
              to={"https://milestone-webflow-html-website-template.webflow.io/"}
            >
              <button className={styles.txtButton}>
                SEE ALL FEATURES
                <span className={styles.arrow}>
                  <img src={upperArrow} alt="Upper Arrow" />
                </span>
              </button>
            </Link>
          </div>

          {/* cards */}
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
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
    </div>
  );
};

export default ManagePayment;
