let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let greekMSchema = new Schema({
    greek:{
        type: String,
        required: true
    },
    greekId:{
        type: String,
        required : true
    }
})

const Greek = mongoose.model('greekM', greekMSchema)

module.exports =  Greek