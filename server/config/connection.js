const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/openai");

module.exports = mongoose.connection;
