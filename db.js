const mongoose = require('mongoose');
require('dotenv').config();

let mongoURL = 'mongodb+srv://ali:12345@nodeandexpress-projects.gnvwa.mongodb.net/hotel-mern';

mongoose.connect(process.env.URI, {
    useUnifiedTopology: true, useNewUrlParser: true
});
let connection = mongoose.connection;
connection.on('error', err => {
    console.log("MONGODB connection failed");
})
connection.on('connected', err => {
    console.log("MONGODB connection Successful1");
})
module.exports = mongoose;