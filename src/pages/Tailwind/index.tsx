import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./style.css";
import { data } from "../../utils/mockData";

export function Tailwind() {
  useEffect(() => {
    const text = document.querySelector(".typing-text");
    if (text) {
      const letters = text?.textContent?.split("");
      text.textContent = "";
      letters?.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter;
        span.style.animationDelay = `${index * 0.05}s`;
        span.classList.add("animate-fadeIn", "inline-block", "opacity-0");
        text.appendChild(span);
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col w-full justify-between items-center gap-4">
      <Header />
      <main className="flex flex-col items-center w-full px-4">
        <h1 className="text-3xl font-bold mb-8 inline-flex">
          <span className="typing-text text-gray-700">
            Some of my portfolio:
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {data.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg border p-1 overflow-hidden flex flex-col justify-between transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={`${project.title} image`}
                className="w-full h-auto object-cover object-center max-w-full rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 hover:bg-gray-200 border px-2 py-1 rounded-md"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 hover:bg-gray-200 border px-2 py-1 rounded-md"
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
