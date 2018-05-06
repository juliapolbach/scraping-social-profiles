const {Influencer} = require('./mongodb');

const resolvers = {
        Query: {
            influencer(_, args) {
                return Influencer.findOne(args);
            },
            allInfluencers() {
                return Influencer.find();
            },
        },

        Mutation: {
            async createInfluencer(_, {input}) {
                let id = (input.name + input.lastName)
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, "");

                const exist = (id) => {
                    return Influencer.findOne({id: id}).exec();
                };
                const influencer = await exist(id);

                if (!influencer) {
                    const influencer = new Influencer({
                        id: (input.name + input.lastName)
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, ""),
                        ...input,
                    });
                    await influencer.save();
                    return influencer.toObject();
                } else {
                    throw new Error('Influencer already exists with id ' + influencer.id);
                }
            },

            async removeInfluencer(_, {input}) {
            },

            async updateInfluencer(_, {input}) {
            }
        }
    }
;

module.exports = resolvers;