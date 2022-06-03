const http =require('http');
const data=require('./data');
http.createServer((req,res)=>{

res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({Name:"Rakesh Kumar",Email:"Rakeshshah190@gmail.com",MyValue:data}));
res.end();
}).listen(3000);

// console.log(process.argv);
// // console.log(process.argv[2]);

// const fs =require('fs');
// // const input = process.argv;
// // // fs.writeFileSync(input[2],input[3]);

// // // how we file add or delete with command

// // if(input[2] =='add')
// // {
// //     fs.writeFileSync(input[3],input[4]);
// // }else if(input[2]=='remove')
// // {
// //     fs.unlinkSync(input[3]);
// // }
// // else{
// //    console.log('invalid parameters');
// // }


// const path=require('path');
// // console.log(path);
// const dirPath=path.join(__dirname,'files'); // gives files path
// // console.log(dirPath);
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+`/apple${i}.txt`,'a simple test file');
// }

// // to read the files of files directory
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//     console.log('file name is',item);
//     });

// })