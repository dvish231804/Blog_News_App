// src/App.js
import React, { useState } from 'react';
import BlogList from './components/BlogList';
import PostDetails from './components/PostDetails';
// import BlogNavbar from './components/Navbar';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      {/* <BlogNavbar /> */}
      <div className="container mt-4">
        {selectedPost ? (
          <PostDetails post={selectedPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <BlogList onPostClick={setSelectedPost} />
        )}
      </div>
    </div>
  );
};

export default App;
