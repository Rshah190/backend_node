const dbConnect=require('./mongodbconfig');
// const updateData=()=>{
//     let data=dbConnect();
//    // console.log(data); // it will return promise


// }

const updateData=async ()=>{
    let db=await dbConnect();
   // console.log(data); // it will return promise

   let result=await db.updateMany(
       {_id:ObjectId('629211452c899e1db340470f')},
       {$set:{name:'Apple 3   ios'}}
   )
   console.log(result);
}
// update
updateData();