const express = require('express');
const mongoose = require('mongoose'); // mongoose is our ORM to interact with our mongoDB database
const bodyParser = require('body-parser'); // allow us to take request and get data from the body 

const app = express();

// BodyParser Middleware

// Middleware is computer software that provides services to software applications beyond those available from the operating system. It can be described as "software glue"

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000; // process.env is for Heroku

    app.listen(port, () => console.log(`Server started on port ${port}`));

