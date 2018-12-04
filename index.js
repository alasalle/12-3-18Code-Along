const express = require("express");
const server = express();
const helmet = require("helmet");
const morgan = require("morgan");
const customMW = require('./customMiddleware.js')

const PORT = 4000;

//middleware

//built in
server.use(express.json());

//3rd party library
server.use(helmet());
server.use(morgan("dev"));

//custom
// server.use((req, res, next) => {
//   const pass = req.query.pass;
//   pass === "ferret"
//     ? next()
//     : res.status(400).json({ message: "invalid password" });
// });
server.use(customMW.gatekeeper);

// route handlers

server.get("/", (req, res) => {
  res.json({ message: "get received" });
});

server.listen(PORT, err => {
  console.log(`server listening on port ${PORT}`);
});
