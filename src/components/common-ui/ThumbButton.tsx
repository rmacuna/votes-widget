import styled from "styled-components";
import thumbUp from "../../assets/svg/thumbup.svg";
import thumbDown from "../../assets/svg/thumbdown.svg";

export interface IThumbButton {
  readonly buttonType: "up" | "down";
  readonly absolute?: boolean;
  readonly viewType: string;
  readonly isActive?: boolean;
  marginRight?: string;
}

export const ThumbButton = styled.button<IThumbButton>`
  background: ${(props: IThumbButton) =>
    props.buttonType === "up"
      ? "hsla(177, 51%, 48%, 0.8)"
      : "hsla(39, 96%, 64%, 1)"};

  display: flex;
  z-index: 1;
  margin-right: ${(props) => props.marginRight || "12px"};
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border: ${(props) => props.isActive && "1px solid #fff"};
`;

interface ThumbIconProps {
  icon: "up" | "down";
}

export const ThumbIcon = ({ icon }: ThumbIconProps) => {
  return (
    <img src={icon === "up" ? thumbUp : thumbDown} alt={`thumb-${icon}`} />
  );
};
