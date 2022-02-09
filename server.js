const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 2200;

const connect = () => {
  return mongoose.connect(process.env.DB_URL);
};

const app = express();

app.use(express.json());
app.use(cors());

const productController = require("./src/controller/products");
app.use("/products", productController);

const tagsController = require("./src/controller/tags");
app.use("/tags", tagsController);

const userController = require("./src/controller/users");
app.use("/users", userController);

const cartController = require("./src/controller/cart");
app.use("/carts", cartController);

const wishController = require("./src/controller/wishlist");
app.use("/wishlists", wishController);

app.listen(port, async function () {
  await connect();
  console.log("listening on 2200");
});
