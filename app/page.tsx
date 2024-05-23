"use client";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./components/card/Card";
import { MasonryContainer, FirstRow, MasonryLayout } from "./main.styles";
import Pagination from "./components/pagination/Pagination";

type Post = {
  id: number;
  title: string;
  // body: string;
  date: string;
  url: string;
  imageUrl: string;
};

export default function Home(): JSX.Element {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(14);

  
  const getCardType = (index: number): 'full' | 'plain' | 'partial' => {
    const types: ('full' | 'plain' | 'partial')[] = ['full', 'plain', 'partial'];
    return types[index % types.length];
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const data = response.data.slice(0, 62).map((post: any, index: number) => ({
          ...post,
          imageUrl: `https://picsum.photos/id/${15+index}/1980/1080`,
          date: '12 June 2019', // Example date
        }));
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  // console.log(posts);
  return (
    <main>
      <MasonryContainer>
        <FirstRow>
          {currentPosts.slice(0, 2).map((post, index) => (
            <Card type={getCardType(index)} key={post.id} title={post.title} imageUrl={post.imageUrl} date={ post.date} tag='Ақпарат'/>
          ))}
        </FirstRow>
        <MasonryLayout>
          {currentPosts.slice(2).map((post, index) => (
            <Card type={getCardType(index)} key={post.id} title={post.title} imageUrl={post.imageUrl} date={ post.date} tag='Ақпарат'/>
          ))}
        </MasonryLayout>
      </MasonryContainer>
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={ currentPage} />
    </main>
  );
}
