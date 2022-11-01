//require file system, request, check if path is valid, might add is-valid-url
const fs = require('fs');
const request = require('request');
const isValid = require('is-valid-path');

//fetcher(); accepts two command line arguments, a url and a file path.

const inputArgs = process.argv.slice(2);
const url = inputArgs[0];
const filePath = inputArgs[1];

//checks if filePath is valid
const fetcher = function() {
  if (!isValid(filePath)) {
    console.log('INVALID FILE PATH');
    process.exit();
  }
  //uses request to find and return page data; logs error if not found
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    //writes into new file - error if found, otherwise .length property and filePath are printed if this works
    fs.writeFile(filePath, body, error => {
      if (error) {
        console.log(error);
      }
    });

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`);
  });
};
fetcher();