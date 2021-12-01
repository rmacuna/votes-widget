/**
 * @fileoverview
 * This is the Widget that will be rendered in the website.
 * The purpose is to display the list of controvertial people and the sentiments of the people to them.
 *
 * @returns {React.ReactElement}¡
 */

import { Carousel } from "../components/carousel/Carousel";

export const CarouselVotes = () => {
  return (
    <>
      <Carousel>
        {/* Map an render 15 blue squares */}
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              backgroundColor: "blue",
              height: "100px",
              marginRight: 10,
              minWidth: "100px",
            }}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </>
  );
};
