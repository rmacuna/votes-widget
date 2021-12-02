import { ThumbButtonContainer } from "./ThumbButton.styles";
import ThumbUp from "../../assets/svg/thumbup.svg";
import ThumbDown from "../../assets/svg/thumbdown.svg";

interface ThumbButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  absolute?: boolean;
  buttonType: "up" | "down";
  viewType: string;
}

export const ThumbButton = ({
  onClick,
  isActive,
  viewType,
  absolute,
  buttonType,
}: ThumbButtonProps) => {
  return (
    <ThumbButtonContainer
      isActive={isActive}
      viewType={viewType}
      buttonType={buttonType}
      onClick={onClick}
      absolute={absolute}
    >
      {buttonType === "up" ? (
        <img src={ThumbUp} alt="Thumbs up" />
      ) : (
        <img src={ThumbDown} alt="Thumbs down" />
      )}
    </ThumbButtonContainer>
  );
};
