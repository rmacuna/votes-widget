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
import { ThumbButton } from "../thumb-button/ThumbButton";

export const CarouselCard = () => {
  return (
    <CarouselCardContainer>
      <ThumbButton position="absolute" buttonType="up" />
      <CardBackdrop />
      <CardImage src={kanye} />
      <CardContent>
        <CardTitle>{ellipsisName("Kanye West")}</CardTitle>
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
