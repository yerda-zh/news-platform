'use client';
import React, { useState } from 'react'
import Tag from '../../components/tag/Tag'
import { MasonryLayout } from '../../main.styles'
import Card from '../../components/card/Card'
import { DetailedContainer, ButtonsContainer, Button, } from './detailed.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useParams } from 'next/navigation';
import { BiSolidLike } from "react-icons/bi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import Comment from '@/app/components/comment/Comment';
import { useRouter } from 'next/navigation';
import { incrementLikeCount, decrementLikeCount } from '@/app/redux/postsSlice';

const Post = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const postId = parseInt(id as string, 10);
  const post = useSelector((state: RootState) => state.posts.find(p => p.id === postId));
  const otherPosts = useSelector((state: RootState) => state.posts).slice(postId, postId + 6);

  const getCardType = (index: number): 'full' | 'plain' | 'partial' => {
    const types: ('full' | 'plain' | 'partial')[] = ['full', 'plain', 'partial'];
    return types[index % types.length];
  };

  const handleCardClick = (id: number): void => {
    router.push(`/post/${id}`);
  };

  const handleLikeClick = () => {
    if(!post?.liked) {
      dispatch(incrementLikeCount(postId));
    } else {
      dispatch(decrementLikeCount(postId));
    }
  }

  if (!post)
    return (
      <div
        style={{
          width: "100vw",
          height: "50vh",
          textAlign: "center",
          fontSize: "1.25rem",
          paddingTop: "2rem",
        }}
      >
        Post not found
      </div>
    );

  return (
    <>
      <DetailedContainer>
        <h1>{post.title}</h1>
        <div>
            <Tag tag={post.tag}/>
            <p>{post.date}</p>
        </div>
        <img src={post.imageUrl}/>
        <p className='body-text'>{post.body}</p>

        <ButtonsContainer>
            <Button liked={post.liked} onClick={handleLikeClick} buttonType = 'light'><BiSolidLike/> Ұнайды ({post.likeCount})</Button>
            <Button buttonType = 'light'><FaFacebook /> <FaTwitter /> <FaVk /> </Button>
        </ButtonsContainer>
        <h4>Пікірлер ({post.comments.length})</h4>
        {post.comments.map((comment)=> (
          <>
            <Comment body={comment.body} email={comment.email} mine = {false}/>
            <div className='divider'/>
          </>
        ))}
        <textarea placeholder='Пікіріңізді жазыңыз...'/>
        <Button  style={{ marginLeft: "auto" }} buttonType='dark'>Қосу</Button>
      </DetailedContainer>
      <MasonryLayout style={{background: 'var(--color-white)', padding: '6rem 3rem'}}>
          {otherPosts.map((post, index) => (
            <Card type={getCardType(index)} key={post.id} title={post.title} imageUrl={post.imageUrl} date={ post.date} tag={post.tag} onClick={() => handleCardClick(post.id)}/>
          ))}
      </MasonryLayout>
    </>
  )
}

export default Post;