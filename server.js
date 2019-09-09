var express = require('express');

//add setup
var app = express();
var server = app.listen(8000, function(){
    console.log('listening to requests on port 4000');
})

//static files
app.use(express.static('public'));
/*
var express = require("express")
var app = express()
var HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.use(express.static('public'))*/