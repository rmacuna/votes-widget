import styled, { css } from "styled-components";
import { WithViewType } from "../../types";
import { ThumbButton } from "../common-ui/ThumbButton";
import { DESKTOP_MIN, PHONE_MAX, TABLET_MIN } from "../common-utils/constants";

interface IActionVotesContainer {
  readonly viewType: string;
}

const TwoLinesText = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardHeader = styled.div<WithViewType>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${ThumbButton} {
    margin-bottom: 7px;
    margin-right: 12px;
  }
  @media (min-width: ${TABLET_MIN}) {
    ${ThumbButton} {
      position: absolute;
      z-index: 2;
      left: 0;
      padding: 7px;
      min-width: 30px;
      min-height: 30px;
      ${(props) =>
        props.viewType === "list" &&
        css`
          position: absolute;
          left: 0;
          top: 0;
        `};
    }
  }
  @media (min-width: ${DESKTOP_MIN}) {
    ${ThumbButton} {
      padding: 10.5px;
    }
  }
`;

export const CardTitle = styled.h1<WithViewType>`
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
  line-height: 36px;
  z-index: 1;
  ${TwoLinesText};
  margin: 0;
  @media (min-width: ${TABLET_MIN}) {
    ${(props) =>
      props.viewType === "list"
        ? "padding-left: 0px"
        : "padding-left: 36.66px"};
  }
`;

export const CardContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardDescription = styled.p<WithViewType>`
  font-size: 1.25rem;
  margin: 0;
  ${TwoLinesText};
  text-overflow: ellipsis;
  color: hsla(0, 0%, 100%, 1);
  padding-left: 36.99px;
  @media (min-width: ${TABLET_MIN}) {
    ${(props) => props.viewType === "list" && "padding-left: 0px"};
  }
`;

export const CarouselCardContainer = styled.section<WithViewType>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 34px;
  justify-content: center;

  ${(props) =>
    props.viewType === "list" &&
    css`
      @media (min-width: ${TABLET_MIN}) {
        padding-left: 165px;
        padding-right: 12px;
        justify-content: flex-start;
      }
      // desktop devices
      @media (min-width: ${DESKTOP_MIN}) {
        padding-left: 265px;
        padding-right: 12px;
        justify-content: flex-start;
      }
    `}
`;
export const CardContentFlexArea = styled.div<WithViewType>`
  display: flex;
  align-items: center;
  padding-top: 7px;
  flex-direction: column;
  ${(props) =>
    props.viewType === "list" &&
    css`
      @media (min-width: ${TABLET_MIN}) {
        flex-direction: row;
        justify-content: space-between;
        ${CardDescription} {
          max-width: 65%;
        }
      }
    `}
`;
export const UpdateTimestamp = styled.span<WithViewType>`
  // Add mobile media
  font-size: 1rem;
  color: #fff;
  padding-top: 10px;
  font-weight: 700;
  text-align: end;
  align-self: flex-end;
  z-index: 1;
  // Tablet and desktop
  ${(props) =>
    props.viewType === "list" &&
    css`
      @media (min-width: ${TABLET_MIN}) {
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 4px;
      }
    `}
`;

export const CardBackdrop = styled.div<WithViewType>`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media (max-width: ${PHONE_MAX}) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  @media (min-width: ${TABLET_MIN}) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  ${(props) =>
    props.viewType === "list" &&
    css`
      // Tabley devices and not desktop
      @media (min-width: ${TABLET_MIN}) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.0001) 0%,
          #888888 19.79%,
          #666666 50%,
          rgba(51, 51, 51, 0.6) 71.88%
        );
      }

      @media (min-width: ${DESKTOP_MIN}) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.0001) 0%,
          #888888 19.79%,
          #666666 50%,
          rgba(51, 51, 51, 0.6) 71.88%
        );
      }
    `}
`;

export const CardImage = styled.img<WithViewType>`
  // Only in mobile
  width: 100%;
  height: 100%;
  position: absolute;

  @media (max-width: ${PHONE_MAX}) {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    object-fit: cover;
  }

  @media (min-width: ${TABLET_MIN}) {
    left: 0;
    top: 0;
    bottom: 0;
    width: ${(props) => (props.viewType === "list" ? "190px" : "100%")};
    height: 100%;
    object-fit: cover;
    object-position: ${(props) => (props.viewType === "list" ? "left" : "")};
  }
  // Desktop
  @media (min-width: ${DESKTOP_MIN}) {
    width: ${(props) => (props.viewType === "list" ? "218px" : "100%")};
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
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
