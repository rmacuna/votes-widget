import * as React from "react";
import {
  GaugeBarContainer,
  NegativePercentage,
  PositivePercentage,
  ScoreContainer,
} from "./GaugeBar.styles";
import ThumbUp from "../../../assets/svg/thumbup.svg";
import ThumbDown from "../../../assets/svg/thumbdown.svg";

interface GaugeBarProps {
  positiveVotes: number;
  negativeVotes: number;
}

export const GaugeBar = React.memo(
  ({ positiveVotes, negativeVotes }: GaugeBarProps) => {
    return (
      <GaugeBarContainer>
        <PositivePercentage percentage={positiveVotes}>
          <ScoreContainer>
            <img src={ThumbUp} alt="ThumbUp" />
            <span>{positiveVotes}%</span>
          </ScoreContainer>
        </PositivePercentage>
        <NegativePercentage percentage={negativeVotes}>
          <ScoreContainer>
            <span>{negativeVotes}%</span>
            <img src={ThumbDown} alt="ThumbDown" />
          </ScoreContainer>
        </NegativePercentage>
      </GaugeBarContainer>
    );
  }
);
