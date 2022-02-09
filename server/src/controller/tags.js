const express = require("express");

const router = express.Router();
const Tags = require("../models/tags");

router.post("", async (req, res) => {
  const tags = await Tags.create(req.body).lean().exec();
  return res.status(201).send({ tags });
});

router.get("", async (req, res) => {
  const tags = await Tags.find().lean().exec();
  return res.status(200).send({ tags });
});

module.exports = router;
