import {
  CardBackdrop,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  CarouselCardContainer,
  UpdateTimestamp,
} from "./CarouselCard.styles";
import { GaugeBar } from "./gauge-bar/GaugeBar";
import kanye from "../../assets/img/kanye.jpeg";
import { ellipsisName } from "./helpers";

export const CarouselCard = () => {
  return (
    <CarouselCardContainer>
      <CardBackdrop />
      <CardImage src={kanye} />
      <CardContent>
        <CardTitle>{ellipsisName("Cristina de Fernandez Aguilar")}</CardTitle>
        <CardDescription>
          Vesitbulum diam ante , porttitor a odio eget congue a felis faucibus
          eget congue a felis faucibus
        </CardDescription>
      </CardContent>
      <UpdateTimestamp>1 month ago in Entretainment</UpdateTimestamp>
      <GaugeBar />
    </CarouselCardContainer>
  );
};
