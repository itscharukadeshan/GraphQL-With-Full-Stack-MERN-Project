/** @format */

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 4000;

const schema = require("./schema/schema");
const connectDb = require("./config/db");

const app = express();

app.use(cors());

connectDb();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == "development",
  })
);

app.listen(port, console.log(`sever running at port ${port}`));
