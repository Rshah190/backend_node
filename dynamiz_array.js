const express =require('express');
const res = require('express/lib/response');
const app =express();
app.set('view engine','ejs');
app.get('/',(req,resp)=>{
    const user={
        name:"Rakesh shah",
        email:"Rakeshshah190@gmail.com",
        phone:"7006725818",
        skills:['php','laravel','nodejs']
    }
resp.render('dynamic_array',{user});
});
app.listen(4000);