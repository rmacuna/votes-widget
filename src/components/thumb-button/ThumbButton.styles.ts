import styled from "styled-components";

interface IThumbButton {
  readonly buttonType: "up" | "down";
}

export const ThumbButtonStyled = styled.button<IThumbButton>`
  background: ${(props: IThumbButton) =>
    props.buttonType === "up"
      ? "hsla(177, 51%, 48%, 0.8)"
      : "hsla(39, 96%, 64%, 1)"};
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
