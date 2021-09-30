//get  --  login
//post  --  sign


const express = require("express");
const bodyParser=require("body-parser");
const { db } = require("../models/users");
const router = express.Router();
const User = require("../models/users");

 
router.use(bodyParser.json());
router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: true }));

router.post("", async (req, res) => {
  const user = await User.create(req.body);

  return res.status(201).send({ user });
});

router.get("", async (req, res) => {
  const user = await User.find();
  return res.status(200).send({ user });
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  let user = await User.findById(req.params.id).populate("cart");
  return res.status(200).send({ user });
});

module.exports = router;