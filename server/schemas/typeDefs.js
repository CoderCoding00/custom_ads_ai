const {gql} =  require ('apollo-server-express')

const typedefs = gql`
type User{
    _id: ID!
    username: String!
    email: String!
    adCount: Int
    savedAd: [Ad]
}

type Ad{
    adsId: ID!
    creator: [String]
    description: String
    image: String
    link: String
    title: String!

}

type Auth {
    token: ID
    user: User
}

input SearchedAd{
    adsId: ID
    title: String
    description: String
    image: String
}

type Query {
    me: User
  }

type Mutation {
    login (email:String!, password: String!): Auth
    addUser (username: String!, email: String!, password: String!): Auth
    saveAd (data: SearchedAd): User
    removeAd (adId: ID): User
}

`
module.exports = typedefs;