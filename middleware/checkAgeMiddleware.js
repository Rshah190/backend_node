module.exports= reqFilter=(req,resp,next)=>{
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