const request = require('request');
const breedName = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  // console.log('body:', body);
  // console.log(typeof body);
  // console.log(data);
  // console.log(typeof data);
  //console.log(data[0].description);
  if (response && response.statusCode !== 200) {
    console.log('statusCode:', response.statusCode);
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log('The breed queried is not found!');
  }
  console.log(data[0].description);
})


