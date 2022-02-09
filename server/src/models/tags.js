const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  tagName: { type: String, required: true },
}, {
  versionKey:false
});

module.exports = mongoose.model("tags", tagsSchema);
