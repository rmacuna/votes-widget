/**
 * @fileoverview
 * This is the Widget that will be rendered in the website.
 * The purpose is to display the list of controvertial people and the sentiments of the people to them.
 *
 * @returns {React.ReactElement}¡
 */

import * as React from "react";
import { CarouselCard } from "../components/carousel-card/CarouselCard";
import { Carousel } from "../components/carousel/Carousel";

export const CarouselVotes = () => {
  const [viewType, setViewType] = React.useState("list");

  const handleChangeViewType = (viewType: string) => {
    setViewType(viewType);
  };

  return (
    <>
      <Carousel viewType={viewType} onChangeViewType={handleChangeViewType}>
        {/* Map an render 15 blue squares */}
        {[...Array(5)].map((_, index) => (
          <CarouselCard viewType={viewType} key={index} />
        ))}
      </Carousel>
    </>
  );
};
