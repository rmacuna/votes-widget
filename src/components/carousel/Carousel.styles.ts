import styled from "styled-components";
import {
  DESKTOP_MIN,
  PHONE_MAX,
  TABLET_MIN,
} from "../../components/common-utils/constants";

interface ICarouselContainer {
  readonly viewType: string;
}

export const MainContainer = styled.div`
  margin: 0 auto;
  display: block;
  // Create responsive container max-width
  @media (min-width: ${DESKTOP_MIN}) {
    max-width: 1100px;
  }
  @media (min-width: ${TABLET_MIN}) and (max-width: ${DESKTOP_MIN}) {
    max-width: 715px;
  }
  @media (max-width: ${PHONE_MAX}) {
    max-width: 100%;
    margin-left: 12px;
  }
`;

export const CarouselContainer = styled.div<ICarouselContainer>`
  // Horizontal scroll in phones
  @media (max-width: ${PHONE_MAX}) {
    display: grid;
    break-inside: avoid-column;
    grid-auto-columns: 300px;
    grid-auto-rows: 300px;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
  }
  @media (min-width: ${TABLET_MIN}) {
    ${({ viewType }) => {
      if (viewType === "grid") {
        return `
          display: grid;
          grid-template-columns: repeat(2, 351px);
          grid-auto-rows: 351px;
          grid-gap: 1rem;
      `;
      }
      if (viewType === "list") {
        return `
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: 142px;
          grid-gap: 1.167rem;
        `;
      }
    }}
  }
  // Create a grid of three columns in desktop
  @media (min-width: ${DESKTOP_MIN}) {
    ${({ viewType }) => {
      if (viewType === "grid") {
        return `
          display: grid;
          grid-template-columns: repeat(3, 348px);
          grid-gap: 2.25rem;
          grid-auto-rows: 348px;
        `;
      }
      if (viewType === "list") {
        return `
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 1.5rem;
          grid-auto-rows: 170px;
        `;
      }
    }}
  }
`;

export const CarouselTitleHeader = styled.h2`
  font-size: 2rem;
  line-height: 28.8px;
  font-weight: 300;
`;
