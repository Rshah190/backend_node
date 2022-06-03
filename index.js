const dbConnect=require('./mongodbconfig');
// const insert=require('./insert');

// console.log(insert.insert());


// first way of read
// dbConnect().then((resp)=>{
//     console.log(resp);
// resp.find().toArray().then((data)=>{
//     console.log(data);
// });
// });

// second way of read or easiest way
const main = async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}
main();
