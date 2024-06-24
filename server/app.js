// Entry point for the server
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
//app.use('/api/users', userRoutes);

export default app;
