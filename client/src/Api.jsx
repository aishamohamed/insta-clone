import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // This should match the proxy setting in vite.config.js
});

// function to fetch posts
export const fetchPosts = async () => {
  try {
    const response = await api.get('/api/posts');
    console.log("frontend responce:",response);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts', error);
    throw error;
  }
};

// function to fetch a single post by ID
export const fetchPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}`, error);
    throw error;
  }
};

// function to create a new post
export const createPost = async (post) => {
  try {
    const response = await api.post('/posts', post);
    return response.data;
  } catch (error) {
    console.error('Error creating post', error);
    throw error;
  }
};

 