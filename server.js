var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next) {
        var date = new Date().toString();
        console.log('Request on ' + date + ': ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', function (req, res) {
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Express server started at port ' + port + '!');
});