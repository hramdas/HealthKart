const express = require("express");
const mongoose = require("mongoose");

const tags = require("../models/tags");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://hramdas:Ramdas1998@cluster0.or8t9.mongodb.net/HealthKart?retryWrites=true&w=majority"
  );
};

// mongodb+srv://hramdas:<password>@cluster0.or8t9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();
app.use(express.json());

const tagsController = require("../controller/tags");
app.use("/tags", tagsController);

app.listen(2200, async function () {
  await connect();
  console.log("listening on 2200");
});
