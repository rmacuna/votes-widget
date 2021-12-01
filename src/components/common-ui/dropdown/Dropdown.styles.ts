import styled from "styled-components";

export const DropdownContainer = styled.select`
  width: 131px;
  height: 100%;
  padding: 8px 16.5px 9px 8.52px;
  border: 2px solid #333333;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;

  // Hide in mobile devices
  @media (max-width: 768px) {
    display: none;
  }
`;
