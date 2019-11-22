const weatherService = require('../app');
const express = require("express");
const geocode = require('../utils/geocode');

const app = express();
console.log(weatherService);
console.log(geocode);

app.get('/api/weather', (req, res) => {
    if (req.query.address === undefined) {
        return res.send({ error: "No address provided"});
    }
    console.log(weatherService);
    weatherService(req.query.address, (data) => {
        res.send( {
            forecast: data,
            locaton: req.query.address
        })
    })
});

app.listen(4005, () => {
    console.log("Listnening at port 4005");
})