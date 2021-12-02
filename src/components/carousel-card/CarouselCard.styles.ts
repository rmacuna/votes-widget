import styled, { css } from "styled-components";
import { DESKTOP_MIN, PHONE_MAX, TABLET_MIN } from "../common-utils/constants";

const TwoLinesText = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CarouselCardContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  // mobile devices
  @media (max-width: ${PHONE_MAX}) {
    padding-left: 34px;
    padding-right: 34px;
    justify-content: center;
  }
  // tablet devices
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
`;

export const CardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
  line-height: 36px;
  ${TwoLinesText};
  text-align: left;
  margin: 0;
  padding-bottom: 7px;
`;

export const CardContent = styled.div`
  z-index: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const CardDescription = styled.p`
  font-size: 1.25rem;
  margin: 0;
  ${TwoLinesText};
  text-overflow: ellipsis;
  color: hsla(0, 0%, 100%, 1);
`;

export const UpdateTimestamp = styled.span`
  // Add mobile media
  font-size: 1rem;
  color: #fff;
  padding-top: 10px;
  font-weight: 700;
  text-align: end;
  align-self: flex-end;
  z-index: 1;
  // Tablet and desktop
  @media (min-width: ${TABLET_MIN}) {
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 14px;
  }
`;

export const CardBackdrop = styled.div`
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
`;

export const CardImage = styled.img`
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
  /* @media (min-width: 768px) and (max-width: 1023px) */
  // Tablet device and not desktop
  @media (min-width: ${TABLET_MIN}) {
    left: 0;
    top: 0;
    bottom: 0;
    width: 190px;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
  // Desktop
  @media (min-width: ${DESKTOP_MIN}) {
    width: 218px;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
`;
