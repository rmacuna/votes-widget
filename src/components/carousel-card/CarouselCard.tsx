import {
  CardBackdrop,
  CardContent,
  CardContentFlexArea,
  CardDescription,
  CardImage,
  CardTitle,
  CarouselCardContainer,
  ActionVotesContainer,
  UpdateTimestamp,
  CardHeader,
} from "./CarouselCard.styles";
import { GaugeBar } from "./gauge-bar/GaugeBar";
import { ellipsisName } from "./helpers";
import { ThumbButton, ThumbIcon } from "../common-ui/ThumbButton";
import { ICelebrity } from "../../types";
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
      <CardBackdrop viewType={viewType} />
      <CardImage viewType={viewType} src={picture} />

      <CardHeader viewType={viewType}>
        <ThumbButton
          marginRight="0px"
          buttonType={averageVotes}
          viewType={viewType}
        >
          <ThumbIcon icon={averageVotes} />
        </ThumbButton>
        <CardTitle viewType={viewType}>{ellipsisName(name)}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardContentFlexArea viewType={viewType}>
          <CardDescription viewType={viewType}>{description}</CardDescription>
          <ActionVotesContainer viewType={viewType}>
            {!isVoted && (
              <>
                <ThumbButton
                  buttonType="up"
                  viewType={viewType}
                  isActive={selectedVote === "up"}
                  onClick={upVote}
                >
                  <ThumbIcon icon="up" />
                </ThumbButton>
                <ThumbButton
                  buttonType="down"
                  viewType={viewType}
                  onClick={downVote}
                  isActive={selectedVote === "down"}
                >
                  <ThumbIcon icon="down" />
                </ThumbButton>
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
          {isVoted
            ? `Thank you for your vote!`
            : `${getLastModifiedString(lastUpdated)} in ${category}`}
        </UpdateTimestamp>
      </CardContent>
      <GaugeBar
        positiveVotes={thumbsUpPercentage}
        negativeVotes={thumbsDownPercentage}
      />
    </CarouselCardContainer>
  );
};
