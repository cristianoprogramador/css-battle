import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home: React.FC = () => {
  return (
    <div className="container">
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
          <Link to="/emotion">
            <button>Emotion</button>
          </Link>
          {/* <Link to="/css-in-js">
            <button>CSS-in-JS</button>
          </Link>
          <Link to="/aphrodite">
            <button>Aphrodite</button>
          </Link>
          <Link to="/stitches">
            <button>Stitches</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
