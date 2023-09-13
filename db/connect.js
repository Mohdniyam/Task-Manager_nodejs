const mongoose = require("mongoose");

async function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/e-commerce")
    .then(() => console.log("connectDB"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;
