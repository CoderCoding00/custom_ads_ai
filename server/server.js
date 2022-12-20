// Implement the Apollo Server and apply it to the Express server as middleware.

// IMPORT EXPRESS
const express = require("express");
// IMPORT THE APOLLO SERVER
const { ApolloServer } = require("apollo-server-express");
// AUTHERNTICATION MIDDLEWARE
const { authMiddleware } = require("./utils/auth");
// IMPORT THE TYPEDEFS AND RESOLVERS
const { typeDefs, resolvers } = require("./schemas");
// IMPORT PATH
const path = require("path");
// IMPORT MONGOOSE
const db = require("./config/connection");
// MIGHT NOT BE USING THESE GIVEN ROUTES
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// CREATE NEW APOLLO SERVER (PASS IN TYPEDEFS, RESOLVERS, AND CONTEXT for MIDDLWARE)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// *** URL ENCODED MIDDLEWARE (TRUE OR FALSE???)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVER CLIENT/BUILD AS STATIC WHEN IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// *** APP.GET ROUTE FOR
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/"));
});

// ADDED THIS TO PUSH TO HEROKU
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// *** DO WE NEED THESE ROUTES ???
// app.use(routes);

// NEW INSTANCE OF APOLLO SERVER WITH GRAPHQL PATH (SCHEMA)
const startingApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // APPLY THE APOLLO SERVER MIDDLEWARE TO THE EXPRESS APP
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(`🌍 Now listening on localhost:${PORT}`)
    );
    // LOG WHERE THE GRAPHQL API IS RUNNING WITH THE APOLLO SERVER (graphqlPath)
    console.log(`Use http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startingApolloServer(typeDefs, resolvers);
