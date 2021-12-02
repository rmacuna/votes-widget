/**
 * @fileoverview
 * Should be in charge of display the carousel in the grid/list view.
 * In other words should be in charge of the layout of items displayed inside of it.
 * @returns
 */
import * as React from "react";
import { Dropdown } from "../common-ui/dropdown/Dropdown";
import { VIEWMODE_OPTIONS } from "../common-utils/constants";
import {
  CarouselContainer,
  CarouselTitleHeader,
  MainContainer,
} from "./Carousel.styles";

interface ICarouselProps {
  viewType: string;
  onChangeViewType: (viewType: string) => void;
  children: React.ReactNode;
}

export const Carousel = ({
  children,
  viewType,
  onChangeViewType,
}: ICarouselProps) => {
  const handleSelectViewType = (viewType: string) => {
    onChangeViewType(viewType);
  };

  return (
    <MainContainer>
      <div className="flex justify-between items-center">
        <CarouselTitleHeader>Previous Rulings</CarouselTitleHeader>
        <Dropdown
          onChange={handleSelectViewType}
          value={viewType}
          options={VIEWMODE_OPTIONS}
        />
      </div>
      <CarouselContainer viewType={viewType}>{children}</CarouselContainer>
    </MainContainer>
  );
};
