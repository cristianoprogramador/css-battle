import { useState, useEffect } from "react";
import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";
import {
  FooterContainer,
  FooterIconLink,
  FooterIcons,
  FooterText,
} from "./styles";

export function Footer() {
  const [, setIsMediumScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Cristiano Pereira da Silva. All rights
        reserved.
      </FooterText>
      <FooterIcons>
        <FooterIconLink
          href="http://www.youtube.com/@cristianoSilvaDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube title="YouTube" />
        </FooterIconLink>
        <FooterIconLink
          href="https://www.linkedin.com/in/cristiano-pereira-da-silva-bb991a124/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin title="LinkedIn" />
        </FooterIconLink>
        <FooterIconLink
          href="https://cristianosilvadev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe title="Website" />
        </FooterIconLink>
      </FooterIcons>
    </FooterContainer>
  );
}