import React from "react";
import {CardContainer,} from "./Card.styles";
import Tag from "../tag/Tag";
import { useRouter } from "next/navigation";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  tag: 'Ақпарат' | 'Әдебиет' | 'Өнер' | 'Ғылым' | 'Эксклюзив' | 'Карьера' | 'Спорт' | 'Тарих';
  type: "full" | "partial" | "plain";
}

const Card: React.FC<CardProps> = ({id, title, imageUrl, date, tag, type,}): JSX.Element => {
  const router = useRouter();

  const handleCardClick = (id: number): void => {
    router.push(`/post/${id}`);
  };

  return (
    <CardContainer
      type={type}
      bg={imageUrl}
      onClick={() => handleCardClick(id)}
    >
      <img src={imageUrl} alt={title} />
      <div>
        <Tag tag={tag} />
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
    </CardContainer>
  );
};
  
export default Card;