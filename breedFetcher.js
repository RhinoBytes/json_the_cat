const request = require('request');

const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.error("error occurred:", error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed ${breed} not found`);
    } else {
      console.log(data);
      console.log(typeof data);
    }
  }
});