'use client'
import React from 'react';
import { RootState } from '@/app/redux/store';
import Card from '@/app/components/card/Card';
import { LoadingContainer } from '@/app/components/loader/Loader.styles';
import { MasonryLayout } from '@/app/components/postList/PostList.styles';
import { useParams } from 'next/navigation';
import { getCardType } from '@/app/constants/functions';
import { usePostsByTag } from '@/app/hooks/useTag';
import { Post } from '@/app/redux/postsSlice';

const PostsByTag = (): JSX.Element => {
    const params = useParams();
    const { tag } = params;
    const posts: Post[] = usePostsByTag(tag as string);

    if (!posts.length) {
      return (
        <LoadingContainer>{`No results found for ${decodeURIComponent(tag as string)}`}</LoadingContainer>
      );
    }

    return (
      <MasonryLayout style={{ padding: "3rem 2.5rem" }}>
        {posts.map((post, index) => (
          <Card
            id={post.id}
            key={post.id}
            type={getCardType(index)}
            title={post.title}
            imageUrl={post.imageUrl}
            date={post.date}
            tag={post.tag}
          />
        ))}
      </MasonryLayout>
    );
}

export default PostsByTag;
