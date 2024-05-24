'use client';
import React from 'react'
import { FooterContainer } from './Footer.styles';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const topics: string[] = ['Ақпарат', 'Әдебиет', 'Өнер', 'Ғылым', 'Эксклюзив', 'Карьера', 'Спорт', 'Тарих',];

  const handleTagClick = (tag: string) => {
    router.push(`/post/tag/${tag}`);
  };
  
  return (
    <FooterContainer>
      <div>
        {topics.map((topic) => (
          <a key={topic} onClick={() => handleTagClick(topic)}>{topic}</a>
        ))}
      </div>
      <div>
        <p>Байлыныс үшін: magzhankz@gmail.com</p>
      </div>
      <div>
        <p>Барлық құқықтар сақталған@2024</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;