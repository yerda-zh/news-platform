import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

export const usePostsByTag = (tag: string) => {
  const decodedTag = decodeURIComponent(tag); // used because tag is in kazakh language

  // to select posts corresponding to that specific tag
  const posts = useSelector((state: RootState) =>
    state.posts.filter(post => post.tag === decodedTag)
  );
  return posts;
};