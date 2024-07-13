import express from 'express';
import { signupUser, loginUser, logoutUser, getAccountDetails, followUser } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/signup', upload.single('avatar'),signupUser);
router.post('/login', loginUser);
router.get('/logout', isAuthenticated, logoutUser);
router.get('/me', isAuthenticated, getAccountDetails);
router.post('/follow/:id', isAuthenticated, followUser);

export default router;