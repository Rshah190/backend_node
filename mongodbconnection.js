const {MongoClient} = require('mongodb');
// for localhost connection
const url ='mongodb://localhost:27017';
const client = new MongoClient(url);
const database='eccomerce';
// console.log(client);

async function getData()
{
    let result = await  client.connect();
    let db =result.db(database);
    let collection= db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
}


getData();