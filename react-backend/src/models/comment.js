import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
    postId: { type: mongoose.Types.ObjectId, ref: 'Post', required: true },
    authorId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    parent: { type: mongoose.Types.ObjectId, ref: 'Parent' },
    body: { type: String, required: [true, 'text is required!'] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

// model & export
const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;