const express = require("express");

var app = express();

const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("/"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "index.html"));
    });
}

app.listen((port), () => console.log(`url-shortener listening on port ${port}!`));