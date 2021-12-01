/**
 * @fileoverview
 * Should be in charge of display the carousel in the grid/list view.
 * In other words should be in charge of the layout of items displayed inside of it.
 * @returns
 */

interface ICarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: ICarouselProps) => {
  return (
    <div>
      Carousel
      {children}
    </div>
  );
};
