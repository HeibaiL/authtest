const mongoose = require('mongoose');

const {Schema} = mongoose;


const userSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    birthDate: String,
});

module.exports = {User: mongoose.model('User', userSchema)}