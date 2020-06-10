var express = require("express");
var app = express();
const mongoose = require("mongoose");
var cors = require('cors')
//const bodyParser=require("body-parser");
require("dotenv/config");


// app.use(bodyParser.urlencoded({
//   extended: true
// }));
//app.use(bodyParser.json())

app.use(cors())


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Imports routes

const postRoute = require("./routes/posts");

//MIDDLEWARE

app.use("/posts",postRoute);

//ROUTES

app.get("/", (req, res,next) => {
  res.send("we are at home");
});

//Connect Db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },

  () => console.log("Connected to db")
);

//HOW TO WE START LISTING TO THE SERVER

app.listen(8000);
