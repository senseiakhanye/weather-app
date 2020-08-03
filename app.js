const weatherservice = require('./utils/geocode');

// if (process.argv.length < 3) {
//     return console.log("No arguments found");
// }

// const areaName = process.argv[2];

const getWeather = (address, callback) => {
    weatherservice.geocode(address, (error, data) => {
        if (error !== undefined) {
            if (callback !== undefined) {
                return callback(error);
            }
        }
        weatherservice.forecast(data, (error, data) => {
            if (error !== undefined && callback !== undefined) {
                return callback(error);
            }
            return callback(data);
        })

    })  
}

module.exports = getWeather;