import { tags } from "../constants/tags";
import dayjs from "dayjs";

// since given api does not have tags section, there is a function to randomly assign tags to each post
export const getRandomTag = (): string => {
  return tags[Math.floor(Math.random() * tags.length)];
};

// Cards have three different looks, and they are assigned one by one to each post component
// which is then used to display different designs
type CardType = "full" | "plain" | "partial";

export const getCardType = (index: number): CardType => {
  const types: CardType[] = ["full", "plain", "partial"];
  return types[index % types.length];
};

// used dayjs to randomly assign date to each post. The dates are within last year
export const getRandomDate = (): string => {
  const start = dayjs().subtract(1, "year");
  const end = dayjs();
  const randomDate = new Date(
    start.valueOf() + Math.random() * (end.valueOf() - start.valueOf())
  );
  return dayjs(randomDate).format("DD MMMM YYYY");
};

// to get random like count between 0 and 50 since api does not include like count
export const getRandomLikeCount = (): number => {
  return Math.floor(Math.random() * 50);
};  
