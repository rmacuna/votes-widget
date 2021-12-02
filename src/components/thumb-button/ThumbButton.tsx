import { ThumbButtonContainer } from "./ThumbButton.styles";
import ThumbUp from "../../assets/svg/thumbup.svg";

interface ThumbButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  position: "absolute" | "relative";
  buttonType: "up" | "down";
  viewType: string;
}

export const ThumbButton = ({
  onClick,
  isActive,
  viewType,
  position,
  buttonType,
}: ThumbButtonProps) => {
  return (
    <ThumbButtonContainer
      isActive={isActive}
      viewType={viewType}
      buttonType={buttonType}
      onClick={onClick}
      position={position}
    >
      <img src={ThumbUp} alt="Thumbs up" />
    </ThumbButtonContainer>
  );
};
