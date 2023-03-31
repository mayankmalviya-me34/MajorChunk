const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

//to secure connection we are using dotenv

dotenv.config({ path: "./config.env" });

//PORT running

const PORT = process.env.PORT;

//databse

require("./database/connection");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus:200,
  credentials:true,
  
}
app.use(cors(corsOptions));


//converting into json

app.use(express.json());

app.use(require("./router/BasicInfo/BasicInfo"));

app.listen(PORT,() => {
  console.log(`server is running at ${PORT}`);
});