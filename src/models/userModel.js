import mongoose from 'mongoose';
import '../../config/database.js';

const {Schema} = mongoose;

const userSchema = new({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}

});

const UserModel = model('User', userSchema);

export default UserModel;