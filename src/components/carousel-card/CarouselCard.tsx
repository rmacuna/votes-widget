import * as React from "react";
import {
  CardBackdrop,
  CardContent,
  CardContentFlexArea,
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
  const { thumbsDownPercentage, thumbsUpPercentage } =
    calculatePercentageOfVotes(positiveVotes, negativeVotes);

  return (
    <CarouselCardContainer viewType={viewType}>
      <ThumbButton viewType={viewType} absolute buttonType={averageVotes} />
      <CardBackdrop viewType={viewType} />
      <CardImage viewType={viewType} src={picture} />
      <CardTitle>{ellipsisName(name)}</CardTitle>
      <CardContent>
        <CardContentFlexArea viewType={viewType}>
          <CardDescription>
            {isVoted ? `Thank you for voting!` : description}
          </CardDescription>
          <ActionVotesContainer viewType={viewType}>
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

            <Button
              width="137px"
              disabled={!selectedVote && !isVoted}
              onClick={handleOnVote}
            >
              {loading && "Voting..."}
              {isVoted && !loading && "Vote again!"}
              {!isVoted && !loading && "Vote now!"}
            </Button>
          </ActionVotesContainer>
        </CardContentFlexArea>
        <UpdateTimestamp viewType={viewType}>
          {getLastModifiedString(lastUpdated)} in {category}
        </UpdateTimestamp>
      </CardContent>
      <GaugeBar
        positiveVotes={thumbsUpPercentage}
        negativeVotes={thumbsDownPercentage}
      />
    </CarouselCardContainer>
  );
};
