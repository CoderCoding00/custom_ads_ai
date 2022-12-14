// *** NEW CODE ***
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// CREATE adSchema FROM MODELS/AD.JS
const adSchema = require('./Ad');

const userSchema = new Schema(
{
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
}
);
 

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('adCount').get(function () {
  return this.savedAds.length;
});

const User = model('User', userSchema);

module.exports = User;

// *** OLD CODE (KEEPING FOR REFERENCE) ***

// const mongoose = require ('mongoose')
// const Schema = mongoose.Schema 
// const bcrypt = require('bcrypt')
// const validator = require('validator')

// const userSchema = new Schema({
//     username: {
//         type: String, 
//         required: true,
//         unique: true, 
//         trim: true
//     },
//     email: {
//         type: String, 
//         required: true,
//         unique: true,
//         match: [/.+@.+\..+/, 'Must match an email address!'],

//     },
//     passowrd: {
//         type: String,
//         required: true,
//         minlength: 5,
//     }
// })

// userSchema.statics.signup = async function (username, email, password) {
//     if (!email || !password || !username) {
//         throw Error('All fields must be filled')
//     }
   
//     if (!validator.isEmail(email)) {
//         throw Error ('Email is no valid')
//     }
//     if (!validator.isStrongPassword(password)) {
//         throw Error('Password not strong enough')
//     }
    
//     const exists = await this.findOne({email})

//     if (exists) {
//         throw Error('Email already in use')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const user = await this.create({email, password: hash })

//     return user
// }

// userSchema.statics.login = async function(email, password) {
//     if (!email || !password) {
//         throw Error('All fields must be filled')
//     }

//     const user = await this.findOne({email})

//     if (!user) {
//         throw Error('Incorrect email')
//     }

//     const match = await bcrypt.compare(password, user.password)

//     if (!match) {
//         throw Error('Incorrect password')
//     }

//     return user
// }

// module.exports = mongoose.model('User', userSchema)