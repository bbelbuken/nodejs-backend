const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
  origin: (origin, callback) => {
    // if origin in the whitelist
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // null means no error
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
