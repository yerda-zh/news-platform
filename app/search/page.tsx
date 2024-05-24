'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Card from '../components/card/Card';
import { MasonryLayout, LoadingContainer } from '../main.styles';
import { trio } from 'ldrs';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function SearchResults(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);

  const query = searchParams.get('query');

  const posts = useSelector((state: RootState) => state.posts);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      import('ldrs').then(({ trio }) => {
        trio.register();
      });
    }
  }, []);

  useEffect(() => {
    if(query) {
        setLoading(true);
        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.body.toLowerCase().includes(query.toLowerCase())
          );
        setResults(filteredPosts);
        setLoading(false);
      }
  }, [query]);


  const handleCardClick = (id: number): void => {
    router.push(`/post/${id}`);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <l-trio size="50" speed="0.9" color="black"></l-trio>
      </LoadingContainer>
    );
  }

  if (!results.length) {
    return <LoadingContainer>No results found for "{query}"</LoadingContainer>;
  }

  return (
    <main>
        <h1 style={{fontFamily: 'var(--font-main)', margin: '2rem 1rem 1rem 2.5rem'}}>Search Results for: {query}</h1>
      <MasonryLayout style={{ padding: '1rem 2.5rem' }}>
        {results.map((post, index) => (
          <Card
            key={post.id}
            type={index % 3 === 0 ? 'full' : index % 2 === 0 ? 'plain' : 'partial'}
            title={post.title}
            imageUrl={`https://picsum.photos/id/${15 + index}/1980/1080`}
            date={new Date().toLocaleDateString()}
            tag={post.tag}
            onClick={() => handleCardClick(post.id)}
          />
        ))}
      </MasonryLayout>
    </main>
  );
}
