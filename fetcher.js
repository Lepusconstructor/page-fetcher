const request = require('request');
const fs = require('fs');
const arg = process.argv.slice(2);
const url = arg[0];
const localFilePath = arg[1];
request(url, (error, response, body) => {
  if (response.statusCode === 200) {
    fs.writeFile(localFilePath, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    });
  } else {
    console.log(error);
    console.log(response.statusCode);
    process.exit();
  }
});
