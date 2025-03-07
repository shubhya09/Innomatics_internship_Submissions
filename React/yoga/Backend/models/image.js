const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    image_id:{type:Number, require:true},
    name:{type:String, require:true},
    description:{type:String, require:true},
    category:{type:String, require:true},
    url: {type:String, require:true},
    benefits:{type:String, require:true},
    difficulty:{type:String, require:true},
    duration:{type:String, require:true},

})

const Image= mongoose.model('Image', imageSchema);
module.exports  =  Image;