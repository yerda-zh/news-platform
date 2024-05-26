// hook to manipulate with navbar component
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // navigates to another page by passing searchQuery in the url params
  const handleSearchClick = (): void => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
      setSearchQuery('');
    } else {
      router.push('/');
      setSearchQuery('');
    }
  };

  // used to trigger search action when the user click enter button
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return {
    searchQuery,
    handleSearchChange,
    handleSearchClick,
    handleKeyDown
  };
};
