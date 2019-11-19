const request = require('request');

const geocode = (address, callback) => {
    const mapboxapi = "pk.eyJ1IjoiYWtoYW55ZSIsImEiOiJjazMycnhxam8wbDh1M2NzM2Vkd2x2dWoyIn0.2bBWr638WgD8bJtt1DDtQw";
    const mapboxurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=" + mapboxapi;

    request({ url: mapboxurl, json: true}, (error, { body }) => {
        if (error !== undefined && error !== null) {
            return callback("Unable to connect to the api")
        }
        if (body.features.length === 0) {
            return callback("Unable to retreive information");
        }
        callback(undefined, {
            lat: body.features[0].center[0],
            long: body.features[0].center[1],
            place: body.features[0].place_name
        });
    });
}

const forecast = (latlong, callback) => {
    if (latlong === undefined || latlong === null) {
        return callback("Lat Long provided not valid");
    }
    const url = "https://api.darksky.net/forecast/52e0c25d4664d54ee5f4593067bdcfa5/" + latlong.lat +"," + latlong.long;
    request({url, json: true}, (error, {body}) => {
        if (error === undefined === error === null) {
            return callback("Unable to connect to forecast api");
        }
        if (body.error !== undefined) {
            return callback("Weather for location not found");
        }
        callback(undefined, latlong.place + " " + body.hourly.summary);
    })
}

module.exports = {
    geocode: geocode,
    forecast: forecast
}