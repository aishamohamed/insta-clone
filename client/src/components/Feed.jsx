import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../Api';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log('Posts from API:', data);
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Feed;