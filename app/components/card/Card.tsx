import React from "react";
import {
  CardContainer,
} from "./Card.styles";
import Tag from "../tag/Tag";

interface CardProps {
  title: string;
  imageUrl: string;
  date: string;
  tag: 'Ақпарат' | 'Әдебиет' | 'Өнер' | 'Ғылым' | 'Эксклюзив' | 'Карьера' | 'Спорт' | 'Тарих';
  type: "full" | "partial" | "plain";
}

const Card: React.FC<CardProps> = ({ title, imageUrl, date, tag, type }) => {
    return (
      <CardContainer type={type} bg={imageUrl}>
        <img src={imageUrl} alt={title} />
        <div>
          <Tag tag={tag}/>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
      </CardContainer>
    );
  };
  
export default Card;