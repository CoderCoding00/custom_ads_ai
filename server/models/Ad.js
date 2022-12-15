//This will be the schema for the social media posts we create. 
const { Schema } = require('mongoose');

const adSchema = new Schema({
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

module.exports = adSchema;
