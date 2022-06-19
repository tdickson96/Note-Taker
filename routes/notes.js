// require express, path, file system, util, id generator, and database
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const uuid = require("../helpers/uuid.js");
const db = require("../db/db.json");

// Get data from this database or array
const dataGet = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")) || [];

// express
const notesRoute = express.Router();

// Left hand column GETs notes from db.json
notesRoute.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, dataGet) => {
    if (err) {
      console.error(err);
      return;
    }
    // push data from db.json to 
    res.send(dataGet);
  });
});

// Left hand column SAVEs notes from db.json
notesRoute.post("/notes", (req, res) => {
  // object array
  const { title, text } = req.body;
  // set pre-requisites for notes
  if (title && text) {
    const newNote = {
      title,
      text,
      // use ID generator
      note_id: uuid(),
    };

    // readFile to keep notes, then save more notes in addition
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // make string in JSON body
        const parsedNotes = JSON.parse(data);
        // push newNote that is now JSON data
        parsedNotes.push(newNote);
        // overwrite file to db.json
        fs.writeFile(
          "./db/db.json",
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Added new note")
        ); res.sendFile(path.join(__dirname, './public/notes.html'))
      }
    });

    // response for new note
    const response = {
      status: "new note",
      body: newNote,
    };
    res.status(201).json(response);
  } else {
    res.status(500).json("Error no new note created");
  }

});

module.exports = notesRoute;
