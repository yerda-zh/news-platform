'use client'
import React from 'react'
import { NavContainer, HeaderContainer, SearchbarContainer, SearchInput } from './Navbar.styles'
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NavBar(): React.JSX.Element {
    const router = useRouter();
    const topics: string[] = ['Ақпарат', 'Әдебиет', 'Өнер', 'Ғылым', 'Эксклюзив', 'Карьера', 'Спорт', 'Тарих',];
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleTagClick = (tag: string) => {
      router.push(`/post/tag/${tag}`);
    };

    const handleMainClick = () => {
      router.push('/');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
      if (searchQuery.trim()) {
        router.push(`/search?query=${searchQuery}`);
        setSearchQuery('');
      } else {
        router.push('/');
        setSearchQuery('');
      }
    };

    return (
        <NavContainer>
        <HeaderContainer>
          <p>Мен жастарға сенемін</p>
          <h2 onClick={handleMainClick}>Magzhan.kz</h2>
          <p>Мағжан Жұмабаев</p>
        </HeaderContainer>
        <SearchbarContainer>
          {topics.map((topic) => (
            <a key={topic} onClick={() => handleTagClick(topic)}>{topic}</a>
          ))}
          <div>
            <SearchInput type="text" placeholder="Іздеу..." value={searchQuery} onChange={handleSearchChange}/>
            <FiSearch onClick={handleSearchClick} style={{cursor: 'pointer'}}/>
          </div>
        </SearchbarContainer>
      </NavContainer>
    );
}