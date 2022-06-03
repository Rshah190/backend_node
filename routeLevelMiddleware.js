const express=require('express');
const app=express();

const reqFilter=(req,resp,next)=>{
    console.log('middleware works');

    if(!req.query.age)
    {
        resp.send('Please provide age')
    }
    else if(req.query.age > 10)
    {
        resp.send('You can go ahead');

    }
    else
    {
        resp.send('you are not allowed');
    }
    next(); // if we cannot use next() then loop will remain continues
}
// Midlleware for whole routes
// app.use(reqFilter); 
// app.get('/home',(req,res)=>{
//     res.send('hello shah');
// })
// app.get('/contact',(req,res)=>{
//     res.send('hello rakesh');
// })
// app.get('/about',(req,res)=>{
//     res.send('hello kumar');
// })

// middleware for particular route we apply on about
app.get('/home',(req,res)=>{
    res.send('hello shah');
})
app.get('/contact',(req,res)=>{
    res.send('hello rakesh');
})
app.get('/about',reqFilter,(req,res)=>{
    res.send('hello kumar');
})
app.listen(4000);