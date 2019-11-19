const express = require("express");
const path = require('path');
const weatherservice = require("../utils/geocode");

const folderLocation = path.join(__dirname, "../html");
const app = express();

app.use(express.static(folderLocation));

app.get('/api/weather', (req, res) => {
    res.send(__dirname);
});

app.listen(3005, () => {
    console.log("Listnening at port 3005");
})