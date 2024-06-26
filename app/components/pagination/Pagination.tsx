'use client';
import React from "react";
import { PaginationContainer } from "./Pagination.styles";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({totalPosts, postsPerPage, setCurrentPage, currentPage}): JSX.Element => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  } // to decide on the number of pages according to total posts and posts per page

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <PaginationContainer>
      {pages.map((page, index) => (
        <button key={index} onClick={() => handlePageClick(page)} className={page === currentPage ? 'active' : ''}>
          {page}
        </button>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
