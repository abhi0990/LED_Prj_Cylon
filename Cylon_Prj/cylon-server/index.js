"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./router");

const app = express(); //initialize the app

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.use((err, res, req, next) => {
  res.send({ status: "Error", data: null });
});

app.listen(4000, () => {
  console.log("Server listening at port 4000");
});
