const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `

type Query {
    influencer(name: String, lastName: String): Influencer
    allAuthors: [Influencer]
}

type Influencer {
    id: ID!
    name: String
    lastName: String
    instagram: Instagram
    twitter: Twitter
    youtube: Youtube
}

type Instagram {
    profileUrl: String
    photoProfile: String
    followers: Int
    totalPosts: Int
}

input InfluencerInput {
    id: ID!
    name: String
    lastName: String
    instagram: Instagram
    twitter: Twitter
    youtube: Youtube
}

type Mutation {
  createAuthor(input: AuthorInput!): Author
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;