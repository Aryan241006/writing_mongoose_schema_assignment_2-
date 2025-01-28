const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String, unique: true, min: 5},
    content: {type: String, min: 50, required: true},
    author: {type: String},
    tags: {type: [String]},
    category: {type: String, default: 'General'},
    likes: {type: [String]},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date}
});

const commentSchema = new mongoose.Schema({
    username: {type: String},
    message: {type: String, required: true},
    commentedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Blog', blogSchema);

module.exports = mongoose.model('Comment', commentSchema);

