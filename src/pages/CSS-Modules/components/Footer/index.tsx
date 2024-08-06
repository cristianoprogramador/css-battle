import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerText}>
        &copy; {new Date().getFullYear()} Cristiano Pereira da Silva. All rights
        reserved.
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
