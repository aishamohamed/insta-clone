import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import User from '../models/User.js';
// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', 'username avatar')
      .populate({
        path: 'comments',
        populate: { path: 'user', select: 'username avatar' }
      });
     if (!posts) {
        return res.status(404).json({ msg: 'Post not found' });
    }
 
    res.json(posts);
    console.log("posts from the server", posts);
  } catch (error) {
    
    res.status(500).send('Server Error');
    console.error(error.message);
  }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('comments').populate('likes');
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Create a new post
export const createPost = async (req, res) => {
  const { title, body } = req.body;

  try {
    const newPost = new Post({
      user: req.user._id,
      title,
      body,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Update an existing post
export const updatePost = async (req, res) => {
  const { title, body } = req.body;

  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Update post details
    post.title = title || post.title;
    post.body = body || post.body;

    post = await post.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    await post.remove();
    res.json({ msg: 'Post removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Like a post
export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check if the post is already liked by the user
    if (post.likes.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.push(req.user.id);
    post.likesCount += 1;

    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Unlike a post
export const unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check if the post is not yet liked by the user
    if (!post.likes.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    post.likes = post.likes.filter(id => id.toString() !== req.user.id);
    post.likesCount -= 1;

    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Comment on a post
export const addComment = async (req, res) => {
  const { body } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    const comment = new Comment({
      user: req.user._id,
      body,
      post: post._id
    });
    await comment.save();
    post.comments.push(comment);
    post.commentsCount += 1;
    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
}

};