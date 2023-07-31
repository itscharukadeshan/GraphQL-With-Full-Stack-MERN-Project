/** @format */

const mongoose = require("mongoose");

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `MongoDb is connected at ${conn.connection.name}`.cyan.underline.bold
  );
};

module.exports = connectDb;
