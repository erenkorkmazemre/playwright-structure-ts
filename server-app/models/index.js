const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.local.url;
db.tutorials = require('./tutorial.model.js')(mongoose);
// dev_db.mongoose = mongoose;
// dev_db.url = dbConfig.development.url;
// dev_db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
