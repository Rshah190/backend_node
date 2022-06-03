const express= require('express');
const app=express();
app.get('',(req,resp)=>{
    resp.send('<h1>hello shah</h1>')
})
app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="enter username"/>
    `);
})
app.get('/contact',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="enter username" value="${req.query.name}"/><br>
    <input type="submit" value="login">
    `);
})

// send json data
app.get('/send/json',(req,resp)=>{
    resp.send({
        email:"rakeshshah190@gmail.com",
        phone:"7006725818"
    })
})
app.get('/send/json/array',(req,resp)=>{
    resp.send([
        {
        email:"rakeshshah190@gmail.com",
        phone:"7006725818"
    },
    {
        email:"rakeshshah190@gmail.com",
        phone:"7006725818"
    },   {
        email:"rakeshshah190@gmail.com",
        phone:"7006725818"
    },   {
        email:"rakeshshah190@gmail.com",
        phone:"7006725818"
    }
])
})

app.get('/create/link',(req,resp)=>{
    resp.send(`<a href="/">Go To Home Page</a>`);
})
app.listen(4000);