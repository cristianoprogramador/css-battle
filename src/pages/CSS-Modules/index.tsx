import React, { useEffect, useState } from "react";

import { data } from "../../utils/mockData";
import styles from "./CSSModules.module.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function CSSModules() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const text = document.querySelector(`.${styles.typingText}`);
    if (text) {
      const letters = text?.textContent?.split("");
      text.textContent = "";
      letters?.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter;
        span.style.animationDelay = `${index * 0.05}s`;
        text.appendChild(span);
      });
    }
  }, []);

  const getColumnCount = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  };

  const columnCount = getColumnCount();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.typingText}>
            Some of my portfolio:
          </span>
        </h1>
        <div
          className={styles.gridContainer}
          style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
        >
          {data.map((project) => (
            <div key={project.id} className={styles.card}>
              <img
                src={project.image}
                alt={`${project.title} image`}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
