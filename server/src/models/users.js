//user :- Name, Mobile No., Password
// cart array and wishlist array also with user schema

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  mobile: { type: Number, require: true },
  password: { type: String, require: true }
}, {
  versionKey:false,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
