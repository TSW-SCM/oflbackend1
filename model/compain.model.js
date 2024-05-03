const mongoose = require('mongoose')

const complainSchema = new mongoose.Schema({
    subject : {
        type : String
    }
    ,
    description : {
        type : String
    }
    ,
    username : {
        type : String
    }
    ,
    phone : {
        type : String
    }
    ,
    status : {
        type : String,
        default : 'open'
    }
})

const Complain = mongoose.model('Complain', complainSchema)

module.exports = Complain