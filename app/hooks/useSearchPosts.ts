// hook to manage search functionallity of the app
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { Post } from '../redux/postsSlice';

export const useSearchPosts = (): {loading: boolean; results: Post[]; query: string;} => {
  const searchParams = useSearchParams();
  const query: string = searchParams.get('query')?.toLowerCase() || ''; // query from url that was passed in the navbar component
  const posts = useSelector((state: RootState) => state.posts);

  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<Post[]>([]);

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
