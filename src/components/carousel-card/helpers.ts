// Transform long names to ellipsis or shorten them
export const ellipsisName = (name: string = "", maxLength: number = 24) => {
  if (name.length > maxLength) {
    return `${name.slice(0, maxLength - 3)}...`;
  }
  return name;
};
