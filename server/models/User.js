const mongoose = require ('mongoose')
const Schema = mongoose.Schema 
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true, 
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],

    },
    passoword: {
        type: String,
        required: true,
        minlength: 5,
    }
})

userSchema.statics.signup = async function (username, email, password) {
    if (!email || !password || !username) {
        throw Error('All fields must be filled')
    }
   
    if (!validator.isEmail(email)) {
        throw Error ('Email is no valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }
    
    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash })

    return user
}

userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)