const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Query {
    influencer(name: String, lastName: String): Influencer
    allInfluencers: [Influencer]
}

type Influencer {
    id: ID!
    name: String
    lastName: String
    instagram: Instagram
    twitter: Twitter
    youtube: Youtube
}

input InfluencerInput {
    id: ID
    name: String
    lastName: String
    instagram: InstagramInput
    twitter: TwitterInput
    youtube: YoutubeInput
}

type Instagram {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

input InstagramInput {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

type Twitter {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

input TwitterInput {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

type Youtube {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

input YoutubeInput {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

type Mutation {
  createInfluencer(input: InfluencerInput!): Influencer
  updateInfluencer(input: InfluencerInput!) : Influencer
  removeInfluencer(id: ID!) : Influencer
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;