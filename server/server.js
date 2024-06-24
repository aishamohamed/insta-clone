// Express app setup
import app from './app.js'
import connectDB from './config/db.js';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });


// Start the server
app.listen(PORT ,()=> {
    console.log(`Server running on port ${PORT}`);
});