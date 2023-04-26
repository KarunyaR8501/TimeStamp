const express = require("express")
const NodeServer = express()
const APIserver = require('./APIserver')
NodeServer.use('/',APIserver)

const port = 4000;

NodeServer.listen(port,"localhost",()=>{
    console.log("server started")
})