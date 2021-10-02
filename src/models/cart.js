const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  item: { type:mongoose.Schema.Types.ObjectId, ref:"product", require: true  },
  user : {type:mongoose.Schema.Types.ObjectId, ref:"user", require: true }
}, {
    versionKey:false
});

module.exports = mongoose.model("cart", cartSchema);