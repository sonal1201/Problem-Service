const express = require('express');
const bodyparser = require('body-parser')
const { PORT } = require('./config/server');
const apiRouter = require('./routes');
const baseError = require('./errors/baseError');
const notFoundError = require('./errors/NotFoundError');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/ping', (req, res) => {
    return res.send({ msg: "Ping Checked Out" })
})

app.use('/api', apiRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started at : ${PORT}`)

    try {

        throw new notFoundError({})
        
    } catch (error) {
        
    }


})