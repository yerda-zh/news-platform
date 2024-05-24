'use client'
import React from 'react'
import { NavContainer, HeaderContainer, SearchbarContainer, SearchInput, SearchIcon, } from './Navbar.styles'
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { useSearch } from '@/app/hooks/useNavbar';
import { tags } from '@/app/constants/tags';

export default function NavBar(): React.JSX.Element {
    const router = useRouter();
    const { searchQuery, handleSearchChange, handleSearchClick, handleKeyDown } = useSearch();

    const handleTagClick = (tag: string) => {
      router.push(`/post/tag/${tag}`);
    };

    const handleMainClick = () => {
      router.push('/');
    };

    return (
      <NavContainer>
        <HeaderContainer>
          <p>Мен жастарға сенемін</p>
          <h2 onClick={handleMainClick}>Magzhan.kz</h2>
          <p>Мағжан Жұмабаев</p>
        </HeaderContainer>
        <SearchbarContainer>
          {tags.map((tag) => (
            <a key={tag} onClick={() => handleTagClick(tag)}>
              {tag}
            </a>
          ))}
          <div>
            <SearchInput
              type="text"
              placeholder="Іздеу..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <SearchIcon
              onClick={handleSearchClick}
            />
          </div>
        </SearchbarContainer>
      </NavContainer>
    );
}