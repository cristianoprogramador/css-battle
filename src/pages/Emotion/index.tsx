/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { data } from "../../utils/mockData";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-flex;
  color: #4a5568;
`;

const TypingText = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    animation: ${fadeIn} 0.5s forwards;
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  padding: 0.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardLink = styled.a`
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  padding: 4px 8px;
  border-radius: 0.375rem;
  text-decoration: none;
  color: #2d3748;
  transition: background-color 0.2s;

  &:hover {
    background-color: #edf2f7;
  }
`;

export function EmotionStyle() {
  useEffect(() => {
    const text = document.querySelector(".typing-text");
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

  return (
    <Container>
      <Header />
      <Main>
        <Title>
          <TypingText className="typing-text">Some of my portfolio:</TypingText>
        </Title>
        <GridContainer>
          {data.map((project) => (
            <Card key={project.id}>
              <CardImage src={project.image} alt={`${project.title} image`} />
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <div
                  css={css`
                    display: flex;
                    gap: 1rem;
                  `}
                >
                  {project.github && (
                    <CardLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </CardLink>
                  )}
                  {project.demo && (
                    <CardLink
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </CardLink>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </GridContainer>
      </Main>
      <Footer />
    </Container>
  );
}
