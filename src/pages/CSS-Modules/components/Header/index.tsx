import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { NAV_ITEMS } from "../../../../utils/mockData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {isLargeScreen && <div className={styles.headerTitle}>Welcome to:</div>}
        <img
          src="/css-battle.png"
          alt="CSS Battle"
          className={styles.imgContainer}
        />
      </div>
      <div className={styles.headerIcons}>
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <Link to={to} key={to} className={styles.iconLink}>
            <Icon title={label} size={20} className={styles.icon} />
            <div className={styles.label}>{label}</div>
          </Link>
        ))}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.dropdownIconContainer}`}
        >
          <IoIosArrowDown size={15} className={styles.dropdownIcon} />
          {isOpen && (
            <div className={`${styles.dropdown} ${styles.dropdownOpen}`}>
              {NAV_ITEMS.map(({ to, label }) => (
                <Link to={to} key={to} className={styles.iconList}>
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
