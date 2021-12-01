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
        {[].map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </Carousel>
    </>
  );
};
