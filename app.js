const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter')
//Cross Origin Resource Sharing, different server er request block kore dei

const app = express();

app.use(cors());
app.use(express.json()); //eta na hole post request kaj korbena, eta automatically json e convert kore dey

app.use('/user', userRouter);

module.exports = app;