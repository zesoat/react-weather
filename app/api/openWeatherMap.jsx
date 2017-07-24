let axios = require('axios');

const API_KEY = "ce0e081024b9e6fe9c8aa1a8a827f34e";
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid="+API_KEY+"&units=imperial";

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        } else{
          return res.data.main.temp;
        }
      // }, function(res) {
      //   throw new Error(res.data.message);
      }, function(err) {
        throw new Error('Unable to fetch weather for that location!');
      });
  }
}
