const mongoose = require('mongoose');
require('../../config/database.js');

const {Schema} = mongoose;

const userSchema = new({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}

});

const User = mongoose.model('User', userSchema);