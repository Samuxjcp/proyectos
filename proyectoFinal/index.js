/*const http = require("http")

const server = http.createServer((req,res)=>{
    res.status=200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello world")
});

server.listen(3000,()=> {
    console.log ("serve on port 3000")
});*/


const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.listen(3000,()=>{
    console.log("server on port 3000")
});
