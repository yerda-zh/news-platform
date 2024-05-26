'use client'
import Card from '../components/card/Card';
import { MasonryLayout, } from '../components/postList/PostList.styles';
import { LoadingContainer } from '../components/loader/Loader.styles';
import { useSearchPosts } from '../hooks/useSearchPosts';
import { getCardType } from '../constants/functions';
import Loader from '../components/loader/Loader';
import { Post } from '../redux/postsSlice';

const SearchResults = (): JSX.Element => {
  const { loading, results, query }: {loading: boolean, results: Post[], query: string} = useSearchPosts();

  if(!results.length) return <LoadingContainer>{`No results found for ${query}`}</LoadingContainer>;

  return (
    <main>
      <Loader loading={loading} />
      <h1 style={{fontFamily: 'var(--font-main)', margin: '2rem 1rem 1rem 2.5rem'}}>{`Search Results for: ${query}`}</h1>
      <MasonryLayout style={{ padding: '3rem 2.5rem' }}>
        {results.map((post, index) => (
          <Card
            id ={post.id}
            key={post.id}
            type={getCardType(index)}
            title={post.title}
            imageUrl={post.imageUrl}
            date={post.date}
            tag={post.tag}
          />
        ))}
      </MasonryLayout>
    </main>
  );
}
export default SearchResults;