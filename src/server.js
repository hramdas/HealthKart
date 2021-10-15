const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const connect = () => {
  return mongoose.connect(
    process.env.DB_URL
  );
};

// mongodb+srv://hramdas:<password>@cluster0.or8t9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

const productController = require("./controller/products");
app.use("/products", productController);

const tagsController = require("./controller/tags");
app.use("/tags", tagsController);

const userController = require("./controller/users");
app.use("/users", userController);

const cartController = require("./controller/cart");
app.use("/carts", cartController);

const wishController = require("./controller/wishlist");
app.use("/wishlists", wishController);

app.listen(2200, async function () {
  await connect();
  console.log("listening on 2200");
});
