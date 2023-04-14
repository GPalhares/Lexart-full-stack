require('dotenv').config();

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'search_products',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3030,
  dialect: 'mysql',
};

module.exports = config;
