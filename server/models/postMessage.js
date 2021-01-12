import mongoose from "mongoose";

// Schema for post object in db
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Create mongoose model for db object
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
