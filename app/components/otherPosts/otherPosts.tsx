// 6 other posts under the selected post
import React from 'react';
import { MasonryLayout } from '../postList/PostList.styles';
import Card from '../card/Card';
import { getCardType } from '@/app/constants/functions';

interface OtherPostsProps {
  posts: any[];
}

const OtherPosts: React.FC<OtherPostsProps> = ({ posts }) => {
  return (
    <MasonryLayout style={{ background: "var(--color-white)", padding: "6rem 3rem" }}>
      {posts.map((post, index) => (
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
  );
};

export default OtherPosts;
