const express = require("express");
const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";

app.get("/", (req, res, next) => {
  res.send("hello node js");
});

app.get("/greeting", (req, res, next) => {
  res.json({
    name: "mg mg pyaw",
    age: 45,
    school: "bhonekyikyaung",
  });
});

app.listen(PORT, HOST, () => {
  console.log("server run");
});
