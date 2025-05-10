import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CreditDetail.module.css";
import credit1 from "../../assets/transaction/credit1.svg";
import credit2 from "../../assets/transaction/credit2.svg";
import tick from "../../assets/tick.svg";
import upperArrow from "../../assets/arrU.svg";

const detail = [
  {
    id: 1,
    src: tick,
    text: "No hidden fees",
  },
  {
    id: 2,
    src: tick,
    text: "100% security. Guaranteed.",
  },
  {
    id: 3,
    src: tick,
    text: "No No training or maintenance needed.",
  },
];

const CreditDetail = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
        {/* section 1 */}
        <div className={styles.section1}>
          <div className={styles.sec1Img}>
            <img src={credit1} alt="credit1" />
          </div>

          {/* for text */}
          <div className={styles.textContainer}>
            <h2>
              Manage all your{" "}
              <span>
                <br />
              </span>{" "}
              cards in one place
            </h2>
            <p>
              Centralize and simplify payments, and get comprehensive insights
              on your financials. Connect your bank account and your card to
              Milestone.
            </p>

            {/* detail */}
            <div className={styles.detail}>
              {detail.map((details) => (
                <div key={details.id} className={styles.inner}>
                  <img src={details.src} alt="detail-img" />
                  <p>{details.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className={styles.section2}>
          <div className={styles.sec2Text}>
            <div>
              <h2>
                Pay invoices, on time{" "}
                <span>
                  <br />
                </span>{" "}
                every time across{" "}
                <span>
                  <br />
                </span>
                borders
              </h2>
              <p>
                Send and receive payments in any currency, without any extra
                charges, within 24 hours or less. Make international
                transactions a piece of cake.
              </p>
              <p>
                Avoid late fees and penalties, and capture every early payment
                discount with reminders and automated approvals
              </p>
            </div>
            <div>
              <button className={styles.btn}>
                <span>
                  <img
                    src={upperArrow}
                    alt="btn-arrow"
                    className={styles.btnImg}
                  />
                </span>
                LEARN MORE
              </button>
            </div>
          </div>

          {/* for img */}

          <div className={styles.sec1Img}>
            <img src={credit2} alt="credit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditDetail;
