import * as React from "react";
import { CarouselCard } from "../components/carousel-card/CarouselCard";
import { Carousel } from "../components/carousel/Carousel";
import { useCelebrities } from "../components/common-utils/useCelebrities";

export const CarouselVotes = () => {
  const [viewType, setViewType] = React.useState("list");
  const { getAllCelebrities, data, error, loading } = useCelebrities();

  const handleChangeViewType = (viewType: string) => {
    setViewType(viewType);
  };

  React.useEffect(() => {
    getAllCelebrities();
  }, [getAllCelebrities]);

  return (
    <>
      <Carousel viewType={viewType} onChangeViewType={handleChangeViewType}>
        {loading && <div>Loading celebrities...</div>}
        {error && <div>Error while fetching the celebrities</div>}
        {data &&
          data.map((celebrity, index) => (
            <CarouselCard
              celebrity={celebrity}
              viewType={viewType}
              key={index}
            />
          ))}
      </Carousel>
    </>
  );
};
