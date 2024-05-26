// to filter according to tags
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { Post } from '../redux/postsSlice';

export const usePostsByTag = (tag: string): Post[] => {
  const decodedTag: string = decodeURIComponent(tag); // used because tag is in kazakh language

  // to select posts corresponding to that specific tag
  const posts: Post[] = useSelector((state: RootState) =>
    state.posts.filter(post => post.tag === decodedTag)
  );
  return posts;
};