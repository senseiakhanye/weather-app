const weatherservice = require('./utils/geocode');

if (process.argv.length < 3) {
    return console.log("No arguments found");
}

const areaName = process.argv[2];

weatherservice.geocode(areaName, (error, data) => {
    if (error !== undefined) {
        // return console.log(error)
    }
    weatherservice.forecast(data, (error, data) => {
        if (error !== undefined) {
            // return console.log(error);
        }
        // console.log(data);
    })
})
