// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create an instance of the express app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars as the default templating engine.
// default layout: main (main refers to the file.handlebars that holds the {body}, variable)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
