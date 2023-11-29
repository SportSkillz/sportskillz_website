import mongoose from "mongoose";
import '../app.js'

const {Schema} = mongoose;

const classSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    videoURL: {type: String},
    expText: {type: String}
});

const sportSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    class: [{type: Schema.Types.ObjectId, ref: 'Class'}]

});

const ClassModel = mongoose.model('Class', classSchema);
const SportModel = mongoose.model('Sport', sportSchema);