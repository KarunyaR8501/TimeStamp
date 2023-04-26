const FileRouter = require("express").Router()
const path = require("path")
const { Filename} = require('../FileSystem/FileName')

const fs = require("fs")

FileRouter.get('/createfile',function(req,res,next){
  const path =`./TimeStamp/${Filename(new Date())}.txt`
    fs.writeFileSync(path,`${Filename(new Date())}`);
        res.send("sucess")
    
})

module.exports = FileRouter
