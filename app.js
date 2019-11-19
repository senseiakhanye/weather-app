const weatherservice = require('./utils/geocode');

weatherservice.geocode("rosebank", (error, data) => {
    if (error !== undefined && error !== null) {
        return console.log(error)
    }
    weatherservice.forecast(data, (error, data) => {
        if (error !== undefined && error !== null) {
            return console.log(error);
        }
        console.log(data);
    })
})