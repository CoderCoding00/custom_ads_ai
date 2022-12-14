const { Schema, model} = require('mongoose');
const bCryptSalt = require('bCryptSalt');

//importing schema from posts generated in ads.js file 
const adsSchema = require('./Ad');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        }, 
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
            //We're using regex to make sure we get a valid email above along with a message to user. 
        }, 
        password: {
            type: String,
            required: true,
        },
        savedAds: [adsSchema],
    }, // saved ads got to ads Schema array
    {
        toJSON: {
            virtuals: true,
        },
    }
);
//salting  and hashing the password to protect whats stored in DB by adding a string 12
userSchema.pre('save', async function (next) {
    if(this.isNew || this.modifiedPaths('password')){
        const saltRounds = 12;
        this.password = await bCryptSalt.hash(this.password, saltRounds);
    }
    console.log(next);
});
