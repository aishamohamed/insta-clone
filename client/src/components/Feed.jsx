import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../Api';
import '../styles/Feed.css'; // Import custom styles

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
    <div className="feed">
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <img 
                src={post.user?.avatar || 'https://via.placeholder.com/50'} 
                alt={`${post.user?.username || 'User'}'s avatar`} 
                className="post-avatar" 
              />
              <div className="post-user-info">
                <h3>{post.user?.username || 'Anonymous'}</h3>
                <p className="post-timestamp">
                  {new Date(post.date).toLocaleString() || 'Date not available'}
                </p>
              </div>
            </div>
            <div className="post-body">
              {post.image && <img src={post.image} alt="Post" className="post-image" />}
              <p>{post.body || 'No caption'}</p>
            </div>
            <div className="post-footer">
              <p>{post.likesCount || 0} likes</p>
              <div className="post-comments">
                {post.comments?.length > 0 ? (
                  post.comments.map((comment, commentIndex) => (
                    <div key={commentIndex} className="comment">
                      <span className="comment-username">
                        {comment.user?.username || 'Anonymous'}:
                      </span> 
                      {comment.body || 'No comment text'}
                    </div>
                  ))
                ) : (
                  <p>No comments available</p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Feed;
