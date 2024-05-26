'use client'
import React from 'react'
import { NavContainer, HeaderContainer, SearchbarContainer, SearchInput, SearchIcon, } from './Navbar.styles';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/app/hooks/useNavbar';
import { tags } from '@/app/constants/tags';

export default function NavBar(): JSX.Element {
    const router = useRouter();
    const { searchQuery, handleSearchChange, handleSearchClick, handleKeyDown } = useSearch();

    const handleTagClick = (tag: string): void => {
      router.push(`/post/tag/${tag}`);
    };

    const handleMainClick = (): void => {
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