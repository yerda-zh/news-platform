// hook to manage redux state and return post, 6 after posts, and postId
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Post } from '../redux/postsSlice';

const usePost = (): {post: Post | undefined; otherPosts: Post[]; postId: number;} => {
  const params = useParams();
  const { id } = params;
  const postId: number = parseInt(id as string, 10);

  const post: Post | undefined = useSelector((state: RootState) => state.posts.find(p => p.id === postId));
  const otherPosts: Post[] = useSelector((state: RootState) => state.posts).slice(postId, postId + 6);

  return { post, otherPosts, postId };
};

export default usePost;
