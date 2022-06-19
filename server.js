// requirements
const express = require('express');
const notesRoute = require("./routes/notes.js"); 
const indexRoute = require("./routes/index.js");

// heroku or local host port option
const PORT = process.env.PORT || 3001;

// call on express to run the server
const app = express();

// parse the URL encoded and the JSON data
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use("/api", notesRoute);
app.use("/", indexRoute);
app.use(express.static('public'));

// list for active port
app.listen(PORT, () => {
    console.log(`App listening on ${PORT} at http://localhost:${PORT}.`)
});
