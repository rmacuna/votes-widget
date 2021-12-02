import styled, { css } from "styled-components";

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
  padding-left: 34px;
  padding-right: 34px;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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
  // Tablet and desktop
  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 14px;
  }
`;

export const CardBackdrop = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 300px;
  z-index: 1;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const CardImage = styled.img`
  // Only in mobile
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    object-fit: cover;
  }
`;
