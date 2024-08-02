import React, { useState, useEffect } from "react";
import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className={styles.footerContainer}>
      <div className={isMediumScreen ? styles.footerText : styles.footerTextHidden}>
        &copy; {new Date().getFullYear()} Cristiano Pereira da Silva. All rights reserved.
      </div>
      <div className={styles.iconContainer}>
        <a
          href="http://www.youtube.com/@cristianoSilvaDev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaYoutube className={styles.icon} title="YouTube" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristiano-pereira-da-silva-bb991a124/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin className={styles.icon} title="LinkedIn" />
        </a>
        <a
          href="https://cristianosilvadev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGlobe className={styles.icon} title="Website" />
        </a>
      </div>
    </footer>
  );
}
