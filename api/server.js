const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', {
    useNewURLParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected to the DB!!!!"))
    .catch(console.error);

const Note = require("./models/Note"); 

app.get('/notes', async (req, res) => {
    const notes = await Note.find()
    res.json(notes);
})

app.post('/note/new', (req, res) => {
    const note = new Note({
        title: req.body.title,
        text: req.body.text,
        complete: req.body.complete,
        category: req.body.category,
        date: req.body.date
    })
    note.save();
    res.json(note);
})

app.delete('/note/delete/:id', async (req, res) => {
    const result = await Note.findByIdAndDelete(req.params.id);

    res.json({result});
})

app.get('/note/complete/:id', async (req, res) => {
    const note = await Note.findById(req.params.id)
    note.complete = !note.complete;
    note.save();
    res.json(note);
})

    app.listen(3001, () => console.log("Server started on PORT 3001"));