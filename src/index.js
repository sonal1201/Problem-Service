const express = require('express');
const bodyparser = require('body-parser')
const { PORT, MONGO } = require('./config/server');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/dbConfig');
const mongoose = require('mongoose')

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/ping', (req, res) => {
    return res.send({ msg: "Ping Checked Out" })
})

app.use('/api', apiRouter)

app.use(errorHandler)


app.listen(PORT, async () => {
    console.log(`Server started at : ${PORT}`)

    await connectToDB();
    console.log("Db successFully Connected");
})