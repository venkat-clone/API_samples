const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        require:true
    },
    isComplete: {
        type: Boolean,
    }

})

module.exports = mongoose.model('todo', TodoSchema)