const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("My Website Running 🚀");
});

app.listen(5000, () => {
  console.log("Server Running");
});