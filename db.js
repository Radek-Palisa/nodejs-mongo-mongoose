const mongoose = require('mongoose');

const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500, 
  connectTimeoutMS: 10000,
};

mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected');
})
  .catch( function(err) {
  console.log(err);
});
