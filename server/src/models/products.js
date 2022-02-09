const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : String,
    img: String,
    tags: [{type:mongoose.Schema.Types.ObjectId, ref:"tags"}],
    price : Number,
    discount: Number,
    rating: Number
}, {
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('product', productSchema)