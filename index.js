require("dotenv").config();

const express = require("express");
const port = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at ${port}`);
});
