const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const path = require("path");

//path is a library to work with files in js

app.use(express.json());
app.use(cors());
app.use(express.static("public")); //I'm keeping my static folders called public

let notes = [
  {
    title: "Groceries list",
    content: "Tomatoes, yoghurt, honey, milk",
  },

  {
    title: "Birthday present",
    content: "Remember to buy birthday present for Max",
  },
];

app.get("/notes", (req, res) => {
  res.send(JSON.stringify(notes));
});

//get, post, delete, put, patch etc is a http request from browser to server
app.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    content: req.body.content,
  };

  notes.push(newNote);
  res.send(JSON.stringify(newNote));
  //servers can only send strings, not JSON objects, http body can only contain a string, not a JSON object
  //on its own, js will try to convert JSON objects to strings, which will give u object object
});

//req is what your browser sends to your server.
//res is from your server to browser.

app.listen(port);

console.log(`Server listening to http://localhost:${port}`);
