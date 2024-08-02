import React, { useState, useEffect } from "react";
import { CgGirl } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdCss, MdOutlineViewModule } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxStitchesLogo } from "react-icons/rx";
import { SiShell, SiStyledcomponents } from "react-icons/si";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: "/inline-style", icon: FaCode, label: "Inline Style" },
  { to: "/css-modules", icon: MdOutlineViewModule, label: "CSS Modules" },
  { to: "/tailwind", icon: RiTailwindCssFill, label: "Tailwind" },
  {
    to: "/styled-components",
    icon: SiStyledcomponents,
    label: "Styled Components",
  },
  { to: "/emotion", icon: CgGirl, label: "Emotion" },
  { to: "/css-in-js", icon: MdCss, label: "CSS-in-JS" },
  { to: "/aphrodite", icon: SiShell, label: "Aphrodite" },
  { to: "/stitches", icon: RxStitchesLogo, label: "Stitches" },
];

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
        {isLargeScreen && (
          <div className={styles.headerTitle}>Welcome to:</div>
        )}
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
