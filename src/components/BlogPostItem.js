// src/components/BlogPostItem.js
import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPostItem = ({ post, onClick }) => {
  return (
    <Card className="mb-3" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Card.Footer className="text-muted">{new Date(post.publishedAt).toLocaleDateString()}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default BlogPostItem;
