# 11 Express.js: Note Taker

## About

```
As a small business owner, I want a note taking application to keep track of titles and body text.
```

GitHub repository: https://github.com/tdickson96/Note-Taker

Heroku: https://note-taker-example.herokuapp.com/notes 

## Usage

![demo](./assets/images/demo0.png)

![demo](./assets/images/demo1.png)

![demo](./assets/images/demo2.png)

![demo](./assets/images/demo3.png)

![demo](./assets/images/demo4.png)

![demo](./assets/images/demo5.png)

## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Author

Trent Dickson

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
