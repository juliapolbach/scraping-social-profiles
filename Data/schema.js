const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `

type Query {
  author(firstName: String, lastName: String, _id: String): Author
  allAuthors: [Author]
}

type Author {
  _id: ID!
  firstName: String
  lastName: String
}

input AuthorInput {
  _id: ID!
  firstName: String
  lastName: String
}

type Mutation {
  createAuthor(input: AuthorInput!): Author
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;