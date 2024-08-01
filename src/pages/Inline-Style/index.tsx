import React, { useEffect, useState } from "react";
import { Footer } from "../Tailwind/components/Footer";
import { Header } from "../Tailwind/components/Header";

export function InlineStyle() {
  const data = [
    {
      id: 1,
      image: "/item1.jpg",
      title: "Coffee Shop",
      github: "https://github.com/cristianoprogramador/ignite-coffeeshop",
      demo: "https://ignite-coffeeshop.vercel.app/",
    },
    {
      id: 2,
      image: "/item2.jpg",
      title: "Learning and Laughing",
      demo: "https://learningandlaughing.com.br/",
    },
    {
      id: 3,
      image: "/item3.jpg",
      title: "My Life - Dashboard",
      github: "https://github.com/cristianoprogramador/mylife_dashboard",
      demo: "https://mylife-dashboard.vercel.app/",
    },
    {
      id: 4,
      image: "/item4.jpg",
      title: "Create Your Burger",
      github: "https://github.com/cristianoprogramador/createBurger",
      demo: "https://createburger.com.br/",
    },
    {
      id: 5,
      image: "/item5.jpg",
      title: "Clinica Lithá",
      demo: "https://clinicalitha.com.br/",
    },
    {
      id: 6,
      image: "/item6.jpg",
      title: "App-Watch",
      github: "https://github.com/cristianoprogramador/app_watch_frontend",
      demo: "https://appwatch.cristianosilvadev.com/",
    },
    {
      id: 7,
      image: "/item7.jpg",
      title: "Better-end",
      github: "https://github.com/cristianoprogramador/better_end_frontend",
      demo: "https://betterend.cristianosilvadev.com/",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColumnCount = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  };

  const columnCount = getColumnCount();

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  };

  const itemStyle = {
    flex: `1 0 calc(${100 / columnCount}% - 2rem)`,
    boxSizing: "border-box",
  };

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
                ...itemStyle,
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
                        padding: "0.5rem 1rem",
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
                        padding: "0.5rem 1rem",
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
