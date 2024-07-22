// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import BlogPostItem from './BlogPostItem';
import { Container, Row, Pagination } from 'react-bootstrap';

const BlogList = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const paginationRange = 3; // Number of pagination items to show

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`https://localhost:5000/api/posts?page=${page}`);
      const data = await response.json();
      setPosts(data.articles);
      setTotalPages(Math.ceil(data.totalResults / 10)); // Assuming 10 posts per page
    };
    fetchPosts();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const getPageItems = () => {
    let startPage = Math.max(1, page - Math.floor(paginationRange / 2));
    let endPage = Math.min(totalPages, page + Math.floor(paginationRange / 2));

    // Adjust the start and end pages if they are out of bounds
    if (endPage - startPage + 1 < paginationRange) {
      startPage = Math.max(1, endPage - paginationRange + 1);
    }
    if (endPage - startPage + 1 < paginationRange) {
      endPage = Math.min(totalPages, startPage + paginationRange - 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <Container>
      <Row>
        {posts.map(post => (
          <div key={post.url} className="col-12 mb-3">
            <BlogPostItem post={post} onClick={() => onPostClick(post)} />
          </div>
        ))}
      </Row>
      <Row className="mt-3 justify-content-center">
        <Pagination>
          <Pagination.Prev disabled={page === 1} onClick={() => handlePageChange(page - 1)} />
          {getPageItems().map(num => (
            <Pagination.Item key={num} active={num === page} onClick={() => handlePageChange(num)}>
              {num}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled={page === totalPages} onClick={() => handlePageChange(page + 1)} />
        </Pagination>
      </Row>
    </Container>
  );
};

export default BlogList;
