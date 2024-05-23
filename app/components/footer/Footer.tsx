'use client';
import React from 'react'
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  const topics: string[] = ['Ақпарат', 'Әдебиет', 'Өнер', 'Ғылым', 'Эксклюзив', 'Карьера', 'Спорт', 'Тарих',];  
  
  return (
    <FooterContainer>
      <div>
        {topics.map((topic) => (
          <a>{topic}</a>
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