import styled, { css } from "styled-components";

interface DropdownMenuProps {
  readonly isOpen: boolean;
}

const DropdownPadding = css`
  padding-top: 8px;
  padding-left: 8.52px;
  padding-right: 29px;
  padding-bottom: 9px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  cursor: default;
  width: 131px;
  flex-wrap: wrap;
  border: 2px solid #333333;
  // Hide in mobile devices
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownControl = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  ${DropdownPadding};
  justify-content: center;
  align-items: center;
`;

export const DropdownValue = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export const DropdownArrow = styled.div<DropdownMenuProps>`
  position: absolute;
  right: 16.5px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  ${(props) =>
    props.isOpen
      ? `border-bottom: 6px solid #333333;`
      : `border-top: 6px solid #333333;`}
`;

export const DropdownMenu = styled.ul<DropdownMenuProps>`
  padding: 0;
  margin: 0;
  width: 100%;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  /* left: -2px; */
  z-index: 1000;
  -webkit-overflow-scrolling: touch;

  /* Select last child and remove th border */
`;

export const DropdownMenuItem = styled.li`
  list-style: none;
  color: #000;
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  padding: 8px;
  border: 2px solid #333333;
  // Last child should have no border
  &:last-child {
    border-top: 0;
  }
`;
