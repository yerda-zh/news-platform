"use client";
import { useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import Card from "./components/card/Card";
import { MasonryContainer, FirstRow, MasonryLayout, LoadingContainer } from "./main.styles";
import Pagination from "./components/pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { addPosts } from "./redux/postsSlice";
import { useRouter } from "next/navigation";
// import { trio } from 'ldrs';


export default function Home(): JSX.Element {
  // trio.register();
  const router = useRouter();
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(14);
  const maxPosts: number = 62;

  const tags: string[] = ['Ақпарат', 'Әдебиет', 'Өнер', 'Ғылым', 'Эксклюзив', 'Карьера', 'Спорт', 'Тарих'];

  const getRandomTag = (): string => {
    return tags[Math.floor(Math.random() * tags.length)];
  };

  const getCardType = (index: number): 'full' | 'plain' | 'partial' => {
    const types: ('full' | 'plain' | 'partial')[] = ['full', 'plain', 'partial'];
    return types[index % types.length];
  };

  const getRandomDate = (): string => {
    const start = dayjs().subtract(1, 'year');
    const end = dayjs();
    const randomDate = new Date(start.valueOf() + Math.random() * (end.valueOf() - start.valueOf()));
    return dayjs(randomDate).format('DD MMMM YYYY');
  };

  const getRandomLikeCount = (): number => {
    return Math.floor(Math.random() * 51);
  };  

  const handleCardClick = (id: number): void => {
    router.push(`/post/${id}`);
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

      const data = await Promise.all(postsResponse.data.slice(0, maxPosts).map(async (post: any, index: number) => {
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

        return {
          id: post.id,
          title: post.title,
          body: post.body,
          imageUrl: `https://picsum.photos/id/${15+index}/1980/1080`,
          comments: commentsResponse.data,
          date: getRandomDate(),
          tag: getRandomTag(),
          likeCount: getRandomLikeCount(),
          liked: false,
        };
      }));

      dispatch(addPosts(data));
    } catch (error) {
      setError("An error occurred while fetching posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(posts.length !== 0) {
      return;
    }
    fetchPosts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  if (error) return <LoadingContainer>{error}</LoadingContainer>; 

  // if (loading || !posts.length)
  //   return (
  //     <LoadingContainer>
  //       <l-trio size="50" speed="0.9" color="black"></l-trio>
  //     </LoadingContainer>
  //   );
  
  return (
    <main>
      <MasonryContainer>
        <FirstRow>
          {currentPosts.slice(0, 2).map((post, index) => (
            <Card type={getCardType(index)} key={post.id} title={post.title} imageUrl={post.imageUrl} date={ post.date} tag={post.tag} onClick={() => handleCardClick(post.id)}/>
          ))}
        </FirstRow>
        <MasonryLayout>
          {currentPosts.slice(2).map((post, index) => (
            <Card type={getCardType(index)} key={post.id} title={post.title} imageUrl={post.imageUrl} date={ post.date} tag={post.tag} onClick={() => handleCardClick(post.id)}/>
          ))}
        </MasonryLayout>
      </MasonryContainer>
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={ currentPage} />
    </main>
  );
}
