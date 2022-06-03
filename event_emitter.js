const express=require('express');
const EventEmitter=require('events');
const app=express();
const event =new EventEmitter();

let count=0;
event.on("countApi",()=>{
    count++;
    console.log('event called',count);
})

app.get('/',(req,res)=>{
    res.send('index page is called');
    event.emit("countApi")
});
app.get('/search',(req,res)=>{
    res.send('search api is called');
    event.emit("countApi")

});
app.get('/senddata',(req,res)=>{
    res.send('send data success');
    event.emit("countApi")

});
app.listen(5000);