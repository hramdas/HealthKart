const express = require("express");
const Product = require("../models/products");
const router = express.Router();

<<<<<<< HEAD:controller/products.js
router.post("", async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).send({ product });
});
=======
router.post("", async(req, res)=>{
    const product = await Product.create(req.body)
    return res.status(201).send({product})
})
>>>>>>> 2fd0d2cd05ae8f626e3105b7c10eea056611fef3:src/controller/products.js

// router.get("", async(req, res)=>{
//     const product = await Product.find().lean().exec();
//     return res.status(201).send({product})
// })

<<<<<<< HEAD:controller/products.js
router.get("", async (req, res) => {
  const product = await Product.find().lean().exec();
  return res.status(201).send({ product });
});
=======
router.get("", async(req, res)=>{
    const product = await Product.find().lean().exec();
    return res.status(201).send({product})
   
})

router.get("/popular", async(req, res)=>{
    const product = await Product.find().lean().exec();
    product.sort((a,b)=>{
        return b.rating - a.rating
    })
    return res.status(201).send({product})
})

router.get("/flashsale", async(req, res)=>{
    const product = await Product.find().limit(10).lean().exec();
    product.sort((a,b)=>{
        return b.rating - a.rating
    })
    return res.status(201).send({product})
})

router.get("/priceL", async(req, res)=>{
    const product = await Product.find().lean().exec();
    product.sort((a,b)=>{
        return a.price - b.price
    })
    return res.status(201).send({product})
})
>>>>>>> 2fd0d2cd05ae8f626e3105b7c10eea056611fef3:src/controller/products.js

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

<<<<<<< HEAD:controller/products.js
router.get("/discL", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return a.discount - b.discount;
  });
  return res.status(201).send({ product });
});

router.get("/discH", async (req, res) => {
  const product = await Product.find().lean().exec();
  product.sort((a, b) => {
    return b.discount - a.discount;
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
      console.log(element.name);
      product.push(element);
    }
  });
  //   product.sort((a, b) => {
  //     return b.discount - a.discount;
  //   });
  return res.status(201).send({ product });
});

module.exports = router;
=======
module.exports = router
>>>>>>> 2fd0d2cd05ae8f626e3105b7c10eea056611fef3:src/controller/products.js
