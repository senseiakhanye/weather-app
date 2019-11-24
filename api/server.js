const weatherService = require('../app');
const express = require("express");

const app = express();

app.get('/api/weather', (req, res) => {
    if (req.query.address === undefined) {
        return res.send({ error: "No address provided"});
    }
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