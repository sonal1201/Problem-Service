const mongoose = require('mongoose');
const { MONGO } = require('./server');

async function connectToDB() {
    try {
        await mongoose.connect(MONGO);
    } catch (error) {
        console.log("Unable to connect Mongo")
        console.log(error)

    }
}

module.exports = connectToDB