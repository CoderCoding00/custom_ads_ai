//This will be the schema for the social media posts we create. 
const { schema, Schema } = require('mongoose');

const adsSchema = new Schema({
    creator: [
        {
            type: String
        },
    ],
    description: {
        type: String,
        required: true,
    },
    adsId: {
        type: String,
        required: true,
    },
    link: {
        type: String
    },
    image: {
        type: String
    },
    title: {
        type: String,
        required: true,
    },
})

module.exports = adsSchema;
