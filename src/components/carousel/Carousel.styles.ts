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
    display: flex;
    flex: 1;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
  @media (min-width: 769px) {
    ${({ viewType }) => {
      if (viewType === "grid") {
        return `
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;
      `;
      }
      if (viewType === "list") {
        return `
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 1.167rem;
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
