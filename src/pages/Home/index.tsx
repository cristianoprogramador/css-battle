import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to CSS-BATTLE</h1>
      <div className="button-container">
        <Link to="/inline-style">
          <button>Inline Style</button>
        </Link>
        <Link to="/css-modules">
          <button>CSS Modules</button>
        </Link>
        <Link to="/tailwind">
          <button>Tailwind</button>
        </Link>
        <Link to="/styled-components">
          <button>Styled Components</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
