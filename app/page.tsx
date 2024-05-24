"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useFetchPosts } from "./hooks/useFetchPosts";
import Loader from "./components/loader/Loader";
import PostList from "./components/postList/PostList";
import Pagination from "./components/pagination/Pagination";

export default function Home(): JSX.Element {
  const posts = useSelector((state: RootState) => state.posts); // redux state

  // useFetchPosts fetches posts to set redux state and return loading and error states
  const { loading, error } = useFetchPosts();

  const [currentPage, setCurrentPage] = useState<number>(1);

  // used for dividing posts into different pages
  const postsPerPage = 14;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <main>
      <Loader loading={loading} error={error} />
      {!loading && !error && posts.length > 0 && (
        <>
          <PostList posts={currentPosts}/>
          <Pagination
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </main>
  );
}
