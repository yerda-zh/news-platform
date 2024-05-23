'use client';
import React from 'react'
import { TagContainer } from './Tag.styles';

interface TagProps{
    tag: 'Ақпарат' | 'Әдебиет' | 'Өнер' | 'Ғылым' | 'Эксклюзив' | 'Карьера' | 'Спорт' | 'Тарих';
};

const Tag: React.FC<TagProps> = ({tag}) => {
  return (
    <TagContainer tag={tag}>{tag}</TagContainer>
  )
}

export default Tag