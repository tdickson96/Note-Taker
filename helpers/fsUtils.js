const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};
  /**
   *  Function to read data from a given file, delete an element based on an 
   *  identifier and append the filtered content back to the file
   *  @param {string} file The path to the file you want to save to.
   *  @param {string} identifier identifier of the object you want to delete
   *  @returns {void} Nothing
   */
   const readFilterAndAppend = (file, identifier) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter(obj => obj.id !== identifier);
        writeToFile(file, filteredData);
      }
    });
  };

// Line 5, 12, 22, 40
module.exports = { readFromFile, writeToFile, readAndAppend, readFilterAndAppend };