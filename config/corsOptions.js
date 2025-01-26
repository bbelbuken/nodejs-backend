const whitelist = [
  'https://www.google.com',
  'http://127.0.0.1:5500',
  'http://localhost:3500',
];
const corsOptions = {
  origin: (origin, callback) => {
    // if origin in the whitelist
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // null means no error
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
