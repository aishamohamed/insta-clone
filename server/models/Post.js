import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      default: Date.now
    },

    likes: [{
         type: mongoose.Schema.ObjectId, ref: "User" 
    }],

    likesCount: {
    type: Number,
    default: 0,
    },

    comments: [{ 
    type: mongoose.Schema.ObjectId, ref: "Comment" 
    }],

  commentsCount: {
    type: Number,
    default: 0,
  },
});

const Posts = mongoose.model('post', PostSchema);

export default Posts; 