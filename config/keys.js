if (process.env.NODE_ENV === 'production') {
  //Export prod keys when in production
  module.exports = require('./prod');
} else {
  //Export dev keys when not in production
  module.exports = require('./dev');
}