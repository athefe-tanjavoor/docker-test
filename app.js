const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
  res.send("Hi from Ec2 instance!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
