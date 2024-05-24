import { tags } from "../constants/tags";
import dayjs from "dayjs";

export const getRandomTag = (): string => {
  return tags[Math.floor(Math.random() * tags.length)];
};

export const getCardType = (index: number): "full" | "plain" | "partial" => {
  const types: ("full" | "plain" | "partial")[] = ["full", "plain", "partial"];
  return types[index % types.length];
};

export const getRandomDate = (): string => {
  const start = dayjs().subtract(1, "year");
  const end = dayjs();
  const randomDate = new Date(
    start.valueOf() + Math.random() * (end.valueOf() - start.valueOf())
  );
  return dayjs(randomDate).format("DD MMMM YYYY");
};

export const getRandomLikeCount = (): number => {
  return Math.floor(Math.random() * 51);
};  
