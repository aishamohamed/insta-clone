// Entry point for the server
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();

// Routes
app.use('/api/users', userRoutes);

export default app;
