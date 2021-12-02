import {
  GaugeBarContainer,
  NegativePercentage,
  PositivePercentage,
  ScoreContainer,
} from "./GaugeBar.styles";
import ThumbUp from "../../../assets/svg/thumbup.svg";
import ThumbDown from "../../../assets/svg/thumbdown.svg";

export const GaugeBar = () => {
  const total = 10;
  const thumbsUp = (2 * 100) / total; // FIXME: Add real data
  const thumbsDown = (8 * 100) / total;

  return (
    <GaugeBarContainer>
      <PositivePercentage percentage={thumbsUp}>
        <ScoreContainer>
          <img src={ThumbUp} alt="ThumbUp" />
          <span>{thumbsUp}%</span>
        </ScoreContainer>
      </PositivePercentage>
      <NegativePercentage percentage={thumbsDown}>
        <ScoreContainer>
          <span>{thumbsDown}%</span>
          <img src={ThumbDown} alt="ThumbDown" />
        </ScoreContainer>
      </NegativePercentage>
    </GaugeBarContainer>
  );
};
