import mongoose from 'mongoose'

const requestSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    phonenumber: {type: String, required: true},
    pricerange: {type: String, required: true},
    description: {type: String, required: true}  
})

//module.exports = mongoose.model('request', requestSchema)
module.exports = mongoose.models.request || mongoose.model('request', requestSchema)