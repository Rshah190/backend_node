const express=require('express');
const mongodb = require('mongodb');
const dbConnect=require('./mongodbconfig');
const app=express();
app.use(express.json()); // for post data 

// fetch the records
app.get('/',async(req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

//post the data
app.post('/',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertOne(req.body);
    // console.log(req.body);
    resp.send(result);
})

//update the data
app.put('/',async(req,resp)=>{
let data=await dbConnect();
let result=await data.updateOne({_id:ObjectId('629337fbc5ab2f5aeed43a33')},{$set:req.body}); 
resp.send(result);
});

//delete the data
app.delete("/:id",async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result);
})



app.listen(5000);