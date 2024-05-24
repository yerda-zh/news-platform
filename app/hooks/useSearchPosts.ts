import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

export const useSearchPosts = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || ''; // query from url that was passed in the navbar component
  const posts = useSelector((state: RootState) => state.posts);

  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);

  // used to filter posts which include query either in the title or body
  useEffect(() => {
    if (query) {
      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
      );
      setResults(filteredPosts);
    } else {
      setResults([]);
    }
    setLoading(false);
  }, [query, posts]);

  return { loading, results, query };
};
