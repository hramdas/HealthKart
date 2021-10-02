const express = require("express")
const router = express.Router();
const Wish = require("../models/wishlist.js")

router.post("", async(req, res)=>{
    const wish = await Wish.create(req.body);
    return res.status(201).send({wish});
})

router.get("", async(req, res)=>{
    const wish = await Wish.find().populate("item");
    return res.status(200).send({wish});
})

router.get("/:id", async(req, res)=>{
    const wish = await Wish.findById(req.params.id)
    return res.status(200).send({wish});
})

router.delete("/remove/:id", async(req, res)=>{
    Wish.findByIdAndDelete(req.body.id).lean().exec()
})

module.exports = router
