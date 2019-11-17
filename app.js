const request = require('request');

const url = "https://api.darksky.net/forecast/52e0c25d4664d54ee5f4593067bdcfa5/37.8267,-122.4233";

request({ url:url, json: true }, (error, response, body) => {
    console.log(error);
    console.log(body.minutely.data[0]);
});