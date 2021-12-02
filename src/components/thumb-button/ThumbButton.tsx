import { ThumbButtonContainer } from "./ThumbButton.styles";
import ThumbUp from "../../assets/svg/thumbup.svg";

interface ThumbButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  position: "absolute" | "relative";
  buttonType: "up" | "down";
}

export const ThumbButton = ({
  onClick,
  isActive,
  position,
  buttonType,
}: ThumbButtonProps) => {
  return (
    <ThumbButtonContainer
      buttonType={buttonType}
      onClick={onClick}
      position={position}
    >
      <img src={ThumbUp} alt="Thumbs up" />
    </ThumbButtonContainer>
  );
};
