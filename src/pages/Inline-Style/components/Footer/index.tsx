import { useState, useEffect } from "react";
import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

export function Footer() {
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        padding: "1rem 0",
        background: "linear-gradient(to left, #4a5568, #2d3748)",
        borderTop: "1px solid #4a5568",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "0.875rem",
          display: isMediumScreen ? "flex" : "none",
        }}
      >
        &copy; {new Date().getFullYear()} Cristiano Pereira da Silva. All rights
        reserved.
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <a
          href="http://www.youtube.com/@cristianoSilvaDev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#4299e1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          <FaYoutube style={{ fontSize: "1.25rem" }} title="YouTube" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristiano-pereira-da-silva-bb991a124/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#4299e1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          <FaLinkedin style={{ fontSize: "1.25rem" }} title="LinkedIn" />
        </a>
        <a
          href="https://cristianosilvadev.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#4299e1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          <FaGlobe style={{ fontSize: "1.25rem" }} title="Website" />
        </a>
      </div>
    </footer>
  );
}
