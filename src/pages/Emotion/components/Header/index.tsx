/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../../../utils/mockData";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

const IconLink = styled(Link)`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  padding: 0.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: #4b5563;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  border: 1px solid #e6e6e6;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #e5e7eb;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2.75rem;
  right: -2.25rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const DropdownLink = styled(Link)`
  padding: 4px 8px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 14px;
  width: 160px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #e5e7eb;
  }
`;

const ImgContainer = styled.img`
  width: 10rem;
`;

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
            <div
              css={css`
                font-size: 0.75rem;
                height: 16px;
              `}
            >
              {label}
            </div>
          </IconLink>
        ))}
        <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
          <IoIosArrowDown size={15} />
          {isOpen && (
            <DropdownMenu>
              {NAV_ITEMS.map(({ to, label }) => (
                <DropdownLink to={to} key={to}>
                  {label}
                </DropdownLink>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </HeaderIcons>
    </HeaderContainer>
  );
}
