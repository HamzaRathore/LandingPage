import React from "react";
import styles from "./WorkTool.module.css";
import dropbox from "../../assets/W-Tools/dropBox.svg";
import shopify from "../../assets/W-Tools/Shopify.svg";
import hubspot from "../../assets/W-Tools/Hubspot.svg";
import slack from "../../assets/W-Tools/Slag.svg";
import intercom from "../../assets/W-Tools/Intercom.svg";
import zapier from "../../assets/W-Tools/Zapier.svg";
import kickstarter from "../../assets/W-Tools/KickStarter.svg";
import mailchimp from "../../assets/W-Tools/MailChimp.svg";
import upperArrow from "../../assets/upperArrow.svg";
import { Link } from "react-router-dom";

const tools = [
  { 
    name: "Dropbox", 
    logo: dropbox 
  },
  { 
    name: "Shopify", 
    logo: shopify 
  },
  { 
    name: "Hubspot", 
    logo: hubspot 
  },
  { 
    name: "Slack", 
    logo: slack 
  },
  { 
    name: "Intercom", 
    logo: intercom 
  },
  { 
    name: "Zapier", 
    logo: zapier 
  },
  { 
    name: "Kickstarter", 
    logo: kickstarter 
  },
  { 
    name: "Mailchimp", 
    logo: mailchimp 
  },
];

const WorkTool = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
            <div className={styles.headingContainer}>
            <div className={styles.txt}>
          <h2>Works with all your favorite tools</h2>
          </div>
          <Link className={styles.btnLink} to={'https://milestone-webflow-html-website-template.webflow.io/'}>
          <button className={styles.btn}>
            ALL INTERGRATIONS
            <span className={styles.arrow}>
              <img src={upperArrow} alt="Upper Arrow" />
            </span>
          </button>
          </Link>
        </div>
        </div>

        <div className={styles.toolGrid}>
          {tools.map((tool, index) => (
            <div key={index} className={styles.toolItem}>
              <img
                src={tool.logo}
                alt={tool.name}
                className={styles.toolLogo}
              />
              <span className={styles.toolName}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTool;
