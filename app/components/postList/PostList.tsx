// used to display posts in the main pages according to masonry layout

import React from 'react';
import { MasonryContainer, MasonryLayout, FirstRow } from './PostList.styles'
import Card from '../card/Card';
import { Post } from '@/app/redux/postsSlice';
import { getCardType } from '@/app/constants/functions';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }): JSX.Element => {
  return (
    <MasonryContainer>
      <FirstRow>
        {posts.slice(0, 2).map((post, index) => (
          <Card
            id={post.id}
            type={getCardType(index)}
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            date={post.date}
            tag={post.tag}
          />
        ))}
      </FirstRow>
      <MasonryLayout>
        {posts.slice(2).map((post, index) => (
          <Card
            id={post.id}
            type={getCardType(index)}
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            date={post.date}
            tag={post.tag}
          />
        ))}
      </MasonryLayout>
    </MasonryContainer>
  );
};

export default PostList;
