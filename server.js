const express = require("express");
const app = express();


//routes

app.get('/', (req, res) => {
    res.send("Hello devoob");
})

app.listen(4000, ()=> {
    console.log("Listening on port 4000");
})

