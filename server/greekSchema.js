const mongoose = require('mongoose') 
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    fName:{
        type: String,
        required: true,
        uppercase: true
    },
    email:{
        type: String,
        required : true,
        unique: true,
        lowercase : true
    },
    password:{
        type: String,
        required : true
    },
    cPassword:{
        type: String,
    },  
    personType:{
        type: Number,
        default:0
    },
    status:{
        type: Number,
        default:0
    }
})

const User = mongoose.model('greek', userDetailsSchema)

module.exports = User