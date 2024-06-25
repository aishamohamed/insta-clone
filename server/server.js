// Express app setup
//import app from './app.js'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import Post from './routes/Post.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// routes
app.use('/api/posts', Post);


// Start the server
app.listen(PORT ,()=> {
    console.log(`Server running on port ${PORT}`);
});