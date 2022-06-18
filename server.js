// requirements
const express = require('express');
const path = require('path');
const fs = require('fs');
const { notes } = require('./db/db.json');

// heroku or local host port option
const PORT = process.env.PORT || 3001;

// call on express to run the server
const app = express();

// take user to these files
const apiRoutes = require('./public/routes/apiRoutes');
const htmlRoutes = require('./public/routes/htmlRoutes');

// parse the URL encoded and the JSON data
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

// public files using middleware
app.use(express.static('public'));

// Use apiRoutes and htmlRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Original website path to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Path to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Path to index.html if any issues with pathways
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// NEED TO PUSH THIS TO A POST REQUEST so it posts to the notes title and body
function newNote (body, notesArray) {
    const note = body;
    notesArray.push(note);

    // write file sync
    fs.writeFileSync(
        path.join(__dirname, './data/db.json'),
        JSON.stringify( { notes: notesArray }, null, 2)
    );
    // return to POST then put note text in in notesArray
    return note;
};

// route to /api/notes with a GET response
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// 

// list for active port
app.listen(PORT, () => {
    console.log(`Server now on ${PORT}.`);
});