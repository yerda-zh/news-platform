import React from "react";
import {
  CardContainer,
  CardTag,
} from "./Card.styles";

interface CardProps {
  title: string;
  imageUrl: string;
  date: string;
  tag: string;
  type: "full" | "partial" | "plain";
}

const Card: React.FC<CardProps> = ({ title, imageUrl, date, tag, type }) => {
    return (
      <CardContainer type={type} bg={imageUrl}>
        <img src={imageUrl} alt={title} />
        <div>
          <CardTag>{tag}</CardTag>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
      </CardContainer>
    );
  };
  
export default Card;