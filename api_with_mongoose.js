const express=require('express');
const { ObjectId } = require('mongodb');
const config=require('./config');
const Product=require('./product');
const app =express();
app.use(express.json());

app.post('/create', async(req,res)=>{
    let data= new Product (req.body);
    let result=await data.save();
    console.log(result);
    res.send(result);
});

app.get('/list',async(req,res)=>{
    let data=await Product.find();
    res.send(data);
})
app.delete('/delete/:id',async(req,res)=>{
   let data =await Product.deleteOne({_id:ObjectId(req.params.id)})
    res.send(data);
})

app.put('/update/:id',async(req,res)=>{
    let data =await Product.updateOne({_id:ObjectId(req.params.id)},{
        // name:req.body.name,
        // price:req.body.price,
        // category:req.body.category,
        // brand:req.body.brand
        $set:req.body
    })
     res.send(data);
 })
app.listen(5000);