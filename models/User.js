const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
})

const User = mongoose.model('Users', userSchema)
module.exports = User