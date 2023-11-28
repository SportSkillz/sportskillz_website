import mongoose from 'mongoose';
import '../app.js';

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}

});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;