const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://hramdas:Ramdas1998@cluster0.or8t9.mongodb.net/HealthKart"
  );
};
