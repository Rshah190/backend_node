const fs =require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const filepath= `${dirpath}/apple.txt`;
fs.writeFileSync(filepath,'hello ')


// with utf8
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
})
//without utf8  it will create otput in buffer
fs.readFile(filepath,(err,item)=>{
    console.log(item);
})

fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
    if(!err) console.log('file  is updated');
});

 fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
     if(!err) console.log('file name  is updated');
 });
fs.unlinkSync(`${dirpath}/fruit.txt`);