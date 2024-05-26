'use client';
import React from 'react';
import usePost from '../../hooks/usePost';
import PostDetails from '@/app/components/postDetails/postDetails';
import PostComments from '@/app/components/postComments/postComments';
import OtherPosts from '@/app/components/otherPosts/otherPosts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { incrementLikeCount, decrementLikeCount } from '../../redux/postsSlice';
import { PostContainer } from './detailed.styles';
import { LoadingContainer } from '@/app/components/loader/Loader.styles';
import { Post } from '../../redux/postsSlice';

const PostPage = (): JSX.Element => {
  const { post, otherPosts, postId }: {post:  Post | undefined; otherPosts: Post[]; postId: number;} = usePost();
  const dispatch = useDispatch<AppDispatch>();

  const handleLikeClick = (): void => {
    if (post && !post.liked) {
      dispatch(incrementLikeCount(postId));
    } else {
      dispatch(decrementLikeCount(postId));
    }
  };

  if (!post)
    return (
      <LoadingContainer>Post not found</LoadingContainer>
    );

  return (
    <>
      <PostContainer>
        <PostDetails post={post} onLikeClick={handleLikeClick} />
        <PostComments postId={postId} comments={post.comments} />
      </PostContainer>
      <OtherPosts posts={otherPosts} />
    </>
    
  );
}

export default PostPage;
