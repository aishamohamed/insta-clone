import mongoose from 'mongoose';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

const connectDB = () => {
    // Connect to MongoDB
    mongoose.connect(process.env.MongoDB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    };

export default connectDB;