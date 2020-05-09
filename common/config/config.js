const development = {
  app: {
    port: parseInt(process.env.PORT, 0) || 3000
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  jwt: {
    key: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE
  },
  baseUrl: process.env.BASE_API_URL,
  salt: process.env.BCRYPT_SALT_ROUNDS
};
const test = {
  app: {
    port: parseInt(process.env.PORT, 0) || 3000
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  jwt: {
    key: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE
  },
  baseUrl: process.env.BASE_API_URL,
  salt: process.env.BCRYPT_SALT_ROUNDS
};

const production = {
  app: {
    port: parseInt(process.env.PORT, 0) || 3000
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  jwt: {
    key: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE
  },
  baseUrl: process.env.BASE_API_URL,
  salt: process.env.BCRYPT_SALT_ROUNDS
};

const config = {
  development,
  test,
  production
};

module.exports = config[process.env.NODE_ENV || development];
