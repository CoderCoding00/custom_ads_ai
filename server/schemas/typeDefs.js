const {gql} =  require ('apollo-server-express')

const typedefs = gql`
type User{
    _id: ID
    username: String
    email: String
    adCount: Int
    savedAd: [Ad]
}
type Book {
    adId: ID
    title: String
    description: String
    image: String
    
}
type Auth {
    token: ID
    user: User
}
input SearchedAd{
    adId: ID
    title: String
    description: String
    image: String
}
type Mutation {
    login (email:String, password: String): Auth
    addUser (username: String, email: String, password: string): Auth
    saveAd (data: SearchedAd): User
    removeAd (AdId: ID): User
}

`
module.exports = typedefs;