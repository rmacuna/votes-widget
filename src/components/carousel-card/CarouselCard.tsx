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

export const CarouselCard = () => {
  return (
    <CarouselCardContainer>
      <CardBackdrop />
      <CardImage src={kanye} />
      <CardContent>
        <CardTitle>Cristina de Fernandez Aguilar</CardTitle>
        <CardDescription>
          Vesitbulum diam ante , porttitor a odio eget congue a felis faucibus
          eget congue a felis faucibus
        </CardDescription>
        <UpdateTimestamp>1 month ago in Entretainment</UpdateTimestamp>
      </CardContent>

      <GaugeBar />
    </CarouselCardContainer>
  );
};
