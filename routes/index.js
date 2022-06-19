// requirements
const express = require("express");
const path = require("path");

// express
const indexRoute = express.Router();

// set notes to notes.html
indexRoute.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

// set wildcard to homepage/index.html
indexRoute.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

// export to use in other files
module.exports = indexRoute;
