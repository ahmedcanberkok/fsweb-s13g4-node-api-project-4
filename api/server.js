const express = require('express');
const server = express();
require("dotenv").config();
// console.log(process.env);

server.use(express.json());
server.get("/hello",(req,res) => {
    res.json({message : process.env.message});
    res.send("<h1> NODE APP is Working... </h1> ");
    
})


module.exports = server ;
