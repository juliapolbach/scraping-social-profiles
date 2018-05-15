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

const InfluencerSchema = mongoose.Schema({
    id: String,
    name: String,
    lastName: String,
    instagram: Object,
    twitter: Object,
    youtube: Object
});

const InstagramSchema = mongoose.Schema({
    profileUrl: String,
    photoProfile: String,
    followers: Number,
    totalPosts: Number
});

const TwitterSchema = mongoose.Schema({
    profileUrl: String,
    photoProfile: String,
    followers: Number,
    totalPosts: Number
});

const YoutubeSchema = mongoose.Schema({
    profileUrl: String,
    photoProfile: String,
    followers: Number,
    totalPosts: Number
});

const Influencer = db.model('Influencer', InfluencerSchema);
const Instagram = db.model('Instagram', InstagramSchema);
const Twitter = db.model('Twitter', TwitterSchema);
const Youtube = db.model('Youtube', YoutubeSchema);

exports.Influencer = Influencer;
