import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";

export const FooterContainer = styled.footer`
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

export const FooterText = styled.div`
  font-size: 0.875rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const FooterIconLink = styled.a`
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #4299e1;
  }
`;

export const FooterIcon = styled(FaYoutube)`
  font-size: 1.25rem;
`;
