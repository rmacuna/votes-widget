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
import { useVote } from "./useVote";

interface CarouselCardProps {
  celebrity: ICelebrity;
  viewType: string;
}

export const CarouselCard = ({ viewType, celebrity }: CarouselCardProps) => {
  const {
    id,
    category,
    name,
    lastUpdated,
    picture,
    negativeVotes,
    positiveVotes,
    description,
  } = celebrity;
  const { downVote, handleOnVote, selectedVote, isVoted, upVote, loading } =
    useVote(id);
  const averageVotes = positiveVotes > negativeVotes ? "up" : "down";
  const { total, thumbsDownPercentage, thumbsUpPercentage } =
    calculatePercentageOfVotes(positiveVotes, negativeVotes);

  return (
    <CarouselCardContainer>
      <ThumbButton viewType={viewType} absolute buttonType={averageVotes} />
      <CardBackdrop />
      <CardImage src={picture} />
      <CardContent>
        <CardTitle>{ellipsisName(name)}</CardTitle>
        <CardDescription>
          {isVoted ? `Thank you for voting!` : description}
        </CardDescription>
        <UpdateTimestamp>
          {getLastModifiedString(lastUpdated)} in {category}
        </UpdateTimestamp>
        <ActionVotesContainer>
          {!isVoted && (
            <>
              <ThumbButton
                onClick={upVote}
                isActive={selectedVote === "up"}
                viewType={viewType}
                buttonType="up"
              />
              <ThumbButton
                onClick={downVote}
                isActive={selectedVote === "down"}
                viewType={viewType}
                buttonType="down"
              />
            </>
          )}

          <Button disabled={!selectedVote && !isVoted} onClick={handleOnVote}>
            {loading && "Voting..."}
            {isVoted && !loading && "Vote again!"}
            {!isVoted && !loading && "Vote now!"}
          </Button>
        </ActionVotesContainer>
      </CardContent>
      <GaugeBar
        positiveVotes={thumbsUpPercentage}
        negativeVotes={thumbsDownPercentage}
      />
    </CarouselCardContainer>
  );
};
