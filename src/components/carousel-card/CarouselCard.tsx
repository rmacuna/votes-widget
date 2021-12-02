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
import { ellipsisName } from "./helpers";
import { ThumbButton } from "../thumb-button/ThumbButton";
import { ICelebrity } from "../../types";
import { ActionVotesContainer } from "../thumb-button/ThumbButton.styles";
import { Button } from "../common-ui/button/Button";
import {
  calculatePercentageOfVotes,
  getLastModifiedString,
} from "../common-utils/helpers";

interface CarouselCardProps {
  celebrity: ICelebrity;
  viewType: string;
}

export const CarouselCard = ({ viewType, celebrity }: CarouselCardProps) => {
  const {
    category,
    name,
    lastUpdated,
    picture,
    negativeVotes,
    positiveVotes,
    description,
  } = celebrity;

  const [selectedButton, setSelectedButton] = React.useState("");
  const averageVotes = positiveVotes > negativeVotes ? "up" : "down";
  const { total, thumbsDownPercentage, thumbsUpPercentage } =
    calculatePercentageOfVotes(positiveVotes, negativeVotes);

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
      <ThumbButton viewType={viewType} absolute buttonType={averageVotes} />
      <CardBackdrop />
      <CardImage src={picture} />
      <CardContent>
        <CardTitle>{ellipsisName(name)}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <UpdateTimestamp>
          {getLastModifiedString(lastUpdated)} in {category}
        </UpdateTimestamp>
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
      <GaugeBar
        positiveVotes={thumbsUpPercentage}
        negativeVotes={thumbsDownPercentage}
        total={total}
      />
    </CarouselCardContainer>
  );
};
