const express = require('express')
const Product = require('../models/products')
const router = express.Router()

router.post("", async(req, res) => {
    const product = await Product.create(req.body)
    return res.status(201).send({ product });
});

// router.get("", async(req, res)=>{
//     const product = await Product.find().lean().exec();
//     return res.status(201).send({product})
// })

router.get("", async(req, res) => {
    const product = await Product.find().lean().exec();
    return res.status(201).send({ product })

})


module.exports = router
router.get("", async(req, res) => {
    const product = await Product.find().lean().exec();
    return res.status(201).send({ product })

})


module.exports = router