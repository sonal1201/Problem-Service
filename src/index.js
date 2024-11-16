const express = require('express');
const bodyparser = require('body-parser')
const { PORT } = require('./config/server');
const apiRouter = require('./routes');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/ping',(req,res)=>{
    return res.send({msg:"Ping Checked Out"})
})

app.use('/api',apiRouter)

app.listen(PORT, () => {
    console.log(`Server started at : ${PORT}`)
})