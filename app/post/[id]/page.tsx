// pages/post/[id].tsx
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

const Post = () => {
  const { post, otherPosts, postId } = usePost();
  const dispatch = useDispatch<AppDispatch>();

  const handleLikeClick = () => {
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

export default Post;
