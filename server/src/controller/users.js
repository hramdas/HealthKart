//get  --  login
//post --  sign

const express = require("express");
const cart = require("../models/cart");
const router = express.Router();
const User = require("../models/users");
const Cart = require("../models/cart");
const Wish = require("../models/wishlist");

router.post("", async (req, res) => {
  const user = await User.create(req.body);

  return res.status(201).send({ user });
});

router.get("/", async (req, res) => {
  const user = await User.find();
  return res.status(200).send({ user });
});

//Get cart items for a user  && add to cart
router.get("/:id/cart", async (req, res) => {
  let items = await Cart.find({ user: req.params.id });
  return res.status(200).send({ items });
});

router.get("/:id/wish", async (req, res) => {
  let items = await Wish.find({ user: req.params.id });
  return res.status(200).send({ items });
});

// get all and Remove from Cart
router.get("/:id/cartR", async (req, res) => {
  let items = await Cart.find({ user: req.params.id }).populate("item");
  return res.status(200).send({ items });
});

module.exports = router;
