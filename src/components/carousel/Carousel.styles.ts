import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 1rem;
  margin-top: 2rem;
`;

export const CarouselContainer = styled.div`
  // Horizontal scroll in phones
  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
`;

export const CarouselTitleHeader = styled.h2`
  font-size: 2rem;
  line-height: 28.8px;
  font-weight: 300;
`;
