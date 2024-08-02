import { useState, useEffect } from "react";
import { CgGirl } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { MdCss, MdOutlineViewModule } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxStitchesLogo } from "react-icons/rx";
import { SiShell, SiStyledcomponents } from "react-icons/si";
import {
  Dropdown,
  DropdownIcon,
  DropdownIconContainer,
  HeaderContainer,
  HeaderContent,
  HeaderIcons,
  HeaderTitle,
  IconLink,
  IconList,
  ImgContainer,
  Label,
} from "./styles";

const NAV_ITEMS = [
  { to: "/inline-style", icon: FaCode, label: "Inline Style" },
  { to: "/css-modules", icon: MdOutlineViewModule, label: "CSS Modules" },
  { to: "/tailwind", icon: RiTailwindCssFill, label: "Tailwind" },
  {
    to: "/styled-components",
    icon: SiStyledcomponents,
    label: "Styled Components",
  },
  { to: "/emotion", icon: CgGirl, label: "Emotion" },
  { to: "/css-in-js", icon: MdCss, label: "CSS-in-JS" },
  { to: "/aphrodite", icon: SiShell, label: "Aphrodite" },
  { to: "/stitches", icon: RxStitchesLogo, label: "Stitches" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        {isLargeScreen && <HeaderTitle>Welcome to:</HeaderTitle>}
        <ImgContainer src="/css-battle.png" alt="CSS Battle" />
      </HeaderContent>
      <HeaderIcons>
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <IconLink to={to} key={to}>
            <Icon title={label} size={20} />
            <Label>{label}</Label>
          </IconLink>
        ))}
        <DropdownIconContainer onClick={() => setIsOpen(!isOpen)}>
          <DropdownIcon size={15} />
          {isOpen && (
            <Dropdown className="open">
              {NAV_ITEMS.map(({ to, label }) => (
                <IconList to={to} key={to}>
                  {label}
                </IconList>
              ))}
            </Dropdown>
          )}
        </DropdownIconContainer>
      </HeaderIcons>
    </HeaderContainer>
  );
}
