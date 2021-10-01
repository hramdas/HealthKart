//get  --  login
//post --  sign

const express = require("express");
const { db } = require("../models/users");
const router = express.Router();
const User = require("../models/users");

router.post("", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).send({ user });
});

router.get("", async (req, res) => {
  const user = await User.find();
  return res.status(200).send({ user });
});

router.get("/cart/:id", async (req, res) => {
  let user = await User.findById(req.params.id).populate("cart");
  return res.status(200).send({ user });
});

router.get("/:id", async (req, res) => {
  let user = await User.findById(req.params.id)
  return res.status(200).send({ user });
});

// router.patch("/:id", async(req, req)=>{
//   const user = await User.findByIdAndUpdate()
// })

module.exports = router;
