//user :- Name, Mobile No., Password

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    mobile: { type: Number, require: true },
    password: { type: String, require: true }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
