'use client'
import React from 'react'
import { NavContainer, HeaderContainer, SearchbarContainer } from './Navbar.styles'
import { FiSearch } from "react-icons/fi";

export default function NavBar(): React.JSX.Element {
    const topics: string[] = ['Ақпарат', 'Әдебиет', 'Өнер', 'Ғылым', 'Эксклюзив', 'Карьера', 'Спорт', 'Тарих',];

    return (
        <NavContainer>
        <HeaderContainer>
          <p>Мен жастарға сенемін</p>
          <h2>Magzhan.kz</h2>
          <p>Мағжан Жұмабаев</p>
        </HeaderContainer>
        <SearchbarContainer>
          {topics.map((topic) => (
            <a key={topic}>{topic}</a>
          ))}
          <div>
            <FiSearch />
          </div>
        </SearchbarContainer>
      </NavContainer>
    );
}