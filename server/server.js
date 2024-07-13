// Express app setup
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import Post from './routes/Post.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';

import './models/Post.js';
import './models/User.js';
import './models/Comment.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


const PORT = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// routes
app.use('/api/posts', Post);
app.use('/api/user', userRoutes);
app.use('/api/auth', userRoutes);

// Error middleware  
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  });


// Start the server
app.listen(PORT ,()=> {
    console.log(`Server running on port ${PORT}`);
});