const express = require("express");
const dontenv = require("dotenv");
const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";

dontenv.config();

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

const twilioClient = require("twilio")(
  process.env.TWILIO_ACCOUNDID,
  process.env.TWILIO_AUTHTOKEN
);

twilioClient.messages
  .create({
    body: "hello from twilio", // a message text
    to: "phone number", // phone no that you want to send a message
    from: "phone number", //from valid twilio number
  })
  .then((message) => console.log(message.accountSid));

app.listen(PORT, HOST, () => {
  console.log("server run");
});
