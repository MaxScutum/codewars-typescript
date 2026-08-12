export const likes = (nemesArray: string[]): string => {
  switch (nemesArray.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${nemesArray[0]} likes this`;
    case 2:
      return `${nemesArray[0]} and ${nemesArray[1]} like this`;
    case 3:
      return `${nemesArray[0]}, ${nemesArray[1]} and ${nemesArray[2]} like this`;
    default:
      return `${nemesArray[0]}, ${nemesArray[1]} and ${nemesArray.length - 2} others like this`;
  }
};
