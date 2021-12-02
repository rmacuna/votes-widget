import styled from "styled-components";
import { PHONE_MAX } from "../../common-utils/constants";

interface ICustomButtonProps {
  width?: string;
}

export const Button = styled.button<ICustomButtonProps>`
  outline: none;
  cursor: pointer;
  width: ${(props) => props?.width || "100%"};
  padding: 10px 4.6px;
  color: ${(props) => (props.disabled ? "#8e8e8e" : "#fff")};
  border: 1px solid #ffffff;
  background: rgba(0, 0, 0, 0.6);
  font-size: 1.25rem;

  &:active {
    background: rgba(0, 0, 0, 0.8);
    // scale up a little
    transform: scale(1.02);
  }

  @media (max-width: ${PHONE_MAX}) {
    width: 100%;
  }
`;
