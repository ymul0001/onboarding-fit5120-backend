'use strict';

const env = require('dotenv');
const cors = require('cors');
env.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const UserRouter = require('./routes/UserRoute');
const AverageYieldCostRouter = require('./routes/AverageYieldCostRoute');
const CollectionRouter = require('./routes/CollectionRoute');
const ContaminationRateRouter = require('./routes/ContaminationRateRoute');
const KerbsideRecycleableRouter = require('./routes/KerbsideRecycleableRoute');

//configure express dependencies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

//register routes 
app.use('/v1/user', UserRouter);
app.use('/v1/averageyieldcost', AverageYieldCostRouter);
app.use('/v1/collection', CollectionRouter);
app.use('/v1/contaminationrate', ContaminationRateRouter);
app.use('/v1/kerbsiderecycleable', KerbsideRecycleableRouter);


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

module.exports = app;