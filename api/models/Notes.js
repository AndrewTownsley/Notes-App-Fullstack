const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;