import mongoose from 'mongoose';


// Create a Mongoose schema:
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    githubUrl: String,
    projectUrl: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;