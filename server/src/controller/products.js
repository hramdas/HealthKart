const express = require("express");
const Product = require("../models/products");
const router = express.Router();

router.post("", async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).send({ product });
});

router.get("", async (req, res) => {
  const product = await Product.find(); //.lean() //.exec();
  return res.status(201).send({ product });
});

router.get("/item/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  return res.status(201).send({ product });
});

router.get("/popular", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return b.rating - a.rating;
  });
  return res.status(201).send({ product });
});

router.get("/flashsale", async (req, res) => {
  const product = await Product.find().limit(10).lean().exec();
  product.sort((a, b) => {
    return b.rating - a.rating;
  });
  return res.status(201).send({ product });
});

router.get("/priceL", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return a.price - b.price;
  });
  return res.status(201).send({ product });
});

router.get("/popular", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return b.rating - a.rating;
  });
  return res.status(201).send({ product });
});

router.get("/flashsale", async (req, res) => {
  const product = await Product.find().limit(10).lean().exec();
  product.sort((a, b) => {
    return b.rating - a.rating;
  });
  return res.status(201).send({ product });
});

router.get("/priceL", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return a.price - b.price;
  });
  return res.status(201).send({ product });
});

router.get("/priceH", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return b.price - a.price;
  });
  return res.status(201).send({ product });
});

// api for search -antony
router.get("/search/:searchItem", async (req, res) => {
  const product = [];
  await (
    await Product.find()
  ).forEach((element) => {
    if (
      element.name.toLowerCase().includes(req.params.searchItem.toLowerCase())
    ) {
      product.push(element);
    }
  });
  return res.status(201).send({ product });
});
module.exports = router;
