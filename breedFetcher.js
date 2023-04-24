const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        const BreedNotFoundError = new Error(`Breed ${breedName} not found`);
        callback(BreedNotFoundError, null);
      } else {
        const breedDescription = data[0].description.trim();
        callback(null,breedDescription);
      }
    }
  });
};

module.exports = fetchBreedDescription;