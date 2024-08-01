import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./style.css"


export function Tailwind() {
  return (
    <div className="flex min-h-screen flex-col w-full justify-between items-center gap-4">
      <Header />
      <div>Aqui é Body</div>
      <Footer />
    </div>
  );
}
