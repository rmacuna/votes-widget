import { FirebaseError } from "@firebase/util";
import * as React from "react";
import { firebaseService } from "../..";

export const useVote = (celebrityId: string) => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [selectedVote, setSelectedVote] = React.useState("");
  const [isVoted, setIsVoted] = React.useState(false);

  const vote = React.useCallback(
    (vote: string) => {
      if (selectedVote === vote) {
        setSelectedVote("");
        return;
      }
      setSelectedVote(vote);
    },
    [selectedVote]
  );

  const handleOnVote = async () => {
    try {
      if (isVoted) {
        setIsVoted(false);
        setSelectedVote("");
        return;
      }
      if (selectedVote === "up")
        await firebaseService.upVoteCelebrity(celebrityId);
      if (selectedVote === "down")
        await firebaseService.downVoteCelebrity(celebrityId);
      setIsVoted(true);
      setSelectedVote("");
    } catch (error) {
      const firebaseErr = error as FirebaseError;
      setError(firebaseErr.message);
    } finally {
      setLoading(false);
    }
  };
  const upVote = () => vote("up");
  const downVote = () => vote("down");

  return {
    upVote,
    downVote,
    isVoted,
    handleOnVote,
    error,
    selectedVote,
    loading,
  };
};
