// useFetchPosts fetched posts, comments from jsonplaceholder, additionally using picsum photos and create data object
// data object is then used to set redux state since the application uses this state in multiple pages

import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../redux/postsSlice";
import { getRandomTag, getRandomDate, getRandomLikeCount } from "../constants/functions";
import { RootState } from "../redux/store";

const maxPosts = 62;

export const useFetchPosts = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(posts.length) {
      setLoading(false);
      return;
    }
    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

        const data = await Promise.all(postsResponse.data.slice(0, maxPosts).map(async (post: any, index: number) => {
          const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

          return {
            id: post.id,
            title: post.title,
            body: post.body,
            imageUrl: `https://picsum.photos/id/${15 + index}/1980/1080`,
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

    fetchPosts();
  }, []);

  return { loading, error };
};
