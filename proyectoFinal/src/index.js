/*const http = require("http")

const server = http.createServer((req,res)=>{
    res.status=200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello world")
});

server.listen(3000,()=> {
    console.log ("serve on port 3000")
});*/

const AuthRouter = require("./auth/router/AuthRouter")

const express = require("express");
const app = express();

app.use(AuthRouter)

app.listen(3000,()=>{
    console.log("server on port 3000")
});
