// require express
const express = require('express');

// heroku or local option
const PORT = process.env.PORT || 3001;
// call on app variable to run pathway/route
const app = express();
// take user to these files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse the URL encoded
app.use(express.urlencoded({ extended: true }));
// parse the JSON data
app.use(express.json());

// make the files in public available to user
app.use(express.static('public'));

// Use apiRoutes and htmlRoutes, I think api comes before html?
app.use('/api')