// src/components/PostDetails.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const PostDetails = ({ post, onBack }) => (
  <Container>
    <Button variant="secondary" className="mb-3" onClick={onBack}>Back</Button>
    <h1>{post.title}</h1>
    {post.urlToImage && <img src={post.urlToImage} alt={post.title} className="img-fluid mb-3" />}
    <p>{post.content}</p>
  </Container>
);

export default PostDetails;
