const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("Server Running");
});

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

module.exports = app;
