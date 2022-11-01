const fs = require("fs");
const request = require("request");

let inputArgs = [process.argv.slice[2]]; //holds the two command line arguments
let url = inputArgs[0]; //first argument - valid URL
let filePath = inputArgs[1]; //second argument - destination for data to be published

const fetcher = function(url, filePath) {
//requesting web page
request(url, (error, body) => {

  let fileSize = body.length;

//log error in fetching page data
  if (error) {
    console.log(`${error}`);  
  }
//write file if it works!
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.log(err);
  }
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`);
    });
})
};
fetcher();