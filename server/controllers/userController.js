import User from '../models/User.js';
import catchAsync from '../middlewares/catchAsync.js';
import sendCookie from '../utils/sendCookie.js';
import ErrorHandler from '../utils/errorHandler.js';

// Signup User
export const signupUser = catchAsync(async (req, res, next) => {
  const { fullname, email, username, password } = req.body;
  const user = await User.findOne({ $or: [{ email }, { username }] });

  if (user) {
    return next(new ErrorHandler("Username or Email already exists", 401));
  }

  const avatar = req.file ? req.file.path : undefined;
  const newUser = await User.create({ fullname, email, username, password, avatar});
  sendCookie(newUser, 201, res);
});

// Login User
export const loginUser = catchAsync(async (req, res, next) => {
  const { userId, password } = req.body;
  const user = await User.findOne({ $or: [{ email: userId }, { username: userId }] }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }

  sendCookie(user, 200, res);
});

// Logout User
export const logoutUser = catchAsync(async (req, res, next) => {
  res.cookie('token', null, { expires: new Date(Date.now()), httpOnly: true });
  res.status(200).json({ success: true, message: "Logged Out" });
});

// Get Account Details
export const getAccountDetails = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate({ path: 'posts', populate: { path: 'postedBy' } });
  res.status(200).json({ success: true, user });
});

// Follow/Unfollow User
export const followUser = catchAsync(async (req, res, next) => {
  const userToFollow = await User.findById(req.params.id);
  const loggedInUser = await User.findById(req.user._id);

  if (!userToFollow) return next(new ErrorHandler("User Not Found", 404));

  let message;
  if (loggedInUser.following.includes(userToFollow._id)) {
    loggedInUser.following.pull(userToFollow._id);
    userToFollow.followers.pull(loggedInUser._id);
    message = "User Unfollowed";
  } else {
    loggedInUser.following.push(userToFollow._id);
    userToFollow.followers.push(loggedInUser._id);
    message = "User Followed";
  }

  await loggedInUser.save();
  await userToFollow.save();
  res.status(200).json({ success: true, message });
});
