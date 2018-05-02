const {Author} = require('./mongodb');

const resolvers = {
    Query: {
        author(_, args) {
            return Author.findOne(args);
        },
        allAuthors() {
            return Author.find();
        },
    },

    Author: {

    },

    Mutation: {
        async createAuthor(_, {input}) {
            const author = new Author({
                ...input,
            });
            await author.save();
            return author.toObject();
        },
    }
}
;

module.exports = resolvers;