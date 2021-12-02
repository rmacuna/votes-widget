// Create a function that returns the last modified from now to the date
const getLastModified = (date: string) => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const lastModified = new Date(now.getTime() - diff);
  return lastModified;
};

// Transform last modified into a readable string for example 1 month ago, 2 days ago etc
export const getLastModifiedString = (date: string) => {
  const lastModified = getLastModified(date);
  const seconds = Math.floor(
    (new Date().getTime() - lastModified.getTime()) / 1000
  );
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  interval = Math.floor(seconds);
  return interval > 0 ? `${interval} seconds ago` : "a moment ago";
};

export const calculatePercentageOfVotes = (
  positiveVotes: number,
  negativeVotes: number
) => {
  const total = positiveVotes + negativeVotes;
  const thumbsUp = (positiveVotes / total) * 100;
  const thumbsDown = (negativeVotes / total) * 100;

  // Get just the first decimal place
  const thumbsUpPercentage = Math.round(thumbsUp * 10) / 10;
  const thumbsDownPercentage = Math.round(thumbsDown * 10) / 10;

  return { thumbsUpPercentage, thumbsDownPercentage };
};
