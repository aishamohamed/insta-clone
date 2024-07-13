import express from 'express';
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
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', isAuthenticated, createPost);
router.put('/:id', isAuthenticated, updatePost);
router.delete('/:id', isAuthenticated, deletePost);
router.put('/like/:id', isAuthenticated, likePost);
router.put('/unlike/:id', isAuthenticated, unlikePost);
router.post('/comment/:id', isAuthenticated, addComment);

export default router;
