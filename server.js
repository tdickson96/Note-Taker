// requirements
const express = require("express");
const path = require("path");
const api = require("./routes/index"); 
const indexRoute = require("./routes/index");

// call on express to run the server
const app = express();
// heroku or local host port option
const PORT = process.env.PORT || 3001;

// parse the URL encoded and the JSON data
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
// General api pathway
app.use("/api", api);
app.use(express.static("public"));

// Notes route pathway to send user to notes.html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Wildcard operator to send any unspecified routes back to index.html file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// list for active port
app.listen(PORT, () => {
    console.log(`App listening on ${PORT} at http://localhost:${PORT}.`)
});
