const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/wallet_store");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.listen(3000, () => {
  console.log("listening to 3000");
});


app.get("/balance",(req,res)=>{

})
app.get("/account  ",(req,res)=>{

})
app.put()
// get request -> balance, account address
// post request -> pay, retrieve balance to other crypto account