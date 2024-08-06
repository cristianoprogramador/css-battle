import { useState } from "react";
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
import { NAV_ITEMS } from "../../../../utils/mockData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>Welcome to:</HeaderTitle>
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
