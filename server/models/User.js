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
    password: {
      type: String,
      required: true,
    },
    // set savedBooks to be an array of data that adheres to the bookSchema
    savedAds: [adSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);
   
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