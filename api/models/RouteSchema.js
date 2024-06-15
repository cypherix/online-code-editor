const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    fileName:{
        type: String,
        required: true
    },
    fileType:{
        type: String,
        required: true
    },
    fileContent:{
        type: String,
        required: true
    }
});

const RouteSchema = new Schema({
    routePath:{
        type: String,
        required: true
    },
    files:[FileSchema]
});


const RouteModel = mongoose.model('Route', RouteSchema);


module.exports = RouteModel