require("dotenv").config();

const express = require("express");
const port = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/twitter", (req, res) => {
  res.send("<h1>Please see the ui of Twitter</h1>");
});
app.get("/login", (req, res) => {
  res.send("Login page");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at ${port}`);
});
