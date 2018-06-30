'use strict';
const mongoose = require('mongoose');

// mongoose instance connection url connection
const db = {};
db.user = process.env.MONGO_USER;
db.password = process.env.MONGO_PASSWORD;
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${db.user}:${db.password}@mongo/vod?authSource=admin`);
