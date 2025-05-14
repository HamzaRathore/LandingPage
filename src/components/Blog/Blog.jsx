import React, { useState,useEffect } from "react";
import styles from "./Blog.module.css";
import blog1 from "../../assets/blog/blog1.svg";
import blog2 from "../../assets/blog/blog2.svg";
import blog3 from "../../assets/blog/blog3.png";
import upperArrow from "../../assets/arrU.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    title: "The worst advice we've ever heard about web design",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpas is important",
    src: blog1,
    type: "BUSINESS",
    time: ". 8 MIN READ",
  },
  {
    id: 2,
    title: "The History Of Web Design",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpas is important",
    src: blog2,
    type: "MARKETING",
    time: ". 8 MIN READ",
  },
  {
    id: 3,
    title: "10 Things Nobody Told You About Being a Web Designer",
    desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpas is important",
    src: blog3,
    type: "PRODUCT",
    time: ". 8 MIN READ",
  },
];

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [active, setActive] = useState(blogs[0]);
  return (
    <div data-aos="fade-up" data-aos-delay="200" className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.header}>
          <h1>Recent Blog</h1>
        </div>

        <div className={styles.blogTab}>
          {/* img */}
          <div className={styles.imgSection}>
            <img src={active.src} alt="blog1" />
          </div>
          {/* content */}
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <div className={styles.category}>
                <h2>{active.type}</h2>
              </div>
              <div className={styles.time}>
                <p>{active.time}</p>
              </div>
            </div>
            <div className={styles.title}>
              <h2>{active.title}</h2>
            </div>

            <div className={styles.description}>
              <p>{active.desc}</p>
            </div>
            <div>
              <Link
                className={styles.btnLink}
                to={
                  "https://milestone-webflow-html-website-template.webflow.io/"
                }
              >
                <button className={styles.btn}>
                  <span>
                    <img
                      src={upperArrow}
                      alt="btn-arrow"
                      className={styles.btnImg}
                    />
                  </span>
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.blogFooter}>
          {/* for img */}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`${styles.blogTabWrapper} ${
                active.id === blog.id ? styles.active : ""
              }`}
              onClick={() => setActive(blog)}
            >
              <div className={styles.footerInner}>
                <div className={styles.footerImg}>
                  <img src={blog.src} alt="blogImg" />
                </div>

                <div className={styles.footerContent}>
                  <h3>{blog.time}</h3>
                  <h2>{blog.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
