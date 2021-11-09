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

const Note = require("./models/Notes"); 

app.get('/Notes', async (req, res) => {
    const todos = await Note.find();
})

    app.listen(30001, () => console.log("Server started on PORT 3001"));