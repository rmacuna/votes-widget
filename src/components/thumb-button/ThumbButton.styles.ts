import styled from "styled-components";
import { DESKTOP_MIN, PHONE_MAX, TABLET_MIN } from "../common-utils/constants";

export interface IThumbButton {
  readonly buttonType: "up" | "down";
  readonly absolute?: boolean;
  readonly viewType: string;
  readonly isActive?: boolean;
}

interface IActionVotesContainer {
  readonly viewType: string;
}

export const ThumbButtonContainer = styled.button<IThumbButton>`
  background: ${(props: IThumbButton) =>
    props.buttonType === "up"
      ? "hsla(177, 51%, 48%, 0.8)"
      : "hsla(39, 96%, 64%, 1)"};

  display: flex;
  margin-right: 12px;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border: ${(props) => props.isActive && "1px solid #fff"};

  // Position depending on property absolute.
  ${(props) => {
    if (props.absolute) {
      return `
        position: absolute;
        z-index: 2;
        @media (max-width: ${PHONE_MAX}){
          top: 50%;
          transform: translateY(-50%);
          padding: 7px;
          left: 0;
        }
        @media (min-width: ${TABLET_MIN}) {
          top: ${props.viewType === "list" ? "0" : "50%"};
          left: 0;
          padding: 7px;
          margin: 0;
          ${props.viewType === "grid" ? "transform: translateY(-30px);" : ""}
        }
        @media (min-width: ${DESKTOP_MIN}) {
          top: ${props.viewType === "list" ? "0" : "50%"};
          padding: 10.5px;
        }
      `;
    }
    return `
      @media (min-width: ${DESKTOP_MIN}){
        padding: 10.5px;
      }
    `;
  }}
`;

export const ActionVotesContainer = styled.div<IActionVotesContainer>`
  display: flex;
  align-items: center;
  align-self: flex-end;

  @media (max-width: ${PHONE_MAX}) {
    margin-top: 12px;
  }
  @media (min-width: ${TABLET_MIN}) {
    margin-top: ${(props) => (props.viewType === "grid" ? "12px" : "0px")};
  }
`;
