import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const IconLink = styled(Link)`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  padding: 0.25rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    border-color: #4b5563;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const IconList = styled(Link)`
  padding: 4px 8px;
  border-radius: 0.375rem;
  display: flex;
  gap: 0.5rem;
  font-size: 14px;
  width: 160px;

  &:hover {
    background: #e5e7eb;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 2.75rem;
  right: -2.25rem;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;

  &.open {
    display: flex;
  }
`;

export const ImgContainer = styled.img`
  width: 10rem;
`;

export const Label = styled.div`
  font-size: 0.75rem;
`;

export const DropdownIconContainer = styled.div`
  display: flex;
  border: 1px solid #e6e6e6;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;

  @media (min-width: 1024px) {
    display: none;
  }

  &:hover {
    background: #e5e7eb;
  }
`;

export const DropdownIcon = styled(IoIosArrowDown)`
  font-size: 1.25rem;
`;
