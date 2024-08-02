import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { data } from "../../utils/mockData";

export function InlineStyle() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const text = document.querySelector(".typing-text");
    if (text) {
      const letters = text?.textContent?.split("");
      text.textContent = "";
      letters?.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.animation = `fadeIn 0.5s forwards ${index * 0.05}s`;
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

  const gridStyle = {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    justifyContent: "center",
    width: "100%",
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Header />
      <style>{fadeInKeyframes}</style>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            display: "inline-flex",
          }}
        >
          <span className="typing-text" style={{ color: "#4A5568" }}>
            Some of my portfolio:
          </span>
        </h1>
        <div style={gridStyle}>
          {data.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #E2E8F0",
                padding: "0.25rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transform: "transition",
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={project.image}
                alt={`${project.title} image`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "0.5rem",
                }}
              />
              <div style={{ padding: "1rem" }}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h2>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#F7FAFC",
                        border: "1px solid #E2E8F0",
                        padding: "4px 8px",
                        borderRadius: "0.375rem",
                        textDecoration: "none",
                        color: "#2D3748",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#EDF2F7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#F7FAFC")
                      }
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#F7FAFC",
                        border: "1px solid #E2E8F0",
                        padding: "4px 8px",
                        borderRadius: "0.375rem",
                        textDecoration: "none",
                        color: "#2D3748",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#EDF2F7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#F7FAFC")
                      }
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
