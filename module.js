const os=require('os')
console.log(os.arch())
console.log(os.version())
console.log(os.tmpdir())
console.log(__dirname)
console.log(__filename)

//path module
const path=require('path')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.delimiter)

//filesystem module
const fs=require('fs')
fs.readFile('abc.txt',(err,data)=>{
    if(err)console.log(err);
    else console.log(data.toString())
})

//write
fs.writeFile("xyz.txt","hi iam teja sri",(err)=>{
    if(err)console.log(err);
    else console.log("successfully updated")
})

//append
fs.appendFile("xyz.txt","and iam 19",(err)=>{
    if(err)console.log(err);
    else console.log("successfully updated")
})

//delete
fs.unlink("xyz.txt",(err)=>{
    if(err)console.log(err);
    else console.log("successfully deleted")
})

//rename
fs.rename("xyz.txt","def.txt",(err)=>{
    if(err)console.log(err);
    else console.log("rename")
})