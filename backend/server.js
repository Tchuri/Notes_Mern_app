const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv')

const app = express();

dotenv.config();
app.use(express.json()); // to accept json data


app.get('/',(req,res) =>{
    res.send("API is runnig")
});

app.get("/api/notes",(req,res) =>{
    res.json(notes);
});

app.get("/api/notes/:_id",(req,res) =>{
    const note=notes.find((n)=>n.id===req.params.id);

    res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('sever started on port ${PORT}'));