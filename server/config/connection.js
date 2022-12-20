const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(
  // Changed to mongod://localhost/openai (was mongod://localhost/googlebooks)
  process.env.MONGODB_URI || "mongodb://localhost/openai",
  // process.env.MONGODB_URI,
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
