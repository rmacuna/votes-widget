import styled from "styled-components";

interface ICarouselContainer {
  readonly viewType: string;
}

export const MainContainer = styled.div`
  padding: 0 1rem;
  margin-top: 2rem;
`;

export const CarouselContainer = styled.div<ICarouselContainer>`
  // Horizontal scroll in phones
  @media (max-width: 768px) {
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
  @media (min-width: 769px) {
    ${({ viewType }) => {
      if (viewType === "grid") {
        return `
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
  @media (min-width: 1201px) {
    ${({ viewType }) => {
      if (viewType === "grid") {
        return `
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
