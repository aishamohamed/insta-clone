import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: true
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
