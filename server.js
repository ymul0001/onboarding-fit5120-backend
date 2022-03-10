'use strict';

const env = require('dotenv');
const cors = require('cors');
env.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const UserRouter = require('./routes/UserRoute');

//configure express dependencies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

//register routes 
app.use('/v1/user', UserRouter);


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

module.exports = app;