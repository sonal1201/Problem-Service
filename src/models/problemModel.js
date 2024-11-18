const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: [true, 'Diffculty cannot be empty'],
        default: "easy"
    },

    //Array OF Object 
    testCase: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }


})


const Problem = mongoose.model('Problem', ProblemSchema);


module.exports = Problem