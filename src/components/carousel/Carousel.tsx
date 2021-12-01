/**
 * @fileoverview
 * Should be in charge of display the carousel in the grid/list view.
 * In other words should be in charge of the layout of items displayed inside of it.
 * @returns
 */

import { Dropdown } from "../common-ui/dropdown/Dropdown";
import {
  CarouselContainer,
  CarouselTitleHeader,
  MainContainer,
} from "./Carousel.styles";

interface ICarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: ICarouselProps) => {
  return (
    <MainContainer>
      <div className="flex justify-between items-center">
        <CarouselTitleHeader>Previous Rulings</CarouselTitleHeader>
        <Dropdown />
      </div>
      <CarouselContainer>{children}</CarouselContainer>
    </MainContainer>
  );
};
