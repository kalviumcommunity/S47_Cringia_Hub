const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    comments : String,
})

const UserModel = mongoose.model('memeimg', usersSchema);
module.exports = UserModel