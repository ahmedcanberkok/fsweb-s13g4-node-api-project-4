const express = require('express');
const server = express();
const router =require("./users/users-router")
require("dotenv").config();
// console.log(process.env);

server.use(express.json());
server.get("/hello",(req,res) => {
    res.send("<h1> NODE APP is Working... </h1> ");
    
})

server.use("/api",router);
 

module.exports = server ;
