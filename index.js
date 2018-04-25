var express = require('express');
var app = express();
var faker = require('faker');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function rnd(){
    return faker.random.number(10);
}

app.get('/', function (req, res, next) {
    res.json({
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        series: [
            [rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd()],
            [rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd()],
            [rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd(),rnd()]
        ]
    })
});

app.listen(3000, () => console.log('Listening on port 3000'));