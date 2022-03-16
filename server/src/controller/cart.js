const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.js");

router.post("", async (req, res) => {
  const cart = await Cart.create(req.body);
  return res.status(201).send({ cart });
});

router.get("", async (req, res) => {
  const cart = await Cart.find().populate("item");
  return res.status(200).send({ cart });
});

router.get("/:id", async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  return res.status(200).send({ cart });
});

router.delete("/remove/:id", async (req, res) => {
  Cart.findByIdAndDelete(req.body.id).lean().exec();
});

module.exports = router;
