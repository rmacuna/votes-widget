/**
 * @fileoverview
 * This is the Widget that will be rendered in the website.
 * The purpose is to display the list of controvertial people and the sentiments of the people to them.
 *
 * @returns {React.ReactElement}¡
 */

import { CarouselCard } from "../components/carousel-card/CarouselCard";
import { Carousel } from "../components/carousel/Carousel";

export const CarouselVotes = () => {
  return (
    <>
      <Carousel>
        {/* Map an render 15 blue squares */}
        {[...Array(5)].map((_, index) => (
          <CarouselCard key={index} />
        ))}
      </Carousel>
    </>
  );
};
