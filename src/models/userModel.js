import mongoose from 'mongoose';
import '../app.js';
import bcrypt from 'bcrypt';

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
});

//Realiza a cryptografia da senha, para proteção do uuário
userSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(14);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;