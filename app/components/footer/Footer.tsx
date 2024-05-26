'use client';
import React from 'react'
import { FooterContainer } from './Footer.styles';
import { useRouter } from 'next/navigation';
import { tags } from '@/app/constants/tags';

const Footer = (): JSX.Element => {
  const router = useRouter();

  const handleTagClick = (tag: string): void => {
    router.push(`/post/tag/${tag}`);
  };
  
  return (
    <FooterContainer>
      <div>
        {tags.map((tag) => (
          <a key={tag} onClick={() => handleTagClick(tag)}>{tag}</a>
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