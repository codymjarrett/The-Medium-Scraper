// require all my dependencies
const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
// const db = require("../models");


const app = express();

// PORT
const PORT = 3000;

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhose/mongoHeadlines";
// Mongoose.connect(MONGODB_URI);

// // require in models
// const db = require("./models");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );

app.set("view engine", "handlebars");

  // Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// make connection to mongoose
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

// Database configuration
// const databaseUrl = "mediumScraper";
// const collections = ["scrapedData"];







 // Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

  module.exports = app;