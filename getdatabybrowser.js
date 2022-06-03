const express= require('express');
const app=express();

// app.get("",(req,res)=>{
//     res.send('Hello shah');
// })

// get data by browser
//http://localhost:4000/?name=shah

app.get("",(req,res)=>{
    res.send("Hello shah,"+req.query.name);
})
app.listen(4000);