// Import the User model from the models folder
const { User } = require('../models');
// Import the signToken() from our auth
const { signToken } = require('../utils/auth');
// Import the AuthenticationError and ApolloError from Apollo Server
const { AuthenticationError, ApolloError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            console.log(email, password)
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            console.log(parent);
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;

