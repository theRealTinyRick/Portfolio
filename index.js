const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/pages'));
app.use(express.static(__dirname + '/pages/codesnippets'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/soulslikedemo', (req, res) => {
    res.sendFile(__dirname + '/pages/soulslikedemo.html');
});

app.get('/api/duelmastersdemo', (req, res) => {
    res.sendFile(__dirname + '/pages/duelmastersdemo.html');
});

app.get('/api/contact', (req, res) => {
    res.sendFile(__dirname + '/pages/contact.html');
});

app.get('/api/code', (req, res) => {
    res.sendFile(__dirname + '/pages/code.html');
});

app.get('/api/code/tpc', (req, res) => {
    res.sendFile(__dirname + '/pages/codesnippets/third-person-controller.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on PORT: " + port + "..."));