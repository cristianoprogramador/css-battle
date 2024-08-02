import { useEffect, useState } from "react";
import { data } from "../../utils/mockData";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  Card,
  CardContent,
  CardImage,
  CardLink,
  CardTitle,
  Container,
  GridContainer,
  Main,
  Title,
  TypingText,
} from "./styles";

export function StyledComponents() {
  const [, setWindowWidth] = useState(window.innerWidth);

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
                <div style={{ display: "flex", gap: "1rem" }}>
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
