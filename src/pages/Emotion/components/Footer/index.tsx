/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background: linear-gradient(to left, #4a5568, #2d3748);
  border-top: 1px solid #4a5568;
  color: white;
`;

const FooterText = styled.div`
  font-size: 0.875rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const IconLink = styled.a`
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #4299e1;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Cristiano Pereira da Silva. All rights
        reserved.
      </FooterText>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 1rem;
        `}
      >
        <IconLink
          href="http://www.youtube.com/@cristianoSilvaDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube style={{ fontSize: "1.25rem" }} title="YouTube" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/cristiano-pereira-da-silva-bb991a124/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "1.25rem" }} title="LinkedIn" />
        </IconLink>
        <IconLink
          href="https://cristianosilvadev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe style={{ fontSize: "1.25rem" }} title="Website" />
        </IconLink>
      </div>
    </FooterContainer>
  );
}
