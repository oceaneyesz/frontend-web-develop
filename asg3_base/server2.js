const mongoose = require('mongoose');
const express = require("express");
const fs = require('fs');
const { ObjectID } = require('bson');
const ObjectId = require('mongodb').ObjectId;
const app = express();
app.use(express.json());

const uri = "mongodb"
mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log("Connect mongodb successfully!")
});
mongoose.connection.on("error", (error) => {
  console.log("Connect mongodb error!", error)
});