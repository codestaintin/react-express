const dotenv = require('dotenv');

dotenv.config();
const defaults = {
  prefix: 'mongodb',
  database: process.env.DB_NAME,
  host: 'localhost',
  port: 27017,
};

const config = {
  development: {
    ...defaults,
    database: process.env.DB_NAME,
  },
  test: {
    ...defaults,
    database: process.env.DB_NAME_TEST,
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];