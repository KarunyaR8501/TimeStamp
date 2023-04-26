const express= require("express")
const FileRouter = require("./Controllers/FileController")

const APIserver = express()

APIserver.use('/files',FileRouter)
module.exports =APIserver