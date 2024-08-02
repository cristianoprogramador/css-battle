import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../../../utils/mockData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconStyle: React.CSSProperties = {
    display: isLargeScreen ? "flex" : "none",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    border: "1px solid #e6e6e6",
    padding: "0.25rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
  };

  const optionStyle: React.CSSProperties = {
    padding: "4px 8px",
    borderRadius: "0.375rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    fontSize: "14px",
    width: "160px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        textAlign: "center",
        padding: "1rem 0",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.25rem",
            display: isLargeScreen ? "flex" : "none",
          }}
        >
          Welcome to:
        </div>
        <img
          src="/css-battle.png"
          alt="CSS Battle"
          style={{ width: "10rem" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <Link
            to={to}
            key={to}
            style={iconStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.border = "1px solid #4b5563")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.border = "1px solid #e6e6e6")
            }
          >
            <Icon title={label} size={20} />
            <div style={{ fontSize: "0.75rem", height: "16px" }}>{label}</div>
          </Link>
        ))}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: isLargeScreen ? "none" : "flex",
            border: "1px solid #e6e6e6",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            position: "relative",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e5e7eb")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
        >
          <IoIosArrowDown size={15} />
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "2.75rem",
                right: "-2.25rem",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #e6e6e6",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: "9999",
              }}
            >
              {NAV_ITEMS.map(({ to, label }) => (
                <Link
                  to={to}
                  key={to}
                  style={optionStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e5e7eb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
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
