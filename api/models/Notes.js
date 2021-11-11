const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    category: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    }

})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;