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
    _id: String,
    firstName: String,
    lastName: String
});

const Author = db.model('Author', AuthorSchema);

exports.Author = Author;
