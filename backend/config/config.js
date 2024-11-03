// config/config.js
const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: '24h',
  NODE_ENV: process.env.NODE_ENV
};

module.exports = config;
