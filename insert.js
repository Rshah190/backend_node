const dbConnect=require('./mongodbconfig');
const insert=async ()=>{
const db=await dbConnect();
// const result=  db.insertOne({
//         name:'Ios',brand:"Apple",price:"123450"
//})
    // for getting acknwoledged that our data is inserted or not
    const result=  await db.insertOne({
        name:'Ios',brand:"Apple",price:"123450"
    })
   if(result.acknowledged)
   {
       console.log(result.insertedId);
   }
}
 insert();