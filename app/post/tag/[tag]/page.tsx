'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { RootState } from '@/app/redux/store';
import Card from '@/app/components/card/Card';
import { MasonryLayout } from '@/app/main.styles';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const PostsByTag = () => {
    const router = useRouter();
    const params = useParams();
    const { tag } = params;
    const posts = useSelector((state: RootState) => state.posts.filter(post => post.tag === decodeURIComponent(tag as string)));

    const getCardType = (index: number): 'full' | 'plain' | 'partial' => {
        const types: ('full' | 'plain' | 'partial')[] = ['full', 'plain', 'partial'];
        return types[index % types.length];
    };

    const handleCardClick = (id: number): void => {
        router.push(`/post/${encodeURIComponent(id)}`);
    };

    return (
        <MasonryLayout style={{ padding: '1rem 2.5rem' }}>
            {posts.map((post, index) => (
                <Card 
                    key={post.id} 
                    type={getCardType(index)} 
                    title={post.title} 
                    imageUrl={post.imageUrl} 
                    date={post.date} 
                    tag={post.tag} 
                    onClick={() => handleCardClick(post.id)}
                />
            ))}
        </MasonryLayout>
    );
}

export default PostsByTag;
