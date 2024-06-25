// server/routes/api/posts.js

import express from 'express';
const router = express.Router();
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  addComment
} from '../controllers/Post.js';

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', getAllPosts);

// @route   GET api/posts/:id
// @desc    Get a post by ID
// @access  Public
router.get('/:id', getPostById);

// @route   POST api/posts
// @desc    Create a post
// @access  Public (Usually should be private for authenticated users)
// For now, it's public for simplicity.
router.post('/', createPost);

// @route   PUT api/posts/:id
// @desc    Update a post
// @access  Public (Usually should be private for the post's author)
router.put('/:id', updatePost);

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Public (Usually should be private for the post's author)
router.delete('/:id', deletePost);

// @route   PUT api/posts/like/:id
// @desc    Like a post
// @access  Public (Usually should be private for authenticated users)
router.put('/like/:id', likePost);

// @route   PUT api/posts/unlike/:id
// @desc    Unlike a post
// @access  Public (Usually should be private for authenticated users)
router.put('/unlike/:id', unlikePost);

// @route   POST api/posts/comment/:id
// @desc    Comment on a post
// @access  Public (Usually should be private for authenticated users)
router.post('/comment/:id', addComment);

export default router;
