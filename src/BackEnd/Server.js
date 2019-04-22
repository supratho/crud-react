const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 1000;
const cors = require('cors');
const router = require('./Router');

mongoose.connect('mongodb://localhost:27017/mydbs', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('MongoDb connected on port: 27017');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/app', router);

app.listen(PORT, function () {
    console.log('Server is running on port: ', PORT);
});