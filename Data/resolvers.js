require('dotenv').config({path: 'variables.env'});
const { Influencer } = require('./mongodb');
const { addInstagramScrappedInfo } = require('./instagramScrapper');
const { addTwitterInfo } = require('./twitterScrapper');

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

                //generate an ID using Influencer name & lastname
                let id = (input.name + input.lastName)
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, "");

                //check if influencer already exist
                const exist = (id) => {
                    return Influencer.findOne({id: id}).exec();
                };
                const influencer = await exist(id);

                if (!influencer) {
                    //getScrappedInfo
                    await addInstagramScrappedInfo(input);
                    await addTwitterInfo(input);

                    const influencer = await new Influencer({
                        id: id,
                        ...input,
                    });

                    await influencer.save();
                    return influencer.toObject();
                } else {
                    throw new Error('Influencer already exists with id ' + influencer.id);
                }
            },

            async removeInfluencer(_, {id}) {
                const remove = (id) => {
                    return Influencer.findOneAndRemove({id: id}).exec();
                };
                const influencer = await remove(id);

                if (!influencer) {
                    throw new Error('Influencer doesn' / 't exists.');
                } else {
                    return influencer;
                }
            },

            async updateInfluencer(_, {input}) {
                const update = (input) => {
                    return Influencer.findOneAndUpdate({id: input.id},
                        {$set: {...input}}, {new: true}).exec();
                };
                const influencer = await update(input);

                if (!influencer) {
                    throw new Error('Influencer not found.');
                } else {
                    return influencer;
                }
            }
        }
    }
;

module.exports = resolvers;