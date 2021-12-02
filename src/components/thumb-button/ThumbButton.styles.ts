import styled from "styled-components";
import { PHONE_MAX, TABLET_MIN } from "../common-utils/constants";

export interface IThumbButton {
  readonly buttonType: "up" | "down";
  readonly position: "absolute" | "relative";
}

export const ThumbButtonContainer = styled.button<IThumbButton>`
  background: ${(props: IThumbButton) =>
    props.buttonType === "up"
      ? "hsla(177, 51%, 48%, 0.8)"
      : "hsla(39, 96%, 64%, 1)"};

  display: flex;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;

  // Position depending on property absolute.
  ${(props) => {
    if (props.position === "absolute") {
      return `
        position: absolute;
        z-index: 1;
        @media (max-width: ${PHONE_MAX}){
          top: 50%;
          transform: translateY(-110%);
          left: 0;
          width: 28px;
          height: 28px;
        }
        @media (min-width: ${TABLET_MIN}) {
          top: 0;
          left: 0;
          width: 28px;
          height: 28px;
          margin: 0;
        }
      `;
    }
  }}
`;
