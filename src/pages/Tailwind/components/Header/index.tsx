import { useState } from "react";
import {
  FaCode,
  FaCss3Alt,
  FaReact,
  FaPaintBrush,
  FaHeart,
  FaJsSquare,
  FaMagic,
  FaFont,
  FaSketch,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/inline-style", icon: FaCode, label: "Inline Style" },
  { to: "/css-modules", icon: FaCss3Alt, label: "CSS Modules" },
  { to: "/tailwind", icon: FaReact, label: "Tailwind" },
  { to: "/styled-components", icon: FaPaintBrush, label: "Styled Components" },
  { to: "/emotion", icon: FaHeart, label: "Emotion" },
  { to: "/css-in-js", icon: FaJsSquare, label: "CSS-in-JS" },
  { to: "/aphrodite", icon: FaMagic, label: "Aphrodite" },
  { to: "/radium", icon: FaFont, label: "Radium" },
  { to: "/stitches", icon: FaSketch, label: "Stitches" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const iconClass =
    "hidden md:flex flex-col items-center justify-center border p-1 rounded-lg hover:border-gray-600";

  const optionClass =
    "hover:bg-gray-200 py-1 px-2 rounded-lg flex items-center gap-2";

  return (
    <div className="flex flex-row justify-around w-full text-center py-4 bg-white shadow">
      <div className="flex flex-row items-center justify-center">
        <div className="font-semibold text-xl hidden lg:flex">Welcome to:</div>
        <img src="/css-battle.png" alt="" className="w-40" />
      </div>
      <div className="flex flex-row items-center gap-3">
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <Link to={to} key={to} className={iconClass}>
            <Icon className="hidden lg:flex" title={label} />
            <div className="text-xs">{label}</div>
          </Link>
        ))}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden border p-3 rounded-lg cursor-pointer hover:bg-gray-200 relative"
        >
          <IoIosArrowDown size={15} />
          {isOpen && (
            <div className="absolute top-11 w-40 -right-9 flex flex-col text-sm border rounded-md p-1 bg-white shadow-md">
              {NAV_ITEMS.map(({ to, label }) => (
                <Link to={to} key={to} className={optionClass}>
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