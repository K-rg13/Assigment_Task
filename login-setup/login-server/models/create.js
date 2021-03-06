const mongoose = require('mongoose');

const createSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,       
    },
    username:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('create',createSchema);