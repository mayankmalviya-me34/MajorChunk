const mongoose = require("mongoose");

const database = process.env.DATABASE;


mongoose.connect(database, { useNewUrlParser: true }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));