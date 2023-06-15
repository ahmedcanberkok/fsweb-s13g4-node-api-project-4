const express = require('express');
const server = express();
require("dotenv").config();
// console.log(process.env);

server.get("/hello",(req,res) => {
    res.json({message : process.env.message || "yokmuş"});
})


module.exports = server ;
