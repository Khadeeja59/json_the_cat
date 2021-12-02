const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    callback(error, null);
  }
  if (response && response.statusCode !== 200) {
    error = response.statusCode;
    callback(error, null);  
  }
  const data = JSON.parse(body);
  if (!data.length) {
    error = 'The breed queried is not found!';
    callback(error , null);
  }
  else {
    description = (data[0].description);
    callback(null , description);
  }
});
};
module.exports = { fetchBreedDescription };