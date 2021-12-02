import * as React from "react";
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
import { ICelebrity } from "../../types";
import { ActionVotesContainer } from "../thumb-button/ThumbButton.styles";
import { Button } from "../common-ui/button/Button";

interface CarouselCardProps {
  celebrity?: ICelebrity;
  viewType: string;
}

export const CarouselCard = ({ viewType }: CarouselCardProps) => {
  const [selectedButton, setSelectedButton] = React.useState("");

  const handleSelectButton = (selectedValue: string) => {
    if (selectedValue === selectedButton) {
      setSelectedButton("");
      return;
    }
    setSelectedButton(selectedValue);
  };

  const handleVote = () => {};

  return (
    <CarouselCardContainer>
      <ThumbButton viewType={viewType} absolute buttonType="up" />
      <CardBackdrop />
      <CardImage src={kanye} />
      <CardContent>
        <CardTitle>{ellipsisName("Kanye West")}</CardTitle>
        <CardDescription>
          Vesitbulum diam ante , porttitor a odio eget congue a felis faucibus
          eget congue a felis faucibus
        </CardDescription>
        <UpdateTimestamp>1 month ago in Entretainment</UpdateTimestamp>
        <ActionVotesContainer>
          <ThumbButton
            onClick={() => handleSelectButton("up")}
            isActive={selectedButton === "up"}
            viewType={viewType}
            buttonType="up"
          />
          <ThumbButton
            onClick={() => handleSelectButton("down")}
            isActive={selectedButton === "down"}
            viewType={viewType}
            buttonType="down"
          />
          <Button onClick={handleVote}>Vote now</Button>
        </ActionVotesContainer>
      </CardContent>
      <GaugeBar />
    </CarouselCardContainer>
  );
};
