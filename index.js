const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + 'views/index.html');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);