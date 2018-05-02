const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({path: 'variables.env'});

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const db = mongoose.createConnection(process.env.DATABASE);

const AuthorSchema = mongoose.Schema({
    id: {type: Number, index: true},
    firstName: String,
    lastName: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});

const PostSchema = mongoose.Schema({
    id: {type: Number, index: true},
    title: String,
    text: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
});

const Author = db.model('Author', AuthorSchema);
const Post = db.model('Post', PostSchema);

exports.Author = Author;
exports.Post = Post;